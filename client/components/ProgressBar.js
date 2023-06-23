import React, { useEffect, useState } from 'react';
import { Alert, View, Text, Image, ScrollView, FlatList, TouchableOpacity, TextInput, ActivityIndicator, Modal, Picker, TouchableHighlight, Button  } from 'react-native';
import { styles } from '../styles';
import CircularProgress from 'react-native-circular-progress-indicator'

const ProgressBar = ({ progress }) => {

    useEffect(() => {
        console.log(progress);
    }, [progress])

            if (progress) {
                return (
                    <View style={styles.ProgressBarContainer}>
                        <CircularProgress 
                            radius={90}
                            value={progress}
                            textColor={'white'}
                            fontSize={20}
                            valueSuffix={"%"}
                            activeStrokeColor='white'
                            inActiveStrokeColor={'white'}
                            inActiveStrokeOpacity={0.2} 
                            duration={2000}
                        />
                    </View>
                );
            } else {
                return (
                    <View style={styles.ProgressBarContainer}>
                        <CircularProgress 
                            radius={90}
                            value={0}
                            textColor={'white'}
                            fontSize={20}
                            valueSuffix={"%"}
                            activeStrokeColor='white'
                            inActiveStrokeColor={'white'}
                            inActiveStrokeOpacity={0.2} 
                            duration={2000}
                        />
                    </View>
                );
            }
};

export default ProgressBar;