import { useState } from "react";
import { TextInput, View, StyleSheet, Alert, Text } from "react-native";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import PriamryButton from "../components/ui/PriamryButton";

function StartGameScreen({ pickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function numberInputHandler(enteredText) {
    setEnteredNumber(enteredText)
  }

  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confirmInputHandler() {
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      // show alert ...

      Alert.alert(
        "Invalid number!", 
        "Number has to be a number between 1 and 99.", 
        [{ text: "Okay", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    pickNumber(chosenNumber);
  }

  return (
  <View style={styles.rootContainer}>
    <Title>Guess My Number</Title>
    <Card>
      <InstructionText style={styles.instructionText}>Enter a Number</InstructionText>
        <TextInput style={styles.numberInput} value={enteredNumber} onChangeText={numberInputHandler} maxLength="2" keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PriamryButton onPress={resetInputHandler}>Reset</PriamryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PriamryButton onPress={confirmInputHandler}>Confirm</PriamryButton>
          </View>
        </View>
      </Card>
  </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50, 
    fontSize: 32, 
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center"
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})