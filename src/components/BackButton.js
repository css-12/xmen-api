import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';

const BackButton = () => {
  const navigation = useNavigation();

  if (navigation.getState().index === 0) {
    return <></>;
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={tw`absolute left-1 bottom-2`}
    >
      <Ionicons name="ios-arrow-back" size={36} color="#DC2626" />
    </TouchableOpacity>
  );
};

export default BackButton;
