import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Button, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

interface Props extends StackScreenProps<any, any> { }

export const Screen3 = ( { navigation }:Props ) => {
  return (
    <View style={ styles.globalMargin }>
      <Button 
        title="Regresar"
        onPress={ () => navigation.pop() }
      />
      <Button 
        title="Ir a página 1"
        onPress={ () => navigation.popToTop() }
      />
    </View>
  )
}
