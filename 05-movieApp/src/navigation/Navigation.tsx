import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { HomeScreen } from '../screens/HomeScreen';
import { DetailScreen } from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';
import { Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: {
          color: 'white',
          fontSize: 20,
        },
        headerTintColor: 'white',
        headerBackTitleVisible: false,
        headerStyle: {
          backgroundColor: '#FF5252',
        },
      }}
    >
      
      <Stack.Screen 
        name="HomeScreen"
        options={{
          headerTitle: 'Películas',
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: 15 }}
              onPress={() => console.log('This is a button!')}
            >
            <Icon name="search-outline" color="white" size={ 25 }/>
            </TouchableOpacity>
          ),
        }} 
        component={ HomeScreen } 
      />
      <Stack.Screen 
        name="DetailScreen"
        options={{ 
          headerTitle: 'Detalle',
        }}
        component={ DetailScreen } 
      />
    </Stack.Navigator>
  );
}