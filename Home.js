import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const Home = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const buttons = [
        { title: 'Account', icon: require('./assets/image/account.jpg'), onPress: () => handleAccountPress() },
        { title: 'Gym Locations', icon: require('./assets/image/location-icon.jpg'), onPress: () => handleLocationsPress() },
        { title: 'Schedules', icon: require('./assets/image/calendar.jpg'), onPress: () => handleSchedulesPress() },
        { title: 'Workout Tracking', icon: require('./assets/image/timer-icon.jpg'), onPress: () => handleWorkoutTrackingPress() },
        { title: 'Nutrition', icon: require('./assets/image/nutrition.jpg'), onPress: () => handleNutritionPress() },
        { title: 'Exercises', icon: require('./assets/image/exercise.jpg'), onPress: () => handleExercisesPress() },
        { title: 'Review', icon: require('./assets/image/review-icon.jpg'), onPress: () => handleReviewPress() },
        { title: 'About', icon: require('./assets/image/about-icon.jpg'), onPress: () => handleAboutPress() },
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
                                        <Image source={button.icon} style={styles.buttonIcon} />
                                        <Text>{button.title}</Text>
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
        backgroundColor: '#F0F0F0',
        paddingHorizontal: 8,
        paddingVertical: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#3344FF',
    },
    header: {
        fontSize: 22,
        marginBottom: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    topText: {
        fontSize: 18,
        marginBottom: 10,
        color: 'black',
    },
    buttonContainer: {
        width: '35%',
        aspectRatio: 1,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: '#ccc',
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
    buttonIcon: {
        width: '70%',
        height: '70%',
    },
});

export default Home;
