import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext'
import { styles } from '../theme/appTheme';

export const AlbumsScreen = () => {
  const authContext = useContext(AuthContext);
  const { authState: { isLoggedIn }, logOut } = authContext;

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>AlbumsScreen Top Tab</Text>
      {
        isLoggedIn && <Button title="Log Out" onPress={ logOut }/>
      }
    </View>
  )
}
