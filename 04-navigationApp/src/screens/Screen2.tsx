import { useNavigation } from '@react-navigation/core'
import { StackScreenProps } from '@react-navigation/stack'
import React, { useEffect } from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
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
      <Text>Navegar con argumentos</Text>
      <View style={{ flexDirection: 'row', marginTop: 10 }}>
        <TouchableOpacity
          style={{
            ...styles.largeBtn,
            backgroundColor: '#5856D6'
          }}
          onPress={ () => navigation.navigate( 'PersonScreen', {
            id: 1,
            name: 'César'
          }) }
        >
          <Text style={ styles.largeBtnText }> César </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.largeBtn,
            backgroundColor: '#FF9427'
          }}
          onPress={ () => navigation.navigate( 'PersonScreen', {
            id: 2,
            name: 'Jaqui'
          }) }
        >
          <Text style={ styles.largeBtnText }>Jaqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
