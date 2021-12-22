import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { Movie } from '../interfaces/movie_interface';

interface Props {
  movie: Movie,
  height?: number,
  width?: number,
}

export const MoviePoster = ({ movie, height = 420, width = 300 }: Props ) => {
  
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;
  const navigation = useNavigation<any>();

  return (
    <TouchableOpacity
      activeOpacity={ 0.8 }
      style={{
        width,
        height,
        marginHorizontal: 8
      }}
      onPress={ () => navigation.navigate('DetailScreen', movie) }
    >
      <View style={ styles.imageContainer }>
        <Image source={{ uri }} style={ styles.image }/>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    borderRadius: 15,
  },
  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.30,
    shadowRadius: 5,

  }
});