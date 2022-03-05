import { Image, TouchableOpacity, Animated, Dimensions } from 'react-native';

import { View, Text, styles } from '../components/Themed';
import { RootTabScreenProps} from '../types';

const { height, width} = Dimensions.get("window")

export default function WelcomeScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <Image
        source={{
          width: 200,
          height: 300,
          uri: "https://media.istockphoto.com/photos/european-short-haired-cat-picture-id1072769156?k=20&m=1072769156&s=612x612&w=0&h=k6eFXtE7bpEmR2ns5p3qe_KYh098CVLMz4iKm5OuO6Y="
        }} 
      />
      <Text style={styles.primaryText}>Learning and earning at the same time</Text>
      <Text
        style={{
          color: 'white',
          textAlign: 'center',
          fontSize: 14,
          marginBottom: 24
        }}
      >Life has got all those twists and turns. You’ve got to hold on tight and off you go</Text>
      <TouchableOpacity
        style={ styles.touchOpacity }
        onPress={() => {
          navigation.navigate("TabOne", {playerScore: 0})
        }} 
        accessibilityLabel="Learn more about this purple button"
      >
        <Text style={{
          color: 'blue'
        }}>Play</Text>
      </TouchableOpacity>
      <Animated.View
        style={{
          backgroundColor: 'yellow',
          height: width,
          width: width,
          alignSelf: 'center',
          position: 'absolute',
          top: 0,
          marginTop: 100,
          borderRadius: 10000,
          zIndex: -1
        }}
      >

      </Animated.View>
    </View>
  );
}