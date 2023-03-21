import { useState } from "react";

import { StyleSheet, View, TextInput, Button, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [courseGoals, setCourseGoals] = useState([]);

  //fetching user input as the user types
  function goalInputHandler(enteredText) {
    // console.log(enteredText);
    setEnteredGoalText(enteredText);
  }

  //should be fired when the button is clicked
  function addGoalHandler() {
    // console.log(enteredGoalText);
    // setCourseGoals((currentCourseGoals) => [
    //   ...currentCourseGoals,
    //   enteredGoalText,
    // ]); //||ScrollView
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() },
      // { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your course goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add Goal" onPress={addGoalHandler} />
      </View>

      <View style={styles.goalsContainer}>
        {/* || ScrollView is perfect for articles */}
        {/* || using scroll view */}
        {/* <ScrollView>
          
          {courseGoals.map((goal) => (
            <View style={styles.goalItem}>
              <Text style={styles.text} key={goal}>
                {goal}
              </Text>
            </View>
          ))}
        </ScrollView> */}
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} />;
          }}
          // keyExtractor={(item, index) => {
          //   return item.id;
          // }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, //parent container... taking up the whole height
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  inputContainer: {
    flex: 1, // 1 of available height
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    padding: 8,
  },
  goalsContainer: {
    flex: 5, // 5 of the available height.
  },
});
