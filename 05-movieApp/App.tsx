import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { Platform, StatusBar } from 'react-native';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={ ( Platform.OS == 'ios' ) ? 'white' : '#FF4545' }
        barStyle='light-content'
      />
      {/* <Navigation /> */}
      <FadeScreen / >
    </NavigationContainer>
  );
}

export default App;