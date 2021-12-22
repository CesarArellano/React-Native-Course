import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View} from 'react-native';
import movieDB from '../api/movieDB';
import { MovieDbNowPlaying } from '../interfaces/movie_interface';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();

  useEffect(() => {
    movieDB.get<MovieDbNowPlaying>('/now_playing')
      .then( (resp) => console.log(resp.data.results[0].title) )
  }, [])

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