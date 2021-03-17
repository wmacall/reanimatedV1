import React, {useEffect, useRef, useState} from 'react';
import {View, Pressable, Dimensions, Text} from 'react-native';
import Animated, {
  Value,
  timing,
  Easing,
  interpolate,
  concat,
  useValue,
  divide,
  multiply,
} from 'react-native-reanimated';
import Svg, {Path} from 'react-native-svg';
import styles from './styles';

const {width, height} = Dimensions.get('window');
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const Arrow = () => (
  <Svg
    x="0px"
    y="0px"
    width="25px"
    fill="#fff"
    height="25px"
    viewBox="0 0 960 560"
    xmlSpace="preserve">
    <Path d="M480 344.181L268.869 131.889c-15.756-15.859-41.3-15.859-57.054 0-15.754 15.857-15.754 41.57 0 57.431l237.632 238.937c8.395 8.451 19.562 12.254 30.553 11.698 10.993.556 22.159-3.247 30.555-11.698L748.186 189.32c15.756-15.86 15.756-41.571 0-57.431s-41.299-15.859-57.051 0L480 344.181z" />
  </Svg>
);

const RotationAnimation = () => {
  const toggleAnimatedValue = useRef(new Value(1)).current;
  const [toggle, setToggle] = useState(false);

  const isButtonPressed = useRef(useValue(1)).current;
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    timing(isButtonPressed, {
      toValue: isPressed ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }, [isPressed, isButtonPressed]);

  useEffect(() => {
    timing(toggleAnimatedValue, {
      toValue: toggle ? 0 : 1,
      duration: 200,
      easing: Easing.linear,
    }).start();
  }, [toggle, toggleAnimatedValue]);

  let rotate = interpolate(toggleAnimatedValue, {
    inputRange: [0, 1],
    outputRange: [180, 0],
  });

  let widthButton = interpolate(isButtonPressed, {
    inputRange: [0, 1],
    outputRange: [multiply(width, 0.13), multiply(width, 0.65)],
  });

  let heightButton = interpolate(isButtonPressed, {
    inputRange: [0, 1],
    outputRange: [multiply(width, 0.13), multiply(height, 0.06)],
  });

  let opacity = interpolate(isButtonPressed, {
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  let translateY = interpolate(isButtonPressed, {
    inputRange: [0, 1],
    outputRange: [0, -40],
  });

  let borderRadius = interpolate(isButtonPressed, {
    inputRange: [0, 1],
    outputRange: [divide(multiply(width, 0.13), 2), 0],
  });

  return (
    <View style={styles.container}>
      <AnimatedPressable
        onPress={() => setToggle((prev) => !prev)}
        style={[
          styles.button,
          {
            transform: [
              {
                rotate: concat(rotate, 'deg'),
              },
            ],
          },
        ]}>
        <Arrow />
      </AnimatedPressable>

      <Pressable onPress={() => setIsPressed((prev) => !prev)}>
        <Animated.View
          style={[
            styles.buttonSubmit,
            {
              borderRadius,
              width: widthButton,
              height: heightButton,
            },
          ]}>
          <Animated.Text style={[styles.textButton, {opacity}]}>
            Press me
          </Animated.Text>
          <Animated.View style={[styles.arrow, {transform: [{translateY}]}]}>
            <Arrow />
          </Animated.View>
        </Animated.View>
      </Pressable>
    </View>
  );
};

export default RotationAnimation;
