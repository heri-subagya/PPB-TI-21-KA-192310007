import React, { Component } from 'react';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';
import { StatusBar } from "expo-status-bar";
import SearchBar from './SearchBar';
import Users from './Users'; // Import the Users array
import ExpScrollView from './ExpScrollView';

export class MyFriends extends Component {
  renderUserItem = ({ item }) => <UserItem item={item} />; // Rendering function for UserItem

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar hidden={false} style="light" />
        <View style={styles.header}></View>
        <SearchBar />
        <View style={styles.body}>
            <Text style={{...styles.headingText, color: "white"}}>Followers</Text>
          <ExpScrollView Users={Users} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'black' },
  header: { flex: 1, justifyContent: "center", paddingHorizontal: 4, backgroundColor: '#121212' },
  body: { flex: 10, backgroundColor: '#121212' }
});

export default MyFriends;
