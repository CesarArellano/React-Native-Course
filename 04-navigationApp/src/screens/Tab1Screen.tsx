import React, { useEffect } from 'react'
import { Text, View } from 'react-native'

export const Tab1Screen = () => {
  
  useEffect(() => {
    console.log('TAB 1 SCREEN');
    
  }, []);

  return (
    <View>
      <Text>Tab1 Screen</Text>
    </View>
  )
}
