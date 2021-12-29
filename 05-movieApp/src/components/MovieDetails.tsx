import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import movieDB from '../api/movieDB';
import { Cast } from '../interfaces/creditsInterface';
import { Movie } from '../interfaces/movieInterface';
import { CastItem } from './CastItem';

interface Props {
  movieFull: Movie;
  cast: Cast[]
}

export const MovieDetails = ({ movieFull, cast }: Props) => {
  return (
    <View >
      <View style={ styles.stars }>
        <Icon name='star' color="#FFD500" size={ 25 } />
        <Text>{ movieFull.vote_average }</Text>
      </View>

      <Text style={ styles.overviewTitle }>
        Historia
      </Text>
      <Text style={ styles.overview }>{ movieFull.overview }</Text>
      {
        cast.map(( actor ) => <CastItem key={ actor.id } actor={ actor }/>)
      }
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    alignItems:'center'
  },
  overviewTitle: {
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold'
  },
  overview: {
    textAlign: 'justify',
    fontSize: 16
  }
});