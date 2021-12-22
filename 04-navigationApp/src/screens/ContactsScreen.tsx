import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme'

export const ContactsScreen = () => {
  const authContext = useContext(AuthContext);
  const { authState:{ isLoggedIn }, signIn } = authContext;

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }> ContactsScreen Top Tab </Text>
      {
        !isLoggedIn && <Button title='SignIn' onPress={ signIn } />
      }
    </View>
  )
}
