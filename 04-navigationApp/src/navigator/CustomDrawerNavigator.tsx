import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigator } from './StackNavigator';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, View } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   drawerPosition: 'right'
      // }}
      drawerContent={ (props) => <DrawerContent { ...props }/> }
    >
      <Drawer.Screen name="StackNavigator" options={{ title: 'Home' }} component={ StackNavigator } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( props: DrawerContentComponentProps ) =>{
  return (
    <DrawerContentScrollView>
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        
        />
      </View>
    </DrawerContentScrollView>
  );
}