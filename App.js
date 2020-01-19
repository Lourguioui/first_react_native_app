import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native'

export default function App () {
  // const [outputText, setOutputText] = useState('The first React Native app')
  const [entredGoal, setentredGoal] = useState('')
  const [goals, setGoals] = useState([])
  const handleInput = entredGoal => {
    setentredGoal(entredGoal)
  }
  const addGoalHandler = () => {
    setGoals(currentGoals => [...currentGoals,entredGoal])
  }
  return (
    <View style={styles.screen}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <TextInput
          placeholder='Course Goal'
          style={styles.outputContainer}
          onChangeText={handleInput}
          value={entredGoal}
        />
        <Button title='Addd' style={{}} onPress={addGoalHandler} />
      </View>
      <ScrollView>
      {goals.map((goal) => <View style={styles.goalsStyle} key={goal}><Text>{goal}</Text></View>)}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  outputContainer: {
    borderColor: 'grey',
    borderWidth: 0.5,
    paddingBottom: 15,
    width: '80%',
    marginRight: 20,
    borderRadius: 10,
    textAlign: 'center'
  },
  buttonStyle: {},
  goalsStyle : {
    padding : 10,
    marginVertical : 10,
    backgroundColor : '#bbb',
    textAlign : "center",
    fontFamily : "Roboto",
    shadowColor : "black",
  

  }
})
