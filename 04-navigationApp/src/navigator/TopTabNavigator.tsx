import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react'
import { Text } from 'react-native';
import { ChatScreen } from '../screens/ChatScreen';
import { ContactsScreen } from '../screens/ContactsScreen';
import { AlbumsScreen } from '../screens/AlbumsScreen';
import { colors } from '../theme/appTheme';

const MaterialTopTab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  return (
    <MaterialTopTab.Navigator
      initialRouteName='Chat'
      screenOptions={ ({ route }) => ({
        tabBarIndicatorStyle: {
          backgroundColor: 'black'
        },
        tabBarLabelStyle: {
          fontSize: 14,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch ( route.name ) {
            case 'Chat':
              iconName = 'T1';
              break;
            case 'Contacts':
              iconName = 'T2';
              break;
            case 'Albums':
              iconName = 'T3';
              break;
          }

          return <Text style={{ color, }}>{ iconName }</Text>
        }
      })}
      style={{
        shadowColor: 'transparent',
        elevation: 0,
      }}
    >
      <MaterialTopTab.Screen name="Chat" component={ ChatScreen } />
      <MaterialTopTab.Screen name="Contacts" component={ ContactsScreen } />
      <MaterialTopTab.Screen name="Albums" component={ AlbumsScreen } />
    </MaterialTopTab.Navigator>
  );
}

