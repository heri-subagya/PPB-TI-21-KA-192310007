import { StatusBar } from 'expo-status-bar';
import React from 'react';
import UserList from './components/UserList';
import {StyleSheet, View, Text } from 'react-native';

const App = () => {
  return (
<View style={styles.container}>
      <Text>Here is my fav 5cm Actor</Text>
      <UserList />
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;