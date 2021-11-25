import React, { useState } from 'react'
import { Button, Text, TouchableOpacity, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/appTheme'

const initialState = '0';

export const CalculatorScreen = () => {
  const [lastNumber, setLastNumber] = useState(initialState)
  const [number, setNumber] = useState(initialState);

  const handleCleanResult = () => {
    setNumber(initialState);
  }

  const buildNumber = ( numberText: string ) => {
    if( number.length > 15 ) return;

    if( number.includes('.') && numberText === '.' ) return;

    if( number.startsWith('0') || number.startsWith('-0') ) {

      if( numberText === '.' ) {
        setNumber( number + numberText );

      } else if ( numberText === '0' && number.includes('.') ) {
        setNumber( number + numberText );

      } else if ( numberText === '0' && !number.includes('.') ) {
        setNumber( numberText );
      } else if ( numberText !== '0' && !number.includes('.') ) {
        setNumber( numberText );

      } else {
        setNumber( number + numberText );
      } 

    } else {
      setNumber( number + numberText );
    }    
  }

  const changeSign = () => {
    if( number.includes('-') ) {
      setNumber( number.replace('-', ''))
    } else {
      setNumber( '-' + number )
    }
  }

  const deleteLastEntry = () => {
    if( number.length == 1 || ( number.startsWith('-') && number.length == 2 ) ) {
      setNumber( initialState )
    } else {
      setNumber( number.substring( 0, number.length - 1 ) );
    }
  }
  
  const changeNumberByLastNumber = () => {
    if( number.endsWith('.') ) {
      setLastNumber( number.slice(0, -1) )
    } else {
      setLastNumber( number );
    }
    setNumber( initialState );
  };

  return (
    <View style={ styles.calculatorContainer }>

      { lastNumber != '0' && <Text style={ styles.smallMathResult }>{ lastNumber }</Text> }
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
        <CalcButton text="/" color="#FF9427" onPress={ changeNumberByLastNumber } />
      </View>
      <View style={ styles.rowContainer }>
        <CalcButton text="7" onPress={ buildNumber } />
        <CalcButton text="8" onPress={ buildNumber } />
        <CalcButton text="9" onPress={ buildNumber } />
        <CalcButton text="X" color="#FF9427" onPress={ handleCleanResult } />
      </View>
      <View style={ styles.rowContainer }>
        <CalcButton text="4" onPress={ buildNumber } />
        <CalcButton text="5" onPress={ buildNumber } />
        <CalcButton text="6" onPress={ buildNumber } />
        <CalcButton text="-" color="#FF9427" onPress={ handleCleanResult } />
      </View>
      <View style={ styles.rowContainer }>
        <CalcButton text="1" onPress={ buildNumber } />
        <CalcButton text="2" onPress={ buildNumber } />
        <CalcButton text="3" onPress={ buildNumber } />
        <CalcButton text="+" color="#FF9427" onPress={ handleCleanResult } />
      </View>
      <View style={ styles.rowContainer }>
        <CalcButton text="0" onPress={ buildNumber } largeButton />
        <CalcButton text="." onPress={ buildNumber } />
        <CalcButton text="=" color="#FF9427" onPress={ handleCleanResult } />
      </View>
    </View>
  )
}
