import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export const PositionScreen = () => {
  return (
    <View style={ styles.container }>
      <View style={ styles.greenBox }/>
      <View style={ styles.purpleBox }/>
      <View style={ styles.orangeBox }/>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#28C4D9',
  },
  purpleBox: {
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#5856D6',
    position: 'absolute',
    right: 0,
  },
  orangeBox: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 100,
    height: 100,
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: '#F0A23B'
  },
  greenBox: {
    borderWidth: 10,
    borderColor: 'white',
    backgroundColor: 'green',
    // position: 'absolute',
    // top:0,
    // right:0,
    // bottom: 0,
    // left: 0,
    ...StyleSheet.absoluteFillObject, // Lo mismo que está comentado arriba.
  }
});
