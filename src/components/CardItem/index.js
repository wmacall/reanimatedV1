import React, {useEffect, useRef, useState} from 'react';
import {Pressable, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Animated, {Easing} from 'react-native-reanimated';

const {Value, timing, interpolate} = Animated;
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

import styles from './styles';

const CardItem = ({children, routeName, title}) => {
  const [isPressed, setIsPressed] = useState(false);
  const toggleAnimatedValue = useRef(new Value(1)).current;
  const {navigate} = useNavigation();

  useEffect(() => {
    timing(toggleAnimatedValue, {
      toValue: isPressed ? 0 : 1,
      duration: 50,
      easing: Easing.ease,
    }).start();
  }, [toggleAnimatedValue, isPressed]);

  const scalePressable = interpolate(toggleAnimatedValue, {
    inputRange: [0, 1],
    outputRange: [0.94, 1],
  });

  return (
    <AnimatedPressable
      onPressIn={() => setIsPressed((prev) => !prev)}
      onPressOut={() => setIsPressed((prev) => !prev)}
      onPress={() => {
        if (routeName) {
          navigate(routeName);
        }
      }}
      style={[
        styles.cardExample,
        {
          transform: [{scale: scalePressable}],
        },
      ]}>
      {children}
      <Text numberOfLines={2} style={styles.textCard}>
        {title}
      </Text>
    </AnimatedPressable>
  );
};

CardItem.defaultProps = {
  routeName: null,
  title: '',
};

export default CardItem;
