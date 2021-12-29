import React from 'react';
import { ScrollView, ActivityIndicator, Dimensions, View, Platform} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';
import { GradientBackground } from '../components/GradientBackground';
import { getColors } from '../helpers/getColors';

const maxWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top, bottom } = useSafeAreaInsets();

  const getPosterColors = async ( index: number ) => {

    const uri = `https://image.tmdb.org/t/p/w500${ nowPlaying[index].poster_path }`;
    const { primaryColor, secondaryColor } = await getColors(uri);
    console.log( primaryColor, secondaryColor );
    
  };

  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 }/>
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView>
        <View style={{ marginTop: (Platform.OS == 'android') ? top + 20 : top - 20, marginBottom: bottom }}>
          <View style={{ height: 440 }}>
            <Carousel
              data={ nowPlaying }
              renderItem={ ({ item: movie }) => <MoviePoster movie={ movie }/> }
              sliderWidth={ maxWidth }
              itemWidth={ 300 }
              onSnapToItem={ index => getPosterColors( index ) }
            />
          </View>
          <HorizontalSlider movies={ popular } />
          <HorizontalSlider title='Mejor valoradas' movies={ topRated } />
          <HorizontalSlider title='Próximamente' movies={ upcoming } />
        </View>
      </ScrollView>
    </GradientBackground>
  );
}