import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any> { }

export const Screen1 = ( { navigation }:Props ) => {

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Screen 1</Text>
      <Button 
        title="Ir a la página 2"
        onPress={ () => navigation.navigate('Screen2') }
      />
      <Text style={{ fontSize: 18, marginVertical: 10 }} >Navegar con argumentos</Text>
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
