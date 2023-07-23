import React from 'react';
import { View, Text, Image } from 'react-native';

const UserItem = ({ user }) => {
  const icon = user.gender === 'M' ? require('./assets/boy.png') : require('./assets/girl.png');

  return (
    <View style={styles.userItem}>
      <Image source={user.avatar } style={styles.avatar} />
      <View>
        <Text style={styles.name}>{user.name}</Text>
        <Text>Email: {user.email}</Text>
        <Text>Age: {user.age}</Text>
      </View>
      <Image source={icon} style={styles.genderIcon} />
    </View>
  );
};

const styles = {
  userItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  genderIcon: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
  },
};

export default UserItem;
