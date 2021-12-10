import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {
  // const insets = useSafeAreaInsets();
  return (
    <View 
      style={{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // marginTop: insets.top * 0.5
      }}
    >
      <Text style= { styles.menuText }>Settings Screen</Text>
    </View>
  )
}
