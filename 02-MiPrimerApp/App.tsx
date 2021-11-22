import React from 'react';
import { SafeAreaView } from 'react-native';
import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {
      /*<HelloWorldScreen />
        <CounterScreen /> 
      */
      }
      <BoxObjectModelScreen /> 
    </SafeAreaView>
  )
}
