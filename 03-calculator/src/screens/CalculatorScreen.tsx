import React from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
  return (
    <View style={ styles.calculatorContainer }>
      <Text style={ styles.smallMathResult }>150.00</Text>
      <Text style={ styles.mathResult }>1500.00</Text>
      <View>
        <View style={ styles.button }>
          <Text style={ styles.buttonText }>1</Text>
        </View>
      </View>
    </View>
  )
}
