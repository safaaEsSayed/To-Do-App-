import { StatusBar } from 'expo-status-bar';
import { InputToDo } from "./components/inputToDo";
import { useState } from "react";
import { StyleSheet, Text, View , ScrollView ,Button ,Keyboard } from 'react-native';
import { ToDoList } from './components/toDoList';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (task) => {
    setTasks([...tasks, task]);
    Keyboard.dismiss();
  };
  const deleteTask = (deleteIndex) => {
    setTasks(tasks.filter((val, idx) => idx != deleteIndex));
  };
  return (

    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="black" />
      <Text style={{color: '#660f1e' ,fontWeight: 'bold' ,fontSize: 20}}>To Do List</Text>
      <InputToDo addTask={addTask} />
       <ScrollView>
        {tasks.map((task, idx) => {
          return (
            <View>
              <ToDoList
                index={idx + 1}
                task={task}
                deleteTask={() => {
                  deleteTask(idx);
                }}
              />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.btn}>
        <Button
          title="Clear All"
          color={"#660f1e"}
          onPress={() => {
            setTasks([]);
            
          }}
        />
      </View>
    </View>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "red",
    width: 200,
    color: "black",
    fontSize: 20,
    borderRadius: 24,
    overflow: "hidden",
    margin: 20,
  },
 
});
