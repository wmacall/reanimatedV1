import _defineProperty from '@babel/runtime/helpers/defineProperty';
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly)
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    keys.push.apply(keys, symbols);
  }
  return keys;
}
function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};
    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }
  return target;
}
import Animated, {add} from 'react-native-reanimated';
var Clock = Animated.Clock,
  Value = Animated.Value,
  block = Animated.block,
  cond = Animated.cond,
  stopClock = Animated.stopClock,
  set = Animated.set,
  startClock = Animated.startClock,
  clockRunning = Animated.clockRunning,
  not = Animated.not,
  and = Animated.and,
  reTiming = Animated.timing,
  reDecay = Animated.decay,
  reSpring = Animated.spring,
  SpringUtils = Animated.SpringUtils;
var defaultSpringConfig = SpringUtils.makeDefaultConfig();
var animate = function animate(_ref) {
  var fn = _ref.fn,
    clock = _ref.clock,
    state = _ref.state,
    config = _ref.config,
    from = _ref.from;
  return block([
    cond(not(clockRunning(clock)), [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, from),
      startClock(clock),
    ]),
    fn(clock, state, config),
    cond(state.finished, stopClock(clock)),
    state.position,
  ]);
};
export var timing = function timing(params) {
  var _clock$duration$from$ = _objectSpread(
      {
        clock: new Clock(),
        duration: 250,
        from: 0,
        to: 1,
        easing: function easing(v) {
          return add(v, 0);
        },
      },
      params,
    ),
    clock = _clock$duration$from$.clock,
    easing = _clock$duration$from$.easing,
    duration = _clock$duration$from$.duration,
    from = _clock$duration$from$.from,
    to = _clock$duration$from$.to;
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  var config = {toValue: new Value(0), duration: duration, easing: easing};
  return block([
    cond(not(clockRunning(clock)), [
      set(config.toValue, to),
      set(state.frameTime, 0),
    ]),
    animate({
      clock: clock,
      fn: reTiming,
      state: state,
      config: config,
      from: from,
    }),
  ]);
};
export var decay = function decay(params) {
  var _clock$velocity$decel = _objectSpread(
      {
        clock: new Clock(),
        velocity: new Value(0),
        deceleration: 0.998,
        from: 0,
      },
      params,
    ),
    clock = _clock$velocity$decel.clock,
    from = _clock$velocity$decel.from,
    velocity = _clock$velocity$decel.velocity,
    deceleration = _clock$velocity$decel.deceleration;
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    velocity: new Value(0),
  };
  var config = {deceleration: deceleration};
  return block([
    cond(not(clockRunning(clock)), [set(state.velocity, velocity)]),
    animate({
      clock: clock,
      fn: reDecay,
      state: state,
      config: config,
      from: from,
    }),
  ]);
};
export var spring = function spring(params) {
  var _clock$velocity$from$ = _objectSpread(
      {clock: new Clock(), velocity: new Value(0), from: 0},
      params,
    ),
    clock = _clock$velocity$from$.clock,
    from = _clock$velocity$from$.from,
    velocity = _clock$velocity$from$.velocity,
    springConfig = _clock$velocity$from$.config,
    to = _clock$velocity$from$.to;
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    velocity: new Value(0),
  };
  var config = _objectSpread(
    _objectSpread({}, defaultSpringConfig),
    {},
    {toValue: new Value(0)},
    springConfig,
  );
  return block([
    cond(not(clockRunning(clock)), [
      set(config.toValue, to),
      set(state.velocity, velocity),
    ]),
    animate({
      clock: clock,
      fn: reSpring,
      state: state,
      config: config,
      from: from,
    }),
  ]);
};
export var delay = function delay(node, duration) {
  var clock = new Clock();
  return block([
    timing({clock: clock, from: 0, to: 1, duration: duration}),
    cond(not(clockRunning(clock)), node),
  ]);
};
export var loop = function loop(loopConfig) {
  var _clock$duration$boome = _objectSpread(
      {
        clock: new Clock(),
        duration: 250,
        boomerang: false,
        autoStart: true,
        easing: function easing(v) {
          return add(v, 0);
        },
      },
      loopConfig,
    ),
    clock = _clock$duration$boome.clock,
    easing = _clock$duration$boome.easing,
    duration = _clock$duration$boome.duration,
    boomerang = _clock$duration$boome.boomerang,
    autoStart = _clock$duration$boome.autoStart;
  var state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };
  var config = {toValue: new Value(1), duration: duration, easing: easing};
  return block([
    cond(and(not(clockRunning(clock)), autoStart ? 1 : 0), startClock(clock)),
    reTiming(clock, state, config),
    cond(state.finished, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.frameTime, 0),
      boomerang
        ? set(config.toValue, cond(config.toValue, 0, 1))
        : set(state.position, 0),
    ]),
    state.position,
  ]);
};
//# sourceMappingURL=AnimationRunners.js.map
