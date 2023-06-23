import React, { useState, useEffect } from 'react';
import { Alert, View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Modal, Picker, TouchableHighlight, Button  } from 'react-native';
import { styles } from '../styles';
import Naviguation from '../components/Naviguation';
import ProgressBar from '../components/ProgressBar'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = () => {

    const [habits, setHabits] = useState([])
    const [checkedHabits, setCheckedHabits] = useState([]);
    const [habitsRatio, setHabitsRatio] = useState();
    const [habitsRatios, setHabitsRatios] = useState([]);
    const [finalHabitsRatio, setFinalHabitsRatio] = useState();
    const [date, setDate] = useState();
    const [previousDate, setPreviousDate] = useState();

    useEffect(() => {
        getHabitsFromStorage()
        getCheckedHabitsFromStorage()
    }, []) 

    useEffect(() => {

      const getDate = async () => {
        try {
          const date = await AsyncStorage.getItem('date');
          const parsedDate = JSON.parse(date);

          if (parsedDate) {
            setPreviousDate(parsedDate);
            storeDate()
          }
        } catch (error) {
          console.error('Erreur lors du stockage des données:', error);
        }
      }
      getDate()
  
    }, []);    

    useEffect(() => {

      let somme_ratios;

      if (date !== previousDate) {
        getHabitsRatio().then(getHabitsRatios)
      }
      setHabitsRatio(checkedHabits.length / habits.length * 100) 
      if (habitsRatio) {
        storeHabitsRatio()
      }

      if (habitsRatios.length !== 0) {
        for (const ratio of habitsRatios) {
          somme_ratios += ratio
        }
        setFinalHabitsRatio(somme_ratios / habitsRatios.length)
        console.log(finalHabitsRatio);    
      } else {
        console.log("aucun ratio stocké pour le moment"); 
        if (habitsRatio !== NaN) {
          setFinalHabitsRatio(habitsRatio)
          console.log(finalHabitsRatio)
        } 
      }

    }, [habits, checkedHabits, habitsRatio])

    const storeDate = async () => {

      const currentTime = new Date();
      const newDate = currentTime.getDate(); 
      console.log(newDate);
  
      try {
        await AsyncStorage.setItem('date', JSON.stringify(newDate));  
        setDate(newDate)
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    }

    const storeHabitsRatio = async () => {
  
      try {
        if (habitsRatio) {
          await AsyncStorage.setItem('habitsRatio', JSON.stringify(habitsRatio)) 
        } else {
          return
        }
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    }

    const getHabitsFromStorage = async () => {
        try {
          let habits = await AsyncStorage.getItem('habits');
          if (habits !== null) {
            habits = JSON.parse(habits)
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
          if (checkedHabits !== null) {
            checkedHabits = JSON.parse(checkedHabits)
            setCheckedHabits(checkedHabits);  
            console.log(checkedHabits); 
          }
        } catch (error) {
          console.error('Erreur lors de la récupération des données:', error);
        }
      }

    const getHabitsRatio = async () => {
      try {
        const ratio = await AsyncStorage.getItem('habitsRatio');
        setHabitsRatios((prevHabitsRatios) => [...prevHabitsRatios, JSON.parse(ratio)])
        storeHabitsRatios()
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    const storeHabitsRatios = async () => {
  
      try {
        if (habitsRatios) {
          await AsyncStorage.setItem('habitsRatios', JSON.stringify(habitsRatios)) 
        } else {
          return
        }
      } catch (error) {
        console.error('Erreur lors du stockage des données:', error);
      }
    }

    const getHabitsRatios = async () => {
      try {
        const ratio = await AsyncStorage.getItem('habitsRatios');
        setHabitsRatios(ratio)
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    return (
        <View style={styles.dashboardContainer} >
            <View style={styles.intro}>
                <Text style={styles.title}>Dashboard</Text>  
                <Naviguation />
            </View>
            <ProgressBar progress={finalHabitsRatio} />
        </View>
    );
};

export default Dashboard; 