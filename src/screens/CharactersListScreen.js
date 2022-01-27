import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';
import api from '../services/api';
import Header from '../components/Header';
import BlankPageLoading from '../components/BlankPageLoading';
import CharacterItem from '../components/CharacterItem';

const CharactersListScreen = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);

  async function loadCharacter() {
    if (characters.length === 0 || characters.length < total) {
      setLoading(true);

      const result = await api.get(`/characters/?page=${page}`);

      setCharacters([...characters, ...result.data.results]);
      setPage(page + 1);
      setTotal(result.data.count);

      setLoading(false);
    }
  }

  useEffect(() => {
    loadCharacter();
  }, []);

  //Página Vazia
  if (characters.length === 0) {
    return <BlankPageLoading />;
  }

  return (
    <SafeAreaView style={tw`flex-1`}>
      <Header />

      <FlatList
        data={characters}
        renderItem={({ item }) => <CharacterItem character={item} />}
        keyExtractor={(item) => item.id}
        onEndReached={loadCharacter}
        onEndReachedThreshold={0.1}
        showsVerticalScrollIndicator={false}
      />

      {loading && <ActivityIndicator size={25} color="#DC2626" />}
    </SafeAreaView>
  );
};

export default CharactersListScreen;
