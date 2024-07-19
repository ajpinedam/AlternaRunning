import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Image, Platform, Text, View } from 'react-native';

export default function TabTwoScreen() {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text style={{color: 'green'}}>
        Hola react Native
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
