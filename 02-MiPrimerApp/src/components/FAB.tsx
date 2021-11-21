import { JSXElement } from '@babel/types'
import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Fab = ({ title, onPress, position = 'br'}:Props) => {
  
  const ios = () => {
    return (
      <TouchableOpacity
        activeOpacity={ 0.75 }
        style={[
          styles.fabLocation,
          (position == 'br') ? styles.right : styles.left
        ]}
        onPress={ onPress }
      >
        <View
          style={ styles.fab }
        >
        <Text style={ styles.fabText }> { title } </Text>
        </View>
      </TouchableOpacity>
    );
  }

  const android = () => {
    return (
      <View
        style={[
          styles.fabLocation,
          (position == 'br') ? styles.right : styles.left
        ]}
      >
        <TouchableNativeFeedback
          onPress={ onPress }
          background={TouchableNativeFeedback.Ripple('#28425B', false, 30)}
        >
          <View
            style={ styles.fab }
          >
          <Text style={ styles.fabText }> { title } </Text>
          </View>
        </TouchableNativeFeedback>
      </View>
    )
  }

  return Platform.OS == 'ios' ? ios() : android()
}

const styles = StyleSheet.create({
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    justifyContent: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  fabText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  fabLocation: {
    position: 'absolute',
    bottom: 40,
  },
  right: {
    right: 20
  },
  left: {
    left: 20
  }
});