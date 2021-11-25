import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props {
  text: string;
  color?: string;
  largeButton?: boolean;
  onPress: ( numberText: string ) => void; 
};

export const CalcButton = ({ text, color = '#333333', largeButton = false, onPress }: Props ) => {
  return (
    <TouchableOpacity
      onPress={ () => onPress( text ) }
    >
      <View 
        style={{
          ...styles.button,
          backgroundColor: color,
          width: largeButton ? 180 : 80,
        }}
      >
        <Text 
          style={{
            ...styles.buttonText,
            color: (color == '#9B9B9B') ? 'black' : 'white',
          }}
        >
          { text }
        </Text>
      </View>
    </TouchableOpacity>
  )
}
