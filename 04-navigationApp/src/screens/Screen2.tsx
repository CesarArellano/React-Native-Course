import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Screen2 = ({ navigation }:Props ) => {
  //const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Screen 2 From Ops',
      headerBackTitle: ''
    })
  }, [])

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Screen 2</Text>
      <Button 
        title="Ir a la página 3"
        onPress={ () => navigation.navigate( 'Screen3' ) }
      />

    </View>
  )
}
