import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const CharacterItem = ({ character }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CharacterScreen', { character })}
      style={tw`p-3 bg-red-500 m-1 rounded-full`}
    >
      <Text style={tw`text-3xl text-gray-900`}>{character.name}</Text>
    </TouchableOpacity>
  );
};

export default CharacterItem;

const styles = StyleSheet.create({});
