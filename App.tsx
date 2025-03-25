import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import PilhaNavigation from './Screens/PilhaNavigation';
import AbaNavigation from './Screens/AbaNavigation';

export default function App() {
  return (
    <View style={styles.container}>
      <AbaNavigation />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});