import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, ScrollView, SafeAreaView, TextInput, Alert, TouchableOpacity } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Schedules = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [selected, setSelected] = useState('');
    const [mondayInput, setMondayInput] = useState('');
    const [tuesdayInput, setTuesdayInput] = useState('');
    const [wednesdayInput, setWednesdayInput] = useState('');
    const [thursdayInput, setThursdayInput] = useState('');
    const [fridayInput, setFridayInput] = useState('');
    const [saturdayInput, setSaturdayInput] = useState('');
    const [sundayInput, setSundayInput] = useState('');

    const handleReset = async () => {
      Alert.alert(
        'Reset Confirmation',
        'Are you sure you want to reset workout schedule?',
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'Reset',
            onPress: async () => {
              console.log("handleReset pressed");
              try {
                setMondayInput(' ');
                setTuesdayInput(' ');
                setWednesdayInput(' ');
                setThursdayInput(' ');
                setFridayInput(' ');
                setSaturdayInput(' ');
                setSundayInput(' ');
    
                await AsyncStorage.removeItem('mondayInput');
                await AsyncStorage.removeItem('tuesdayInput');
                await AsyncStorage.removeItem('wednesdayInput');
                await AsyncStorage.removeItem('thursdayInput');
                await AsyncStorage.removeItem('fridayInput');
                await AsyncStorage.removeItem('saturdayInput');
                await AsyncStorage.removeItem('sundayInput');
              } catch (error) {
                console.error('error', error);
              }
            }
          }
        ]
      );
    };

    const handleSave = () => {
      console.log("handleSave pressed");
      try {
        AsyncStorage.setItem('mondayInput', mondayInput);
        AsyncStorage.setItem('tuesdayInput', tuesdayInput);
        AsyncStorage.setItem('wednesdayInput', wednesdayInput);
        AsyncStorage.setItem('thursdayInput', thursdayInput);
        AsyncStorage.setItem('fridayInput', fridayInput);
        AsyncStorage.setItem('saturdayInput', saturdayInput);
        AsyncStorage.setItem('sundayInput', sundayInput);
        console.log('data saved');
      } catch (error) {
        console.log('error', error);
      }
    };

    useEffect(() => {
      const loadWorkoutInputs = async () => {
        try {
          const storedMondayInput = await AsyncStorage.getItem('mondayInput');
          const storedTuesdayInput = await AsyncStorage.getItem('tuesdayInput');
          const storedWednesdayInput = await AsyncStorage.getItem('wednesdayInput');
          const storedThursdayInput = await AsyncStorage.getItem('thursdayInput');
          const storedFridayInput = await AsyncStorage.getItem('fridayInput');
          const storedSaturdayInput = await AsyncStorage.getItem('saturdayInput');
          const storedSundayInput = await AsyncStorage.getItem('sundayInput');

          setMondayInput(storedMondayInput || '');
          setTuesdayInput(storedTuesdayInput || '');
          setWednesdayInput(storedWednesdayInput || '');
          setThursdayInput(storedThursdayInput || '');
          setFridayInput(storedFridayInput || '');
          setSaturdayInput(storedSaturdayInput || '');
          setSundayInput(storedSundayInput || '');
        } catch (error) {
          console.log('error', error);
        }
      };

      loadWorkoutInputs();
    }, []);


    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>Workout Schedules</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.roundedButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Save</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedButton2} onPress={handleReset}>
                <Text style={styles.buttonText}>Reset</Text>
              </TouchableOpacity>
            </View>
            <Calendar
              onDayPress={day => {
                setSelected(day.dateString);
              }}
              // onDayPress={handleDayPress}
              markedDates={{
                [selected]: {selected: true, disableTouchEvent: true},
                  '2023-11-06': { marked: true, dotColor: 'red' },
                  '2023-11-15': { marked: true, dotColor: 'green' },
                  '2023-11-19': { marked: true, dotColor: 'blue' },
                  '2023-11-24': { marked: true},
              }}
              />
      
              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Monday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe push?'
                  value={mondayInput}
                  onChangeText={text => setMondayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Tuesday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe pull?'
                  value={tuesdayInput}
                  onChangeText={text => setTuesdayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Wednesday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe legs?'
                  value={wednesdayInput}
                  onChangeText={text => setWednesdayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Thursday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe cardio?'
                  value={thursdayInput}
                  onChangeText={text => setThursdayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Friday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe rest?'
                  value={fridayInput}
                  onChangeText={text => setFridayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Saturday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe core?'
                  value={saturdayInput}
                  onChangeText={text => setSaturdayInput(text)}
                />
              </View>

              <View style={styles.dayContainer}>
                <Text style={styles.subHeader}>Sunday: </Text>
                <TextInput
                  style={{ ...styles.textInput, padding: 0 }}
                  placeholder='Enter a Workout....maybe sleep?'
                  value={sundayInput}
                  onChangeText={text => setSundayInput(text)}
                />
              </View>
          </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'normal',
      backgroundColor: '#ACB6E5',
      paddingHorizontal: 8,
      paddingVertical: 20,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#3344FF',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 2,
      marginBottom: 6,
    },
    textInput: {
      fontSize: 16,
      borderBottomWidth: 1,
      borderBottomColor: 'black',
      flex: 1,
      paddingVertical: 4,
    },
    subHeader: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      marginRight: 8,
    },
    dayContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    roundedButton: {
      backgroundColor: '#3344FF',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    roundedButton2: {
      backgroundColor: '#FF0000',
      borderRadius: 25,
      paddingVertical: 10,
      paddingHorizontal: 15,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
    },
});

export default Schedules;