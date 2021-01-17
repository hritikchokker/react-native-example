import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      <Text>Hello World from react native</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8876F',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
