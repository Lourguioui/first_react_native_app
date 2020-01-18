import React, { useState } from 'react'
import { StyleSheet, Text, View, Button, TextInput } from 'react-native'

export default function App () {
  // const [outputText, setOutputText] = useState('The first React Native app')
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
        />
        <Button title='Addd' style={{}} />
      </View>
      <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 60
  },
  outputContainer : {
    borderColor: 'grey',
    borderWidth: 0.5,
    paddingBottom: 15,
    width: '80%',
    marginRight: 20,
    borderRadius: 10,
    textAlign: 'center'
  },
  buttonStyle:{

  }
})
