import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


interface Props {
  children: JSX.Element | JSX.Element[]
}
export const GradientBackground = ({ children }: Props ) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#064F6A' }}>
      <LinearGradient
        colors={['#084F6A', '#75CEDB', 'white']}
        style={{ ...StyleSheet.absoluteFillObject }}
        start={{
          x: 0.1,
          y: 0.1
        }}
        end={{
          x: 0.7,
          y: 0.7
        }}
      >
        { children }
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({

});