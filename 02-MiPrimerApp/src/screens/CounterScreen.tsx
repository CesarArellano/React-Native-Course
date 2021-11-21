import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

      <TouchableOpacity
        style={ styles.fabLocationBL }
        onPress={ handleDecrement }
      >
        <View
          style={ styles.fab }
        >
        <Text style={ styles.fabText }> -1 </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={ styles.fabLocationBR }
        onPress={ handleIncrement }
      >
        <View
          style={ styles.fab }
        >
        <Text style={ styles.fabText }> +1 </Text>
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
  fabLocationBR: {
    position: 'absolute',
    bottom: 40,
    right: 20
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 40,
    left: 20
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 50,
    height: 50,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
