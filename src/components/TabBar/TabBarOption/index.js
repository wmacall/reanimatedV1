import React, {useEffect, useRef, useState} from 'react';
import {Pressable} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {useNavigation} from '@react-navigation/native';

const {timing, Value, interpolateColors, interpolate} = Animated;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

import styles from './styles';
import {COLORS} from '../../../assets/colors';

const TabBarOption = ({route, title, activeRoute, index}) => {
  const {navigate} = useNavigation();
  const isFocused = index === activeRoute;
  const [isPressed, setIsPressed] = useState(false);
  const animatedValue = useRef(new Value(1)).current;
  const animatedPress = useRef(new Value(1)).current;

  useEffect(() => {
    timing(animatedValue, {
      toValue: isFocused ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
    }).start();
  }, [animatedValue, isFocused]);

  useEffect(() => {
    timing(animatedPress, {
      toValue: isPressed ? 0 : 1,
      duration: 300,
      easing: Easing.ease,
    }).start();
  }, [isPressed, animatedPress]);

  const opacity = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  const translateY = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 10],
  });

  const backgroundColor = interpolateColors(animatedValue, {
    inputRange: [0, 1],
    outputColorRange: [COLORS.WHITE, COLORS.TAB_BAR],
  });

  const scale = interpolate(animatedPress, {
    inputRange: [0, 0.5, 1],
    outputRange: [1.2, 0.5, 1],
  });

  return (
    <AnimatedPressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => navigate(route)}
      style={styles.containerOption}>
      <Animated.View
        style={[styles.dot, {backgroundColor, transform: [{scale}]}]}
      />
      <Animated.Text
        style={[styles.textOption, {opacity, transform: [{translateY}]}]}>
        {title}
      </Animated.Text>
    </AnimatedPressable>
  );
};

export default TabBarOption;
