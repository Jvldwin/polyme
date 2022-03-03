import { StyleSheet, Button, Image, TouchableOpacity } from 'react-native';

import { View, Text } from '../components/Themed';
import { RootTabScreenProps} from '../types';

export default function WelcomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nytimes.com%2F2021%2F09%2F07%2Fscience%2Fcat-stripes-genetics.html&psig=AOvVaw1-LRZ_HjTB_j1z_lImUIch&ust=1646344835467000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLjWkMy2qPYCFQAAAAAdAAAAABAD"
        }} 
      />
      <Text >Learning and earning at the same time</Text>
      <Text>Life has got all those twists and turns. You’ve got to hold on tight and off you go</Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'gray',
          width: '85%',
          padding: 10,
          justifyContent: 'center',
          borderRadius: 25,
          alignItems: 'center',
          shadowOpacity: 5
        }}
        onPress={() => {
          navigation.navigate("TabOne", {playerScore: 0})
        }} 
        accessibilityLabel="Learn more about this purple button"
      >
        <Text>Play</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
