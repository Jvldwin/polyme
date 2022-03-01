import { StyleSheet, Button, Alert} from 'react-native';

import { View, Text } from '../components/Themed';
import { RootTabScreenProps} from '../types';

interface question {
  question: string,
  answer: string,
  A:string,
  B:string,
  C:string,
  D:string
}

const questions : Array<question> = [{
  question: "The first question",
  answer: "A",
  A: "The first answer.",
  B: "The second answer.",
  C: "The third answer.",
  D: "The fourth answer."
},
{
  question: "The second question",
  answer: "A",
  A: "The first answer.",
  B: "The second answer.",
  C: "The third answer.",
  D: "The fourth answer."
}]

export default function TabOneScreen({ route, navigation }: RootTabScreenProps<'TabOne'>) {
  
  let Score:number = 0
  
  const answerA = questions[Score].A
  const answerB = questions[Score].B
  const answerC = questions[Score].C
  const answerD = questions[Score].D

  if (route.params !== undefined) {
    Score = route.params.playerScore
  }
  
  const AnswerCheck = (e: string) => {
    if (e === questions[Score].answer) {
      return true
    } else {
      return false
    }
  }

  const TextInANest = () => {
    const questionText = questions[Score].question
  
    return (
      <Text>
        <Text>
          {Score}
          {questionText}
        </Text>
      </Text>
    );
  };

  return (
    <View style={styles.container}>
      <TextInANest />
      <Button
        onPress={() => {
          if(AnswerCheck("A")) {
            Alert.alert("Your answer is correct", "You gain 1 point", [
              {text: "Continue", onPress: () => {
                if ( Score === questions.length-1) {
                  navigation.navigate("TabTwo", {playerScore: ++Score})
                } else {
                  navigation.navigate("TabOne", {playerScore: ++Score})
                }
              }}
            ])
          } else {
            navigation.navigate("TabTwo", { playerScore: Score })
          }
        }} 
        title={answerA}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          if(AnswerCheck("B")) {
            Alert.alert("Your answer is correct", "You gain 1 point", [
              {text: "Continue", onPress: () => {
                navigation.navigate("TabOne", {playerScore: ++Score})
              }}
            ])
          } else {
            navigation.navigate("TabTwo", { playerScore: Score })
          }
        }} 
        title={answerB}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          console.log(AnswerCheck("C"))
          if(AnswerCheck("C")) {
            Alert.alert("Your answer is correct", "You gain 1 point", [
              {text: "Continue", onPress: () => {
                navigation.navigate("TabOne", {playerScore: ++Score})
              }}
            ])
          } else {
            navigation.navigate("TabTwo", { playerScore: Score })
          }
        }} 
        title={answerC}
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={() => {
          if(AnswerCheck("D")) {
            Alert.alert("Your answer is correct", "You gain 1 point", [
              {text: "Continue", onPress: () => {
                navigation.navigate("TabOne", {playerScore: ++Score})
              }}
            ])
          } else {
            navigation.navigate("TabTwo", { playerScore: Score })
          }
        }} 
        title={answerD}
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
