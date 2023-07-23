import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

const Page1 = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Page2', { name: 'Heri' })}>
      <View style={{ backgroundColor: "purple", padding: 10, borderRadius: 10, margin: 10 }}>
        <Text style={{ color: "white", textAlign: "center" }}>
          Click here to see me
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const Page2 = ({ navigation, route }) => {
  const name = route.params?.name;
  return <Text>This is {name}'s profile</Text>;
};


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Page1} />
        <Tab.Screen name="Profile" component={Page2} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};