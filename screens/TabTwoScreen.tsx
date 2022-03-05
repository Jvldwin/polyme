import { StyleSheet, TouchableOpacity } from 'react-native';

import { RootTabScreenProps } from '../types';
import {  Text, View, styles } from '../components/Themed';

export default function TabTwoScreen({  navigation, route }: RootTabScreenProps<'TabTwo'>) {

  let Score: number = 0

  if (route.params !== undefined) {
    Score = route.params.playerScore
  }

  return (
    <View style={styles.container}>
      <Text style={styles.primaryText } >You have earned {Score} gold</Text>
      <Text>Life has got all those twists and turns. You’ve got to hold on tight and off you go</Text>
      <TouchableOpacity
        style={styles.touchOpacity}
        onPress={() => {
          navigation.navigate("TabOne", {playerScore: 0})
        }} 
        accessibilityLabel="Learn more about this purple button"
      >
        <Text>Try again</Text>
      </TouchableOpacity>
    </View>
  );
}

