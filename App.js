import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppRoutes from './src/routes';

const App = () => (
  <NavigationContainer>
    <AppRoutes />
  </NavigationContainer>
);

export default App;
