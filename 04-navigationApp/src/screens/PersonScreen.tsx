import { StackScreenProps } from '@react-navigation/stack';
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
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

  useEffect(() => {
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
