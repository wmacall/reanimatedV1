import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Animated as RNAnimted,
} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import {loop} from 'react-native-redash/lib/module/v1';
import {COLORS} from '../../assets/colors';
import styles from './styles';

const {set, useCode, useValue, interpolate, concat} = Animated;

const Header = () => {
  const animatedValue = useValue(0);

  useCode(
    () =>
      set(
        animatedValue,
        loop({
          duration: 3000,
          easing: Easing.linear,
        }),
      ),
    [animatedValue],
  );

  const rotation = interpolate(animatedValue, {
    inputRange: [0, 1],
    outputRange: [0, 360],
  });

  const scale = interpolate(animatedValue, {
    inputRange: [0, 0.4, 0.5, 0.7, 0.8, 1],
    outputRange: [1, 1.2, 1, 1, 0.6, 1],
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <StatusBar backgroundColor={COLORS.PRIMARY} barStyle="light-content" />
      <View style={styles.header}>
        <Animated.Image
          resizeMode="contain"
          style={[
            styles.image,
            {
              transform: [{rotate: concat(rotation, 'deg')}, {scale}],
            },
          ]}
          source={{
            uri:
              'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png',
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Header;
