import React from 'react';
import { View, Text } from 'react-native';
import UserItem from './UserItem';

const userList = [
  {
    name: 'Zafran',
    email: 'juple_zafran@5cm.com',
    age: 37,
    gender: 'M',
    avatar: require('./assets/zafran.jpg'),
  },
  {
    name: 'Riani',
    email: 'rianicantik@e5cm.com',
    age: 38,
    gender: 'F',
    avatar: require('./assets/riani.jpg'),
  },
  {
    name: 'Ian',
    email: 'ianmanchester@5cm.com',
    age: 40,
    gender: 'M',
    avatar: require('./assets/ian.jpg'),
  },
  {
    name: 'Dinda',
    email: 'dindalutchuuu@5cm.com',
    age: 30,
    gender: 'F',
    avatar: require('./assets/dinda.jpg'),
  },

];

const UserList = () => {
  return (
    <View>
      <Text style={styles.heading}>User List</Text>
      {userList.map((user, index) => (
        <UserItem key={index} user={user} />
      ))}
    </View>
  );
};

const styles = {
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
};

export default UserList;