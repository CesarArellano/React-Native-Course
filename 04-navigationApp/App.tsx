import React from 'react'
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { NavigationContainer } from '@react-navigation/native';
import { CustomDrawerNavigator } from './src/navigator/CustomDrawerNavigator';
import { AuthProvider } from './src/context/AuthContext';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BasicDrawerNavigator /> */}
      <AppState>
        <CustomDrawerNavigator />
      </AppState>
    </NavigationContainer>
  )
}

const AppState = (  { children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default App;
