import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import { useState } from "react";
import { StatusBar } from "expo-status-bar"

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function addGoalHandler (enteredGoalText) {
    setCourseGoals(courrentCourseGoals => [...courrentCourseGoals, {text: enteredGoalText, id: Math.random().toString() }]);
    endAddGoalHandler()

  }

  function deleteGoalHandler (id) {
    setCourseGoals((currentCourseGoals) => {
      return currentCourseGoals.filter((goal) => goal.id !== id);
    })
  }

  function startAddGoalHandler () {
    setModalIsVisible(true);
  }

  function endAddGoalHandler () {
    setModalIsVisible(false);
  }
  return (
    <>
      <StatusBar style='light' />
      <View style={styles.appConatiner}>
        <Button title='Add New Goal' color='#a065ec' onPress={startAddGoalHandler}/>
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler}/>
        <View style={styles.goalContainer}>
          <FlatList alwaysBounceVertical={false} data={courseGoals} renderItem={({item}) => {
            return <GoalItem item={item} onDleteItem={deleteGoalHandler} />;
          }}
          keyExtractor={(item, idx) => {return item.id}} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appConatiner: {
    paddingTop: 50,
    flex: 1,
    paddingHorizontal: 16,
  },
  goalContainer: {
    flex: 5,
  },

});
