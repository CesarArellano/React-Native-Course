import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';

import { Text, Platform } from 'react-native';
import { Tab1Screen } from '../screens/Tab1Screen';
import { StackNavigator } from './StackNavigator';
import { TopTabNavigator } from './TopTabNavigator';
import { colors } from '../theme/appTheme';

const MaterialBottomTab = createMaterialBottomTabNavigator();

export const Tabs = () => {
  return Platform.OS === 'ios'
    ? <IosTabs /> 
    : <AndroidTabs />
}

const AndroidTabs = () => {
  return (
    <MaterialBottomTab.Navigator
      sceneAnimationEnabled={ true }
      barStyle={{
        backgroundColor: 'black',
      }}
      screenOptions={ ({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused }) => {
          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }

          return <Text style={{ color, }}>{ iconName }</Text>
        }
      })}
    >
      <MaterialBottomTab.Screen name="Tab1" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
      <MaterialBottomTab.Screen name="Tab2" options={{ title: 'Tab 2'}} component={ TopTabNavigator } />
      <MaterialBottomTab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </MaterialBottomTab.Navigator>
  );
}

const CupertinoBottomTab = createBottomTabNavigator();

const IosTabs = () => {
  return (
    <CupertinoBottomTab.Navigator
      sceneContainerStyle={{
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        backgroundColor: 'white',
        elevation: 0,
      }}
      screenOptions={ ({ route }) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({ color, focused, size }) => {
          let iconName: string = '';
          switch ( route.name ) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'T3';
              break;
          }

          return <Text style={{ color, }}>{ iconName }</Text>
        }
      })}
    >
      {/* <Tab.Screen name="Tab1" options={{ title: 'Tab 1', tabBarIcon: () => <Text>T1</Text>}} component={ Tab1Screen } /> */}
      <CupertinoBottomTab.Screen name="Tab1" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
      <CupertinoBottomTab.Screen name="Tab2" options={{ title: 'Tab 2'}} component={ TopTabNavigator } />
      <CupertinoBottomTab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </CupertinoBottomTab.Navigator>
  );
}