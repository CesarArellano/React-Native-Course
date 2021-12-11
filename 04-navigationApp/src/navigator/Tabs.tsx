import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Text } from 'react-native';
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
      screenOptions={ ({route}) => ({
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
      <Tab.Screen name="Tab1" options={{ title: 'Tab 1' }} component={ Tab1Screen } />
      <Tab.Screen name="Tab2" options={{ title: 'Tab 2'}} component={ Tab2Screen } />
      <Tab.Screen name="StackNavigator" options={{ title: 'Stack'}} component={ StackNavigator } />
    </Tab.Navigator>
  );
}