import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import Title from "../components/ui/TitleTitle";
import NumberContainer from "../components/game/NumberContainer";
import PriamryButton from "../components/ui/PriamryButton";

function generateRamdomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if(rndNum === exclude) {
    return generateRamdomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen({ userNumber }) {
  const initialGuess = generateRamdomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  return <View style={styles.screen}>
   <Title>Opponent's Guess</Title>
   <NumberContainer>{currentGuess}</NumberContainer>
    <View>
      <Text>Higher or lower</Text>
      <PriamryButton>+</PriamryButton>
      <PriamryButton>-</PriamryButton>
    </View>
  </View>
}

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
})