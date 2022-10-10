import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import { useState, useEffect } from "react";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card"
import InstructionText from "../components/ui/InstructionText"
import NumberContainer from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import GuessLogItem from "../components/game/GuessLogItem"
import { Ionicons } from "@expo/vector-icons"

function generateRamdomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRamdomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}


let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRamdomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);

  useEffect(() => {
    if(currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver ])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);


  function nextGuessHandler(direction) {
    if(
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong...", [
        { text: "Sorry!", style: 'cancel' },
      ]);
      return;
    }
    if (direction === 'lower') {
      maxBoundary = currentGuess - 1;
    } else {
      minBoundary = currentGuess + 1;
    }

    const newRndNumber = generateRamdomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [newRndNumber, ...prevGuessRounds]);
  }

  const guessRoundsListLength = guessRounds.length;

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
          <InstructionText style={styles.instructionText}>Higher or lower</InstructionText>
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
                <Ionicons name="md-remove" />
              </PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
                <Ionicons name="add" />
              </PrimaryButton>
            </View>
          </View>
      </Card>
      <View style={styles.listContainer}>
        {/* {guessRounds.map(guessRound => <Text key={guessRound}>{guessRound}</Text>)} */}
        <FlatList 
          data={guessRounds} 
          renderItem={(itemData) => 
            <GuessLogItem 
              roundNumber={guessRoundsListLength - itemData.index}
              guess={itemData.item}
            />} 
          keyExtractor={(item) => item}/>
      </View>
    </View>
  )
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
  instructionText: {
    marginBottom: 14, 
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  listContainer: {
    flex:1,
    padding: 6
  }
})