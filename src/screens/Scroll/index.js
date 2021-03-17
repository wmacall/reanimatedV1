import React, {useRef} from 'react';
import {View, Text, SafeAreaView, Dimensions} from 'react-native';
import Animated, {
  call,
  Extrapolate,
  interpolate,
  useCode,
} from 'react-native-reanimated';
import Header from '../../components/Header';
import styles from './styles';

const {width} = Dimensions.get('window');

const Scroll = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  useCode(
    () =>
      call([scrollY], (value) => {
        console.log(value);
      }),
    [scrollY],
  );

  const opacity = interpolate(scrollY, {
    inputRange: [0, 300],
    outputRange: [1, 0],
  });

  const scale = interpolate(scrollY, {
    inputRange: [0, 350],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateX = interpolate(scrollY, {
    inputRange: [300, 400],
    outputRange: [-width, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <View style={styles.container}>
      <View style={styles.containerHeader}>
        <Header />
      </View>
      <Animated.View style={styles.containerCover}>
        <SafeAreaView />
        <Animated.Image
          resizeMode="cover"
          style={[styles.coverImage, {opacity}]}
          source={{uri: 'https://source.unsplash.com/featured/?kilimanjaro'}}
        />
      </Animated.View>
      <Animated.ScrollView
        scrollEventThrottle={8}
        bounces={false}
        showsVerticalScrollIndicator={false}
        style={styles.spacer}
        onScroll={Animated.event([
          {
            nativeEvent: {contentOffset: {y: scrollY}},
          },
        ])}>
        <View style={styles.containerContent}>
          <Text style={styles.textTitle}>Mount Kilimanjaro</Text>
          <Text style={styles.body}>
            The origin of the name Kilimanjaro is not known, but a number of
            theories exist. European explorers had adopted the name by 1860 and
            reported that Kilimanjaro was the mountain's Kiswahili name. The
            1907 edition of The Nuttall Encyclopædia also records the name of
            the mountain as Kilima-Njaro
          </Text>
          <Animated.Image
            resizeMode="cover"
            style={[
              styles.imageZoom,
              {
                transform: [
                  {
                    scale,
                  },
                ],
              },
            ]}
            source={{uri: 'https://source.unsplash.com/featured/?kilimanjaro'}}
          />
          <Animated.Text style={[styles.body, {transform: [{translateX}]}]}>
            The origin of the name Kilimanjaro is not known, but a number of
            theories exist. European explorers had adopted the name by 1860 and
            reported that Kilimanjaro was the mountain's Kiswahili name. The
            1907 edition of The Nuttall Encyclopædia also records the name of
            the mountain as Kilima-Njaro
          </Animated.Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Scroll;
