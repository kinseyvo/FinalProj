import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Home = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const buttons = [
        { title: 'Account', icon: 'account-circle', onPress: () => handleAccountPress(), color: '#3344FF' },
        { title: 'Gym Locations', icon: 'map-marker', onPress: () => handleLocationsPress(), color: 'red'},
        { title: 'Schedules', icon: 'calendar-month', onPress: () => handleSchedulesPress(), color: 'black' },
        { title: 'Workout Tracking', icon: 'timer', onPress: () => handleWorkoutTrackingPress(), color: 'black' },
        { title: 'Nutrition', icon: 'bowl-mix', onPress: () => handleNutritionPress(), color: 'black' },
        { title: 'Exercises', icon: 'weight-lifter', onPress: () => handleExercisesPress(), color: 'black' },
        { title: 'Review', icon: 'clipboard-check-multiple', onPress: () => handleReviewPress(), color: 'green' },
        { title: 'About', icon: 'alert-circle-outline', onPress: () => handleAboutPress(), color: 'grey' },
    ];

    const handleAccountPress = () => {
        navigation.navigate('Account');
    };

    const handleLocationsPress = () => {
        navigation.navigate('Locations');
    };

    const handleSchedulesPress = () => {
        navigation.navigate('Schedules');
    }; 

    const handleWorkoutTrackingPress = () => {
        navigation.navigate('WorkoutTracking');
    }; 

    const handleNutritionPress = () => {
        navigation.navigate('Nutrition');
    };

    const handleExercisesPress = () => {
        navigation.navigate('Exercises');
    }; 

    const handleReviewPress = () => {
        navigation.navigate('Review');
    }; 
  
    const handleAboutPress = () => {
        navigation.navigate('About');
    };

    return (
        <PaperProvider>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <Text style={styles.title}>Gymprentice</Text>
                    <Text style={styles.header}>Welcome, {context.username}!</Text>
                    <View style={styles.inputContainer}>
                        <View style={styles.buttonWrapper}>
                            {buttons.map((button, index) => (
                                <TouchableOpacity key={index} style={styles.buttonContainer} onPress={button.onPress}>
                                    <View style={styles.buttonContent}>
                                        <MCIcons name={button.icon} size={60} color={button.color} />
                                        <Text style={styles.topText}>{button.title}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>
                </View>
            </SafeAreaProvider>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ACB6E5',
        paddingHorizontal: 8,
        paddingVertical: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 7,
        color: 'blue',
    },
    header: {
        fontSize: 22,
        marginBottom: 19,
        fontWeight: 'bold',
        color: 'black',
    },
    topText: {
        fontSize: 16,
        color: 'black',
    },
    buttonContainer: {
        width: '36%',
        aspectRatio: 1,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 5,
        overflow: 'hidden',
    },
    buttonWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    buttonContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Home;
