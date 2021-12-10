import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Tab1Screen } from '../screens/Tab1Screen';
import { Tab2Screen } from '../screens/Tab2Screen';
import { Tab3Screen } from '../screens/Tab3Screen';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab 1" component={ Tab1Screen } />
      <Tab.Screen name="Tab 2" component={ Tab2Screen } />
      <Tab.Screen name="Tab 3" component={ Tab3Screen } />
    </Tab.Navigator>
  );
}