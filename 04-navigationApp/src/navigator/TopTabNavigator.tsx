import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';

const MaterialTopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <MaterialTopTab.Navigator
      initialRouteName='Chat'
    >
      <MaterialTopTab.Screen name="Chat" component={ ChatScreen } />
      <MaterialTopTab.Screen name="Contacts" component={ ContactsScreen } />
      <MaterialTopTab.Screen name="Albums" component={ AlbumsScreen } />
    </MaterialTopTab.Navigator>
  );
}
