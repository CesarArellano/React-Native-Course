import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {
  // const insets = useSafeAreaInsets();
  const context = useContext( AuthContext );
  const { authState } = context;
  console.log( authState.username );
  
  return (
    <View 
      style={{ 
        flex: 1,
        marginHorizontal: 20
        // marginTop: insets.top * 0.5
      }}
    >
      <Text style={ styles.menuText }>Settings Screen</Text>
      <Text style={ styles.settingsText }>{ JSON.stringify( authState, null, 4 ) }</Text>
    </View>
  )
}
