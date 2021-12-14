import React from 'react';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../theme/appTheme';
import { Tabs } from './Tabs';

const Drawer = createDrawerNavigator();

export const CustomDrawerNavigator = () => {
  return (
    <Drawer.Navigator
      // screenOptions={{
      //   drawerPosition: 'right'
      // }}
      drawerContent={ (props) => <DrawerContent { ...props }/> }
    >
      <Drawer.Screen name="Tabs" options={{ title: 'Home' }} component={ Tabs } />
      <Drawer.Screen name="SettingsScreen" options={{ title: 'Settings' }} component={ SettingsScreen } />
    </Drawer.Navigator>
  );
}

const DrawerContent = ( { navigation }: DrawerContentComponentProps ) =>{
  return (
    <DrawerContentScrollView>
      {/* Profile Photo */}
      <View style={ styles.avatarContainer }>
        <Image 
          source={{
            uri: 'https://clinicforspecialchildren.org/wp-content/uploads/2016/08/avatar-placeholder.gif'
          }}
          style={ styles.avatar }
        
        />
      </View>
      {/* Menu Options */}
      <View style={ styles.menuContainer } >

        <TouchableOpacity 
          style={ styles.menuBtn }
          onPress={ () => navigation.navigate('Tabs') }
        >
          <Text style={ styles.menuText }>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={ styles.menuBtn }
          onPress={ () => navigation.navigate('SettingsScreen') }
        >
          <Text style={ styles.menuText }>Settings</Text>
        </TouchableOpacity>

      </View>
    </DrawerContentScrollView>
  );
}