import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";

export const ToDoList = (props) => {
   const [done,setDone]=useState(false);
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: '#660f1e' ,fontWeight: 'bold' ,fontSize: 20}}>Task{props.index}:</Text>
      </View>

      <View style={done?styles.doneStyle:styles.textView}>
        <Text style={done?styles.toDoTextAfterDone:styles.toDoTextBefore}>{props.task}</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          setDone(false)
          props.deleteTask();
              }}
          >
        <View style={styles.btn}>
            <MaterialIcons name="remove" size={23} color="white" />
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>{
            setDone(true);
        }}>
        <View style={styles.btn}>
            <MaterialIcons name="check" size={20} color="white" />
        </View>
        </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  btn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#660f1e",
    width: 27,
    height: 27,
    borderRadius: 20,
    margin: 6,
    },
    container: {
    marginTop: 22,
    alignItems: "center",
    flexDirection: "row",
  },
    textView:{
        margin:10,
        padding:10,
        width:"50%",
        borderRadius:10,
        backgroundColor:"white"

  },
    doneStyle:{
        color:"white",
        fontSize:20,
        backgroundColor:"#660f1e",
        margin:10,
        padding:8,
        width:"50%",
        borderRadius:10,

  },
  toDoTextBefore: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"black",
  },
  toDoTextAfterDone: {
    fontWeight: 'bold',
    fontSize: 18,
    color:"white",
  },
});
