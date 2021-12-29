import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={ ( Platform.OS == 'ios' ) ? 'white' : '#FF4545' }
        barStyle='light-content'
      />
      <Navigation />
      {/* <FadeScreen / > */}
    </NavigationContainer>
  );
}

export default App;