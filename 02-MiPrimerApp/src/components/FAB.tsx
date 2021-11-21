import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

interface Props {
  title: string,
  
}

export const Fab = ({ title }:Props) => {
  
  return (
    <TouchableOpacity
      style={ styles.fabLocationBR }
      onPress={ () => console.log('Click') }
    >
      <View
        style={ styles.fab }
      >
      <Text style={ styles.fabText }> { title } </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center'
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
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
});