import { StyleSheet, Button } from 'react-native';

import { View } from '../components/Themed';
import { RootTabScreenProps} from '../types';

export default function WelcomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Button
        onPress={() => {
          navigation.navigate("TabOne", {playerScore: 0})
        }} 
        title="Play"
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
