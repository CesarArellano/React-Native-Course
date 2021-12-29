import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor='white'
        barStyle='light-content'
      />
      <Navigation />
    </NavigationContainer>
  );
}

export default App;