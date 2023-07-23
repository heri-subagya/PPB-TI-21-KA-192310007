import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import MyFirends from './src/MyFriends';

export default function App() {
  return (
    <><MyFirends /><View>
      <StatusBar style="auto" />
    </View></>
  );
}