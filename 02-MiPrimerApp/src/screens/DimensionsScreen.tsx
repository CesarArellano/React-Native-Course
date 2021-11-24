import React from 'react'
import { Dimensions, StyleSheet, Text, useWindowDimensions, View } from 'react-native';

// const { height, width } = Dimensions.get('window'); No cambia dinámicamente las dimensiones.

export const DimensionsScreen = () => {

  const { width, height } = useWindowDimensions();

  return (
    <View style={ styles.container }>
      <View style={{
        ...styles.redBox,
        width: width * 0.2,
      }} />
      <View style={ styles.orangeBox } />
      <Text style={ styles.title }> W: {width}, H: { height } </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 400,
    backgroundColor: '#2D2D2D'
  },

  redBox: {
    backgroundColor: 'red',
    height: '20%',
  },
  orangeBox: {
    backgroundColor: 'green',
    width: '50%',
    height: '25%',
  },
  title:{
    fontSize: 30,
    color: 'white'
  }
});