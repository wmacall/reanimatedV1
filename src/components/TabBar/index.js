import React, {useRef, useEffect} from 'react';
import {View, Dimensions} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';
import TabBarOption from './TabBarOption';

const {width} = Dimensions.get('window');
const {timing, Value} = Animated;

import styles from './styles';

const setTranslation = (screen) => {
  const InitialPosition = -width / 3;
  switch (screen) {
    case 0:
      return InitialPosition;
    case 2:
      return -InitialPosition;
    default:
      return 0;
  }
};

const ROUTES = [
  {
    title: 'Home',
    route: 'ScreenOne',
  },
  {
    title: 'Profile',
    route: 'ScreenTwo',
  },
  {
    title: 'Chat',
    route: 'ScreenThree',
  },
];

const TabBar = ({state}) => {
  const {index} = state;
  const translateX = useRef(new Value(setTranslation(index))).current;
  useEffect(() => {
    const toValue = setTranslation(index);
    timing(translateX, {
      toValue,
      duration: 300,
      easing: Easing.ease,
    }).start();
  }, [translateX, index]);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.indicator,
          {
            transform: [
              {
                translateX,
              },
            ],
          },
        ]}
      />
      {ROUTES.map((route, i) => (
        <TabBarOption key={i} activeRoute={index} index={i} {...route} />
      ))}
    </View>
  );
};

export default TabBar;
