import { useState } from "react";
import { View, Text,TextInput, StyleSheet, TouchableOpacity } from "react-native";

import { MaterialIcons } from "@expo/vector-icons";
export const InputToDo = (props) => {
  const [checkInput,setcheckInput]=useState(false);
  const [task, setTask] = useState();
  const handleAddTask = (value) => {
    if(value==null){
     setcheckInput(true);
    }else{
        props.addTask(value)
        setTask(null)
    }

  };
  return (
    <View style={styles.container}>
      <Text style={styles.appTitle}>
           To Do App
       </Text>

       <View style={styles.inputToDoStyle}>
      
      <TextInput
        style={styles.inputField}
        placeholder="Add to List... "
        onChangeText={(txt) => {
          setTask(txt);
          setcheckInput(false)
        }}
        value={task}
      />

      <TouchableOpacity
        onPress={() => {
          handleAddTask(task);
        }}
        
      >
        <View style={styles.btn}>
          <MaterialIcons name="add" color="white" size={23} />
        </View>
        </TouchableOpacity>
        </View>
      {checkInput? <Text style={{color:"red",fontSize:15,marginBottom:20}} >Task is Empty..!!</Text>:null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    
    alignItems: "center",
    
  },
  inputField: {
    width: "80%",
    borderWidth: 2,
    marginVertical: 20,
    marginLeft: 8,
    padding: 8,
    borderRadius: 18,
  },
   appTitle:{
        alignItems:"center",
        marginTop:30,
        color:"black",
        fontSize:25,
        textAlign:"center",
        color: "black",
        fontWeight:"bold",
        
       
  },
  inputToDoStyle: {
     marginTop: 15,
     alignItems: "center",
    flexDirection: "row",
        
    },
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#660f1e",
    width: 45,
    height: 45,
    borderRadius: 20,
    margin: 6,
  },
});
