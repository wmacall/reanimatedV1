import React from 'react';
import {View, Image} from 'react-native';
import Header from '../../components/Header';
import CardItem from '../../components/CardItem';

import BrushIcon from '../../assets/icons/BrushIcon.png';
import RotationIcon from '../../assets/icons/RotationIcon.png';
import ChartIcon from '../../assets/icons/ChartIcon.png';
import TabBarIcon from '../../assets/icons/TabBarIcon.png';
import ScrollIcon from '../../assets/icons/ScrollIcon.png';

import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.containerExamples}>
        <CardItem
          title="Color and Interpolations"
          routeName="TimingAndInterpolation">
          <Image style={styles.icon} resizeMode="contain" source={BrushIcon} />
        </CardItem>
        <CardItem title="SVG" routeName="CircularProgress">
          <Image style={styles.icon} resizeMode="contain" source={ChartIcon} />
        </CardItem>
        <CardItem routeName="Rotation" title="Transformations">
          <Image
            style={styles.icon}
            resizeMode="contain"
            source={RotationIcon}
          />
        </CardItem>
        <CardItem routeName="TabBar" title="Tab Bar">
          <Image style={styles.icon} resizeMode="contain" source={TabBarIcon} />
        </CardItem>
        <CardItem routeName="Scroll" title="Scroll">
          <Image style={styles.icon} resizeMode="contain" source={ScrollIcon} />
        </CardItem>
        <CardItem routeName="Transition" title="Transitions">
          <Image style={styles.icon} resizeMode="contain" source={TabBarIcon} />
        </CardItem>
      </View>
    </View>
  );
};

export default Home;
