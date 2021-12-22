import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { ActivityIndicator, Button, Text, View} from 'react-native';
import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const HomeScreen = () => {
  const { moviesInCinema, isLoading } = useMovies();
  const { top } = useSafeAreaInsets();

  console.log(moviesInCinema[0]?.title);
  
  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 }/>
      </View>
    );
  }

  return (
    <View style={{ marginTop: top + 10 }}>
      <MoviePoster movie={ moviesInCinema[2] }/>
    </View>
  );
}