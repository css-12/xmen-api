import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import Header from '../components/Header';

const CharacterScreen = ({ route }) => {
  const { character } = route.params;

  return (
    <SafeAreaView>
      <Header />

      {/* Nome */}
      <Text style={tw`text-4xl text-gray-900 text-center mb-7 tracking-widest`}>
        {character.name}
      </Text>

      {/* Imagem */}
      <Image
        style={tw`w-50 h-85 mb-10 rounded-3xl self-center`}
        source={{ uri: character.img }}
      />

      {/* Pseudônimo */}
      <Text style={tw`text-2xl text-gray-900 mb-3 ml-3 tracking-widest`}>
        Alias: {character.alias}
      </Text>

      {/* Descrição */}
      <Text style={tw`text-2xl text-gray-900 mb-3 ml-3 tracking-normal`}>
        Description: {character.description}
      </Text>

      {/* Poderes */}
      <Text style={tw`text-2xl text-gray-900 mb-3 ml-3 tracking-wider`}>
        Powers: {character.powers}
      </Text>

      {/* Afiliação */}
      <Text style={tw`text-2xl text-gray-900 mb-3 ml-3 tracking-widest`}>
        Affiliation: {character.affiliation}
      </Text>
    </SafeAreaView>
  );
};

export default CharacterScreen;
