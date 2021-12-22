import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../context/AuthContext';
import { styles } from '../theme/appTheme'
// import { useSafeAreaInsets } from 'react-native-safe-area-context'

export const SettingsScreen = () => {
  // const insets = useSafeAreaInsets();
  const context = useContext( AuthContext );
  const { authState } = context;
  const  { favoriteIcon } = authState;
  
  return (
    <View 
      style={{ 
        flex: 1,
        marginHorizontal: 20
        // marginTop: insets.top * 0.5
      }}
    >
      <Text style={ styles.title }>Settings Screen</Text>
      <Text style={ styles.settingsText }>{ JSON.stringify( authState, null, 4 ) }</Text>
      {
        favoriteIcon && (
          <Icon 
            name={ favoriteIcon }
            size={ 50 }
            color="black" 
          />
        )
      }
    </View>
  )
}
