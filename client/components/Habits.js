import React from 'react';
import { Alert, View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Modal, Picker, TouchableHighlight, Button  } from 'react-native';
import { CheckBox } from 'react-native-elements';
import { styles } from './../styles';

const Habits = ({ index, habit, deleteHabit, handleCheck, checkedHabits}) => {
  return (
    <View index={index} style={styles.habitContainer}> 
        <View style={[styles.habitsElements, checkedHabits.includes(habit) ? { backgroundColor: '#32de84' } : { backgroundColor: 'red' }]}>
          <Text style={styles.habitText}>{habit}</Text>
          <View style={styles.deleteBtnContainer}>
            <TouchableOpacity style={styles.deleteButton} onPress={deleteHabit}>
              <Text style={styles.buttonText}>delete</Text>
            </TouchableOpacity>
          </View>
        </View>
      <View style={styles.checkbox}>
      <CheckBox
         title=''
         checked={checkedHabits.includes(habit)} 
         onPress={handleCheck}
        />
      </View>
    </View>  
  );
};

export default Habits;