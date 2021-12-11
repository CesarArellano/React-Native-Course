import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { colors } from '../theme/appTheme';
import { StackNavigator } from './StackNavigator';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{
        borderTopColor: colors.primary,
        borderTopWidth: 0,
        backgroundColor: 'white',
        elevation: 0,
      }}
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
      }}
    >
      <Tab.Screen name="Tab1" options={{ title: 'Tab 1'}} component={ Tab1Screen } />
      <Tab.Screen name="Tab2" options={{ title: 'Tab 2'}} component={ Tab2Screen } />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </Tab.Navigator>
  );
}