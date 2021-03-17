import React, {useRef, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Svg, {Defs, G, LinearGradient, Path, Stop} from 'react-native-svg';
import {call, Easing, timing, useCode, Value} from 'react-native-reanimated';

const {PI, cos, sin, round} = Math;

import styles from './styles';

const ProgressCircle = ({size, strokeWidth, width}) => {
  const animatedValue = useRef(new Value(0));
  const [percentage, setPercentage] = useState(0);
  const point = size / 2;
  const radius = point - width / 2;

  const startAnimation = () => {
    timing(animatedValue.current, {
      toValue: 60,
      duration: 1000,
      easing: Easing.ease,
    }).start();
  };

  useCode(
    () =>
      call([animatedValue.current], (value) => {
        setPercentage(round(value[0]));
      }),
    [animatedValue],
  );

  const getAngle = (angleToTransform) => ((angleToTransform - 90) * PI) / 180.0;
  const getX = (angle) => point + radius * cos(getAngle(angle));
  const getY = (angle) => point + radius * sin(getAngle(angle));

  const getArc = (angle, progress) => {
    const arc = progress - angle <= 180 ? '0' : '1';
    return `M ${getX(progress)} ${getY(
      progress,
    )} A ${radius} ${radius} 0 ${arc} 0 ${getX(angle)} ${getY(angle)}`;
  };

  const path = getArc(0, (360 * percentage) / 100);
  return (
    <View style={styles.container}>
      <View style={styles.containerContent}>
        <Svg width={size} height={size}>
          <G>
            <Defs>
              <LinearGradient id="grad" x1="20%" y1="0%" x2="20%" y2="100%">
                <Stop offset={0} stopColor={'#fff'} />
                <Stop offset={0.5} stopColor={'#FF5722'} />
                <Stop offset={1} stopColor={'#BF360C'} />
              </LinearGradient>
            </Defs>
            <Path
              d={path}
              fill="transparent"
              stroke={'url(#grad)'}
              strokeLinecap="round"
              strokeWidth={strokeWidth}
            />
          </G>
        </Svg>
        <View style={styles.containerText}>
          <Text style={styles.textNumber}>{percentage}</Text>
          <Text style={styles.percentageChar}>%</Text>
        </View>
        <Pressable style={styles.button} onPress={startAnimation}>
          <Text>Animate circle</Text>
        </Pressable>
      </View>
    </View>
  );
};

ProgressCircle.defaultProps = {
  width: 20,
  size: 220,
  strokeWidth: 20,
  valueProgress: 0,
};

export default ProgressCircle;
