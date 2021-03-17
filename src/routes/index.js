import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/Home';
import TimingAndInterpolation from '../screens/TimingAndInterpolation';
import Rotation from '../screens/Rotation';
import Scroll from '../screens/Scroll';
import CircularProgress from '../screens/CircularProgress';
import Transition from '../screens/Transition';

import TabBar from './TabBar';

const ExamplesStack = createStackNavigator();

const Examples = () => (
  <ExamplesStack.Navigator headerMode={null} initialRouteName="Home">
    <ExamplesStack.Screen component={Home} name="Home" />
    <ExamplesStack.Screen
      component={TimingAndInterpolation}
      name="TimingAndInterpolation"
    />
    <ExamplesStack.Screen component={Rotation} name="Rotation" />
    <ExamplesStack.Screen component={TabBar} name="TabBar" />
    <ExamplesStack.Screen component={Scroll} name="Scroll" />
    <ExamplesStack.Screen
      component={CircularProgress}
      name="CircularProgress"
    />
    <ExamplesStack.Screen component={Transition} name="Transition" />
  </ExamplesStack.Navigator>
);

export default Examples;
