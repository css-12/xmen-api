import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Foundation } from '@expo/vector-icons';
import BackButton from './BackButton';

const Header = () => {
  return (
    <View
      style={tw`flex-row justify-center pb-2 mb-4 border-b-2 border-red-600 relative`}
    >
      <BackButton />

      <Foundation name="x-circle" size={38} color="#DC2626" />
      <Text style={tw`text-4xl text-red-600 ml-3`}>X-Men Info</Text>
    </View>
  );
};

export default Header;
