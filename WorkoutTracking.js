import React, { useState, useEffect } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Calendar } from 'react-native-calendars';
import AsyncStorage from '@react-native-async-storage/async-storage';


const WorkoutTracking = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [selected, setSelected] = useState('');
    const [workoutData, setWorkoutData] = useState({});
    const [newWorkout, setNewWorkout] = useState({
      time: '',
      exercise: '',
      calories: '',
    });
    const [isAddingNewWorkout, setIsAddingNewWorkout] = useState(false);

    useEffect(() => {
      loadWorkoutData();
    }, []);

    useEffect(() => {
      saveWorkoutData();
    }, [workoutData]);

    const loadWorkoutData = async () => {
      try {
        const storedData = await AsyncStorage.getItem('workoutData');
        if (storedData) {
          setWorkoutData(JSON.parse(storedData));
        }
      } catch (error) {
        console.error('error', error);
      }
    };

    const saveWorkoutData = async () => {
      try {
        await AsyncStorage.setItem('workoutData', JSON.stringify(workoutData));
      } catch (error) {
        console.error('error', error);
      }
    };

    const handleAdd = () => {
      setWorkoutData((prevWorkoutData) => ({
        ...prevWorkoutData,
        [selected]: [...(prevWorkoutData[selected] || []), newWorkout],
      }));

      setNewWorkout({
        time: '',
        exercise: '',
        calories: '',
      });
      setIsAddingNewWorkout(false);
    };

    const handleCancel = () => {
      setIsAddingNewWorkout(false);
    };

    const handleNewPress = () => {
      setIsAddingNewWorkout(true);
    };

    const handleDelete = () => {
      setWorkoutData((prevWorkoutData) => {
        if (selected && prevWorkoutData[selected] && prevWorkoutData[selected].length > 0) {
          const updatedWorkouts = prevWorkoutData[selected].filter((workout, index) => index !== 0);
    
          if (updatedWorkouts.length === 0) {
            const { [selected]: deletedDay, ...remainingDays } = prevWorkoutData;
            return remainingDays;
          }
    
          return {
            ...prevWorkoutData,
            [selected]: updatedWorkouts,
          };
        }
        return prevWorkoutData;
      });
    };

    const renderDeleteButton = () => {
      if (selected && workoutData[selected] && workoutData[selected].length > 0) {
        return (
          <TouchableOpacity style={styles.roundedButton2} onPress={handleDelete}>
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
        );
      }
      return null;
    };

    const renderItem = (item) => {
      return (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>Time: {item.time}</Text>
          <Text style={styles.itemText}>Exercise: {item.exercise}</Text>
          <Text style={styles.itemText}>Calories: {item.calories}</Text>
        </View>
      );
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
        <Text style={styles.title}>Workout Tracking</Text>
        <View style={styles.buttonContainer}>
          {!isAddingNewWorkout && (
            <TouchableOpacity style={styles.roundedButton} onPress={handleNewPress}>
              <Text style={styles.buttonText}>New</Text>
            </TouchableOpacity>
          )}
          {isAddingNewWorkout && (
            <>
              <TouchableOpacity style={styles.roundedButton} onPress={handleAdd}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.roundedButton} onPress={handleCancel}>
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </>
          )}
          {renderDeleteButton()}
        </View>
        <View style={styles.calendarContainer}>
          <Calendar
            onDayPress={(day) => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [selected]: { selected: true, disableTouchEvent: true },
            }}
          />
          {selected && workoutData[selected] && (
            <View style={styles.selectedDayContainer}>
              <Text style={styles.selectedDayTitle}>{selected}:</Text>
              {workoutData[selected].map((item, index) => (
                <TouchableOpacity key={index} style={styles.itemTouchable}>
                  {renderItem(item)}
                </TouchableOpacity>
              ))}
            </View>
          )}
          {isAddingNewWorkout && (
            <>
              <View style={styles.addWorkoutContainer}>

                <Text style={styles.addWorkoutTitle}>Enter Workout Details:</Text>
                <TextInput
                  style={styles.textInput}
                  placeholder='Time'
                  value={newWorkout.time}
                  onChangeText={(text) => setNewWorkout((prev) => ({...prev, time: text }))}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='Exercise'
                  value={newWorkout.exercise}
                  onChangeText={(text) => setNewWorkout((prev) => ({...prev, exercise: text }))}
                />
                <TextInput
                  style={styles.textInput}
                  placeholder='Calories'
                  value={newWorkout.calories}
                  onChangeText={(text) => setNewWorkout((prev) => ({...prev, calories: text }))}
                />
              </View>
            </>
          )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'normal',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 8,
    paddingVertical: 25,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
    fontFamily: 'Bitter-Black',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    marginBottom: 9,
  },
  textInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    flex: 1,
    paddingVertical: 4,
  },
  dayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarContainer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  selectedDayContainer: {
    marginTop: 10,
    paddingHorizontal: 16,
  },
  selectedDayTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  itemTouchable: {
    marginBottom: 14,
  },
  itemContainer: {
    backgroundColor: '#d7d7d7',
    padding: 16,
    borderRadius: 8,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 4,
    color: 'black',
  },
  addWorkoutContainer: {
    marginTop: 2,
    paddingHorizontal: 16,
    backgroundColor: '#f5f5f5',
    borderRadius: 8,
    padding: 16,
  },
  addWorkoutTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Bitter-Black',
  },
  textInput: {
    fontSize: 15,
    borderBottomWidth: 1,
    borderBottomColor: 'black',
    paddingVertical: 8,
    color: 'black',
    fontFamily: 'Bitter-Black',
  },
  boldFont: {
    color: 'blue',
    //fontFamily: 'RobotoMono-Bold',
    //fontFamily: 'PlaypenSans-Bold',
    fontFamily: 'Bitter-Black',
    fontSize: 24,
    fontWeight: 'bold',
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

export default WorkoutTracking;