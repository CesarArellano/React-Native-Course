import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import { Cast } from '../interfaces/creditsInterface';

interface Props {
  actor: Cast
}

export const CastItem = ( { actor }: Props ) => {
  const uri = `https://image.tmdb.org/t/p/w500${ actor.profile_path }`;

  return (
    <View style={ styles.rowContainer }>
      {
        actor.profile_path && (
          <Image 
            source={{
              uri
            }}
            style={ styles.actorImage }
          />
        )
      }
      <View>
        <Text style={ styles.cardTitle }>{ actor.name }</Text>
        <Text style={ styles.cardSubtitle }>{ actor.character }</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.30,
    shadowRadius: 5,
    elevation: 8,
    padding: 15,
    borderRadius: 15,
    marginRight: 10,
    marginBottom: 10,
  },
  actorImage: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  cardSubtitle: {
    fontSize: 16,
    opacity: 0.8
  }
});