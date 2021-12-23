import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { RootStackParams } from '../navigation/Navigation';

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'>{};

const screenHeight = Dimensions.get('window').height;

export const DetailScreen = ({ route }: Props) => {

  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${ movie.poster_path }`;

  return (
    <ScrollView >
      <View style={ styles.imageContainer }>
        <Image 
          source={{ uri }}
          style={ styles.posterImage }
        />
      </View>
      <View style={ styles.globalMargin }>
        <Text style={ styles.titleText } > { movie.title } </Text>
        <Text style={ styles.subtitleText } > { movie.original_title } </Text>
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
    marginHorizontal: 10,
    marginVertical: 15,
  }
});