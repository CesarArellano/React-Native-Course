import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
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
      <View style={ styles.globalMargin }>

        <View style={ styles.stars }>
          <Icon name='star' color="#FFD500" size={ 25 } />
          <Text style={ styles.starsTitle }>{ movieFull.vote_average }</Text>
        </View>

        <Text style={ styles.overviewTitle }>
          Historia
        </Text>
        <Text style={ styles.overview }>{ movieFull.overview }</Text>
      </View>
      
      <FlatList
        data={ cast }
        keyExtractor={ ( item ) => item.id.toString() }
        renderItem={ ( { item:actor } ) => <CastItem actor={ actor } /> }
        horizontal={ true }
        showsHorizontalScrollIndicator={ false }
        style={{
          marginTop: 10,
          marginBottom: 40,
          paddingLeft: 20,
          height: 100
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  stars: {
    flexDirection: 'row',
    alignItems:'center'
  },
  starsTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  overviewTitle: {
    color: 'black',
    fontSize: 24,
    marginTop: 10,
    fontWeight: 'bold'
  },
  overview: {
    color: 'black',
    textAlign: 'justify',
    fontSize: 16,
    marginVertical: 5
  },
  globalMargin: {
    marginHorizontal: 20,
  }
});