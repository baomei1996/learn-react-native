import { useState } from "react"
import { View, TextInput, Button, StyleSheet, Modal, Image } from "react-native"
import GoalImage  from "../assets/images/goal.png"

function GoalInput ({ onAddGoal, visible, onCancel }) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler () {
    onAddGoal(enteredGoalText);
  }

  return(
    <Modal visible={visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <Image source={GoalImage} style={styles.image}/>
        <TextInput placeholder='Your course goal!' style={styles.textInput} onChangeText={goalInputHandler}/>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Add Goal' onPress={addGoalHandler} color="#b180f0"/>
          </View>
          <View style={styles.button}>
            <Button title='Cancel' onPress={onCancel} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    flex: 1,
    backgroundColor: "#311b6b",
    borderBottomColor: "#cccccc",

  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
     borderWidth: 1,
     borderColor: '#e4d0ff',
     backgroundColor: "#e4d0ff",
     color: "#120438",
     width: '80%',
     padding: 16,
     borderRadius: 5
  },
  buttonContainer: {
    flexDirection :'row',
    marginTop: 14,
  },
  button: {
    width: 100,
    marginHorizontal: 8
  },
})
