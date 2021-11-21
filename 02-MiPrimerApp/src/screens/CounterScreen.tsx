import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { Fab } from '../components/FAB';
import { useCounter } from '../hooks/useCounter';

export const CounterScreen = () => {

  const { counter, handleIncrement, handleDecrement } = useCounter(0);

  return (
    <View 
      style={ styles.container }
    >
      <Text 
        style={ styles.title }
      >
        Counter: {counter}
      </Text>

      <Fab 
        title="+1"
        onPress={ handleIncrement }
      />

      <Fab 
        title="-1"
        position='bl'
        onPress={ handleDecrement }
      />

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
});
