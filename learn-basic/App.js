import { StyleSheet, Text, View, Button  } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Another piece of text!</Text>
      <Text style={{ marginTop: 15, borderWidth: 3, borderColor: "yellow" }}>Content in here</Text>
      <Button title='tab me!'></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
