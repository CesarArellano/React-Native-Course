import React from 'react';
import { ScrollView, ActivityIndicator, Dimensions, View} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import Carousel from 'react-native-snap-carousel';

import { useMovies } from '../hooks/useMovies';
import { MoviePoster } from '../components/MoviePoster';
import { HorizontalSlider } from '../components/HorizontalSlider';

const maxWidth = Dimensions.get('window').width;

export const HomeScreen = () => {
  const {  nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();
  const { top, bottom } = useSafeAreaInsets();
  
  if( isLoading ) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color='red' size={ 100 }/>
      </View>
    );
  }

  return (
    <ScrollView>
      <View style={{ marginTop: top + 20, marginBottom: bottom }}>
        <View style={{ height: 440 }}>
          <Carousel
            data={ nowPlaying }
            renderItem={ ({ item: movie }) => <MoviePoster movie={ movie }/> }
            sliderWidth={ maxWidth }
            itemWidth={ 300 }
          />
        </View>
        <HorizontalSlider movies={ popular } />
        <HorizontalSlider title='Mejor valoradas' movies={ topRated } />
        <HorizontalSlider title='Próximamente' movies={ upcoming } />
      </View>
    </ScrollView>
  );
}