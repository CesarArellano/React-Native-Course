import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const CounterScreen = () => {

  const [counter, setCounter] = useState(0);

  const handleIncrement = () => {
    setCounter( counter + 1 );
  }

  return (
    <View 
      style={ styles.container }
    >
      <Text 
        style={ styles.title }
      >
        Counter: {counter}
      </Text>

      <TouchableOpacity
        onPress={ handleIncrement }
      >
        <View
          style={ styles.incrementButton }
        >
        <Text>+</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  title: { 
    textAlign: 'center',
    fontSize: 40 
  },
  incrementButton: {
    borderRadius: 100
  }
});
