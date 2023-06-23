import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity, Text, Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import Dashboard from './../pages/Dashboard';
import { styles } from '../styles';

const Navigation = () => {
  
  const [menuVisible, setMenuVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const navigation = useNavigation();

  const handlePress = () => {
    setClicked(!clicked);
    setMenuVisible(!menuVisible);
  };


  return (
      <View style={styles.NaviguationContainer} >
        <TouchableOpacity onPress={handlePress} style={styles.menuIcon} >
          <View style={styles.line} />
          <View style={[styles.line, clicked && styles.lineClicked]} />
          <View style={[styles.line, clicked && styles.lineClicked]} />
        </TouchableOpacity>
        {menuVisible && (
          <View style={{backgroundColor: "#0a2351", width: 110, padding: 10, position: 'absolute', top: 40, right: 10, padding: 20, borderRadius: 4, zIndex: 10, gap: 20,  }} >
            <TouchableOpacity onPress={() => navigation.navigate('Home')} >
              <Text style={{ color: 'white', fontWeight: 'bold',}}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Dashboard')} >
              <Text style={{ color: 'white', fontWeight: 'bold',}}>Dashboard</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
  );
};

export default Navigation;
