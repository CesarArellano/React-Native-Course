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
    height: 200,
    backgroundColor: 'blue'
  },

  redBox: {
    backgroundColor: 'red',
    height: '50%',
  },
  orangeBox: {
    backgroundColor: 'orange',
    width: '50%',
    height: '50%',
  },
  title:{
    fontSize: 30
  }
});