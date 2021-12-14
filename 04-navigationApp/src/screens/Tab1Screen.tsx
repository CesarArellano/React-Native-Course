import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import { styles } from '../theme/appTheme';


export const Tab1Screen = () => {
  
  useEffect(() => {
    console.log('TAB 1 SCREEN');
    
  }, []);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Icons</Text>
      <Text>
        <Icon name="arrow-forward-outline" size={ 50 } color="black" />
      </Text>
    </View>
  )
}
