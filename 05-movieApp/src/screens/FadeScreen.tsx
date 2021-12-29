import React from 'react';
import { Animated, Button, StyleSheet, View } from 'react-native';
import { useFade } from '../hooks/useFade';

export const FadeScreen = () => {
  const { opacity, fadeIn, fadeOut } = useFade();
  return (
    <View style={ styles.container }>
      
      <Animated.View
        style={{
          backgroundColor: 'green',
          width: 150,
          height: 150,
          borderColor: 'white',
          borderWidth: 10,
          opacity: opacity
        }}
      >

      </Animated.View>

      <Button
        title='Animar cuadro'
        onPress={ fadeIn }
      />

      <Button
        title='Animar cuadro'
        onPress={ fadeOut }
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
});