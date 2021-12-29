import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { ActivityIndicator, Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { useMovieDetails } from '../hooks/useMovieDetails';
import { MovieDetails } from '../components/MovieDetails';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const screenHeight = Dimensions.get('window').height;

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const { movieDetails } = useMovieDetails(movie.id);
  const { isLoading, cast } = movieDetails;

  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  return (
    <ScrollView >
      <View style={ styles.imageContainer }>
        <View style={ styles.imageBorder }>
          <Image 
            source={{ uri }}
            style={ styles.posterImage }
          />
        </View>
      </View>
      <View style={ styles.globalMargin }>
        <Text style={ styles.titleText } > { movie.title } </Text>
        <Text style={ styles.subtitleText } > { movie.original_title } </Text>
        
        {
          isLoading
            ? <ActivityIndicator />
            : <MovieDetails movieFull={ movie } cast={ cast } />
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    width: '100%',
    height: screenHeight * 0.7,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.30,
    shadowRadius: 5,
    elevation: 8,
  },
  imageBorder: {
    flex: 1,
    overflow: 'hidden',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  posterImage: {
    flex: 1
  },
  titleText: {
    fontSize: 16,
    opacity: 0.8
  },
  subtitleText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  globalMargin: {
    marginHorizontal: 20,
    marginVertical: 15,
  }
});