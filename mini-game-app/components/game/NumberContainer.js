import {View, StyleSheet} from "react-native";
import Title from "../ui/Title";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return <View style={styles.container}>
    <Title>{children}</Title>
  </View>
}

export default NumberContainer;

const styles = StyleSheet.create({
   container: {
    borderWidth: 4,
    borzderColor: Colors.primary600,
    padding: 24,
    margin: 24,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
   },
   numberText: {
    fontFamily: 'open-sans-bold',
    fontSize: 36,
    color: '#fff',
   }
})