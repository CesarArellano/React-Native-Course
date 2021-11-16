import React, { useState } from 'react'
import { Button, Text, View } from 'react-native';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter( counter + 1 );
  }

  return (
    <View 
      style={{ flex: 1, justifyContent: 'center' }}
    >
      <Text 
        style={{ 
          textAlign: 'center',
          fontSize: 50 
        }}
      >
        Counter: {counter}
      </Text>

      <Button 
        title="+"
        onPress={ handleIncrement } />

    </View>
  )
}
