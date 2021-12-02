import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

export const Screen2 = () => {
  const navigation = useNavigation();
  return (
    <View style={ styles.globalMargin }>
      <Text>Screen 2</Text>
      <Button 
        title="Ir a la página 3"
        onPress={ () => navigation.navigate( 'Screen3' as any ) }
      />
    </View>
  )
}
