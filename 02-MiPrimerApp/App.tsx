import React from 'react';
import { SafeAreaView } from 'react-native';
import { FlexScreen } from './src/screens/FlexScreen';
import { HomeworkScreen } from './src/screens/HomeworkScreen';
// import { PositionScreen } from './src/screens/PositionScreen';
// import { DimensionsScreen } from './src/screens/DimensionsScreen';
// import { BoxObjectModelScreen } from './src/screens/BoxObjectModelScreen';
// import { CounterScreen } from './src/screens/CounterScreen';
// import { HelloWorldScreen } from './src/screens/HelloWorldScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#28425B' }}>
      {
      /*<HelloWorldScreen />
        <CounterScreen /> 
      */
      }
      {/* <BoxObjectModelScreen />  */}
      {/* <DimensionsScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      <HomeworkScreen />
    </SafeAreaView>
  )
}
