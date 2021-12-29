import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Movie } from '../interfaces/movieInterface';
import { MoviePoster } from './MoviePoster';

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title = 'Populares', movies }: Props ) => {
  return (
    <View style={{
      height: 250,
    }}>
      <Text style={ styles.titleText }> { title } </Text>
      <FlatList
        keyExtractor={ (item) => item.id.toString() }
        data={ movies }
        renderItem={ ({ item: movie }) => <MoviePoster movie={ movie } height={ 200 } width={ 140 } /> }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleText: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 4,
    marginBottom: 5
  },
});