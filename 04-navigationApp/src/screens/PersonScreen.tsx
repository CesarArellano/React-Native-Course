import { StackScreenProps } from '@react-navigation/stack';
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { RouteStackParams } from '../navigator/StackNavigator';
import { styles } from '../theme/appTheme'

// interface RouteParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RouteStackParams, 'PersonScreen'> { }


export const PersonScreen = ( { navigation, route }: Props ) => {

  //const params = route.params as RouteParams;
  const params = route.params;
  const authContext = useContext(AuthContext);

  useEffect(() => {
    ( authContext.authState.isLoggedIn ) && authContext.changeUsername( params.name )
    navigation.setOptions({
      title: params.name
    });
  }, [])

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        { JSON.stringify(params, null, 3) }
      </Text>
    </View>
  )
}
