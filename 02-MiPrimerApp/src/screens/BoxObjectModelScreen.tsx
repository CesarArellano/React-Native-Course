import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Box Object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center'
  },
  title: {
    padding: 10,
    fontSize: 24,
    borderWidth: 5,
    alignSelf: 'center'
  }
});