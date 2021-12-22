import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableIcon } from '../components/TouchableIcon';

import { styles } from '../theme/appTheme';


export const Tab1Screen = () => {
  
  useEffect(() => {
    console.log('TAB 1 SCREEN');
    
  }, []);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Icons</Text>
      <Text>
        <TouchableIcon iconName="arrow-forward-outline" />
        <TouchableIcon iconName="arrow-redo-circle-outline" />
        <TouchableIcon iconName="battery-charging-outline"  />
        <TouchableIcon iconName="bar-chart-outline" />
        <TouchableIcon iconName="camera-outline"  />
        <TouchableIcon iconName="chatbox-outline" />
      </Text>
    </View>
  )
}
