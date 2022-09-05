import { useState } from "react";
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PriamryButton from "../components/PriamryButton";

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
    <View style={styles.inputContainer}>
      <TextInput style={styles.numberInput} value={enteredNumber} onChangeText={numberInputHandler} maxLength="2" keyboardType="number-pad" autoCapitalize="none" autoCorrect={false} />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PriamryButton onPress={resetInputHandler}>Reset</PriamryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PriamryButton onPress={confirmInputHandler}>Confirm</PriamryButton>
        </View>
      </View>
    </View>
  )
}

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    borderRadius: 8, 
    backgroundColor: "#4e0329",
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
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