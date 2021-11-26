import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

  const {
    number,
    lastNumber,
    handleCleanResult,
    buildNumber,
    changeSign,
    deleteLastEntry,
    addingBtn,
    substractingBtn,
    multiplicationBtn,
    dividingBtn,
    calculate
  } = useCalculator();

  return (
    <View style={ styles.calculatorContainer }>

      { lastNumber !== '0' && <Text style={ styles.smallMathResult }>{ lastNumber }</Text> }
      <Text 
        style={ styles.mathResult }
        numberOfLines={ 1 }
        adjustsFontSizeToFit
      >
        { number }
      </Text>

      <View style={ styles.rowContainer }>
        <CalcButton text="C" color="#9B9B9B" onPress={ handleCleanResult } />
        <CalcButton text="+/-" color="#9B9B9B" onPress={ changeSign } />
        <CalcButton text="del" color="#9B9B9B" onPress={ deleteLastEntry } />
        <CalcButton text="/" color="#FF9427" onPress={ dividingBtn } />
      </View>

      <View style={ styles.rowContainer }>
        <CalcButton text="7" onPress={ buildNumber } />
        <CalcButton text="8" onPress={ buildNumber } />
        <CalcButton text="9" onPress={ buildNumber } />
        <CalcButton text="X" color="#FF9427" onPress={ multiplicationBtn } />
      </View>

      <View style={ styles.rowContainer }>
        <CalcButton text="4" onPress={ buildNumber } />
        <CalcButton text="5" onPress={ buildNumber } />
        <CalcButton text="6" onPress={ buildNumber } />
        <CalcButton text="-" color="#FF9427" onPress={ substractingBtn } />
      </View>

      <View style={ styles.rowContainer }>
        <CalcButton text="1" onPress={ buildNumber } />
        <CalcButton text="2" onPress={ buildNumber } />
        <CalcButton text="3" onPress={ buildNumber } />
        <CalcButton text="+" color="#FF9427" onPress={ addingBtn } />
      </View>

      <View style={ styles.rowContainer }>
        <CalcButton text="0" onPress={ buildNumber } largeButton />
        <CalcButton text="." onPress={ buildNumber } />
        <CalcButton text="=" color="#FF9427" onPress={ calculate } />
      </View>
      
    </View>
  )
}
