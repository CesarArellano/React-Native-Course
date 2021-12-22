import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Button, Text, View} from 'react-native';
import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
  const { moviesInCinema, isLoading } = useMovies();
  const navigation = useNavigation<any>();

  console.log(moviesInCinema[0]?.title);
  
  if( true ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 }/>
      </View>
    );
  }

  return (
    <View>
      <Text> Home Screen </Text>
      <Button 
        title="Detail Screen"
        onPress={ () => navigation.navigate('DetailScreen') }
      />
    </View>
  );
}