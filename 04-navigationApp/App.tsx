import React from 'react'
import 'react-native-gesture-handler';

import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);
import { NavigationContainer } from '@react-navigation/native';
import { CustomDrawerNavigator } from './src/navigator/CustomDrawerNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <BasicDrawerNavigator /> */}
      <CustomDrawerNavigator />
    </NavigationContainer>
  )
}

export default App;
