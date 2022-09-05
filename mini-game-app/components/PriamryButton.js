import { View, Text, Pressable, StyleSheet } from "react-native";

function PriamryButton({ children, onPress }) {
  function pressHandler() {
    onPress();
  }

  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable onPress={pressHandler} style={({ pressed }) => pressed ? [styles.pressed, styles.buttonInnerContainer]:  styles.buttonInnerContainer} android_ripple={{ color: "#640233" }}>
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  )
}

export default PriamryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 28,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75
  }
})