import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import tw from 'twrnc';
import CharactersListScreen from '../screens/CharactersListScreen';
import CharacterScreen from '../screens/CharacterScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: tw`bg-yellow-300 p-2`,
      }}
    >
      <Stack.Screen
        name="CharactersListScreen"
        component={CharactersListScreen}
      />
      <Stack.Screen name="CharacterScreen" component={CharacterScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
