import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import styles from './styles';
import TabBar from '../../components/TabBar';

function ScreenOne() {
  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Screen 1</Text>
    </View>
  );
}

function ScreenTwo() {
  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Screen 2</Text>
    </View>
  );
}

function ScreenThree() {
  return (
    <View style={styles.container}>
      <Text style={styles.textScreen}>Screen 3</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      initialRouteName="ScreenOne"
      tabBar={(props) => <TabBar {...props} />}>
      <Tab.Screen name="ScreenOne" component={ScreenOne} />
      <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
      <Tab.Screen name="ScreenThree" component={ScreenThree} />
    </Tab.Navigator>
  );
}
