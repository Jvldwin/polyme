import { StyleSheet, Button } from 'react-native';

import { RootTabScreenProps } from '../types';
import {  Text, View } from '../components/Themed';

export default function TabTwoScreen({  navigation, route }: RootTabScreenProps<'TabTwo'>) {

  let Score: number = 0

  if (route.params !== undefined) {
    Score = route.params.playerScore
  }

  return (
    <View style={styles.container}>
      <Text>Your score is: {Score}</Text>
      <Button
        onPress={() => {
          navigation.navigate("TabOne", {playerScore: 0})
        }} 
        title="Try again"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
