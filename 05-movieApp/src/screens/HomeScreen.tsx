import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { Button, Text, View} from 'react-native';

export const HomeScreen = () => {
  const navigation = useNavigation<any>();
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