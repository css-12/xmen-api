import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import React from 'react';
import Header from './Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const BlankPageLoading = () => {
  return (
    <SafeAreaView>
      <Header />
      <ActivityIndicator size={32} color="#DC2626" />
    </SafeAreaView>
  );
};

export default BlankPageLoading;

const styles = StyleSheet.create({});
