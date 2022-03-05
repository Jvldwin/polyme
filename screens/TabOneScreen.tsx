import React from 'react';
import {  Alert, TouchableOpacity} from 'react-native';

import { View, Text, styles } from '../components/Themed';
import { RootTabScreenProps} from '../types';

interface question {
  [key: string]: string
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

  const [timerCount, setTimer] = React.useState(3)

  React.useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
          if (lastTimerCount <= 1 ) { clearInterval(interval)
             
          }
          return lastTimerCount - 1
      })
    }, 1000) //each count lasts for a second
    //cleanup the interval on complete
    return () => { 
      clearInterval(interval)
    }
  }, [])

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
          {timerCount}
          {Score}
          {questionText}
        </Text>
      </Text>
    );
  };

  const createTouchOpacity = (e: string) => {
    return (
      <TouchableOpacity
        style={styles.touchOpacity}
        onPress={() => {
          if(AnswerCheck(e)) {
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
            Alert.alert("Your answer is incorrect", "That's fine", [{text: "Continue", onPress: () => {
              navigation.navigate("TabTwo", { playerScore: Score })
            }}])
          }
        }} 
        accessibilityLabel="Learn more about this purple button"
      >
        <Text>{questions[Score][e]}</Text>
      </TouchableOpacity>
    )
  } 

  return (
    <View style={styles.container}>
      <TextInANest />
      { createTouchOpacity("A") }
      { createTouchOpacity("B") }
      { createTouchOpacity("C") }
      { createTouchOpacity("D") }
    </View>
  );
}
