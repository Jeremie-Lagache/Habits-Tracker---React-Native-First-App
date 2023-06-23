import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Alert, View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Modal, Picker, TouchableHighlight, Button  } from 'react-native';
import { styles } from './../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Habits from './../components/Habits'
import Naviguation from './../components/Naviguation'

const Home = () => {

  const [newHabit, setNewHabit] = useState('')
  const [habits, setHabits] = useState([])
  const [checkedHabits, setCheckedHabits] = useState([]);
  const [date, setDate] = useState();
  const [previousDate, setPreviousDate] = useState();

  useEffect(() => {
    getHabitsFromStorage();
    getCheckedHabitsFromStorage()
  }, [previousDate]);       

  useEffect(() => {

    const getDate = async () => {
      try {
        const date = await AsyncStorage.getItem('date');
        setPreviousDate(parseFloat(date))

        if (previousDate) {
          storeDate()
        }
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    }
    getDate()   

  }, [previousDate]);  

  useEffect(() => {

      if (date !== previousDate) {
        setCheckedHabits([])  
        console.log('new day'); 
      }
  }, [date])

  useEffect(() => {
    const storeCheckedHabits = async () => {
      try {
        await AsyncStorage.setItem('checkedHabits', JSON.stringify(checkedHabits));
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    }
    storeCheckedHabits()   
  }, [checkedHabits])

  useEffect(() => {
    const storeDataInStorage = async () => {
      try {
        await AsyncStorage.setItem('habits', JSON.stringify(habits));
        console.log('Données stockées avec succès.');
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    };
    storeDataInStorage()
  }, [habits])

  const storeDate = async () => {

    const currentTime = new Date();
    const newDate = currentTime.getDate();

    try {
      const date = await AsyncStorage.setItem('date', newDate.toString());
      setDate(newDate)

    } catch (error) {
      console.error('Erreur lors du stockage des données:', error);
    }
  }
 
  const getHabitsFromStorage = async () => {
    try {
      let habits = await AsyncStorage.getItem('habits');
      if (habits !== null) {
        habits = JSON.parse(habits)
        setHabits([])
        setHabits(habits); 
        console.log(habits);
      }
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  };

  const getCheckedHabitsFromStorage =  async () => {
    try {
      let checkedHabits = await AsyncStorage.getItem('checkedHabits');
        checkedHabits = JSON.parse(checkedHabits)
        setCheckedHabits(checkedHabits);  
        console.log(checkedHabits); 
    } catch (error) {
      console.error('Erreur lors de la récupération des données:', error);
    }
  }

  const handleAddHabit = () => {
    if (newHabit !== '' && !habits.includes(newHabit) ) {
      setHabits((prevHabits) => [...prevHabits, newHabit])
      setNewHabit('')
    } else {
      Alert.alert(
        "Habit can't be add",
        'Your new habit is either empty or already exists.',
        [
          {
            text: 'OK',
          }
        ]
      );
    } 
    }

  const deleteHabit = (habit) => {
    const updatedHabits = habits.filter((value) => value !== habit);   
    setHabits(updatedHabits);
  }

  const handleCheck = async (habit) => {
    if (checkedHabits.includes(habit)) {
      const updatedCheckedHabits = checkedHabits.filter((value) => value !== habit);
      setCheckedHabits(updatedCheckedHabits);  
    } else {
      setCheckedHabits(prevCheckedHabits => [...prevCheckedHabits, habit]);
    }
  };  
    
  return ( 
    <View style={styles.container}>
      <View style={styles.intro}>
        <Text style={styles.title}>Habits Tracker</Text>
        <Naviguation />
      </View>
      <View style={styles.addHabitContainer}> 
        <TextInput
          placeholder="New Habit"
          value={newHabit}
          onChangeText={(newHabit) => setNewHabit(newHabit)}
          style={styles.input}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddHabit}>
          <Text style={styles.buttonText}>Add Habit</Text>
        </TouchableOpacity>
      </View>
        <ScrollView style={styles.habitsContainer}>
        { 
          habits.map((habit, index) => (
            <Habits key={index} habit={habit} deleteHabit={() => deleteHabit(habit)} handleCheck={() => handleCheck(habit)} checkedHabits={checkedHabits} />   
          ))
        }
        </ScrollView>
      <StatusBar style="auto" /> 
    </View>
  );
}

export default Home;
