import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Platform, StatusBar } from 'react-native';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={ ( Platform.OS == 'ios' ) ? 'white' : '#FF4545' }
        barStyle='light-content'
      />
      <Navigation />
    </NavigationContainer>
  );
}

export default App;