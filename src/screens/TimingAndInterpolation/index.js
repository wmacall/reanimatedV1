import React from 'react';
import {View, Pressable, Text} from 'react-native';
import Animated, {
  Value,
  timing,
  Easing,
  interpolateColors,
} from 'react-native-reanimated';
import styles from './styles';

const TimingAndColorInterpolation = () => {
  const animatedValue = new Value(0);

  const startAnimation = () => {
    timing(animatedValue, {
      duration: 2000,
      toValue: 50,
      easing: Easing.ease,
    }).start(() => {
      console.log('hola');
    });
  };

  const backgroundColor = interpolateColors(animatedValue, {
    inputRange: [0, 15, 25, 50],
    outputColorRange: ['#2196F3', '#2196F3', '#E64A19', '#009688'],
  });

  return (
    <View style={styles.container}>
      <Pressable onPress={startAnimation}>
        <Text style={styles.textButton}>Start transformation</Text>
      </Pressable>
      <Animated.View
        style={[
          styles.squareToCircle,
          {borderRadius: animatedValue, backgroundColor},
        ]}
      />
    </View>
  );
};

export default TimingAndColorInterpolation;
