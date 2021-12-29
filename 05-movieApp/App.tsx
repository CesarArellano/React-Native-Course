import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/navigation/Navigation';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ( { children }: any ) => {
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar 
        backgroundColor={ ( Platform.OS == 'ios' ) ? 'white' : '#FF4545' }
        barStyle='light-content'
      />
      <AppState>
        <Navigation />
      </AppState>
      {/* <FadeScreen / > */}
    </NavigationContainer>
  );
}

export default App;