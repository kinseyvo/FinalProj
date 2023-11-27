import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MCIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FA5 from 'react-native-vector-icons/FontAwesome5';
import FA6 from 'react-native-vector-icons/FontAwesome6';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Review = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [gymsThumbsUpCount, setGymsThumbsUpCount] = useState(0);
    const [gymsThumbsDownCount, setGymsThumbsDownCount] = useState(0);

    const [gym2UpCount, setGym2UpCount] = useState(0);
    const [gym2DownCount, setGym2DownCount] = useState(0);
    const [gym3UpCount, setGym3UpCount] = useState(0);
    const [gym3DownCount, setGym3DownCount] = useState(0);

    const [trainersThumbsUpCount, setTrainersThumbsUpCount] = useState(0);
    const [trainersThumbsDownCount, setTrainersThumbsDownCount] = useState(0);

    const [exercisesThumbsUpCount, setExercisesThumbsUpCount] = useState(0);
    const [exercisesThumbsDownCount, setExercisesThumbsDownCount] = useState(0);

    const [mealThumbsUpCount, setMealThumbsUpCount] = useState(0);
    const [mealThumbsDownCount, setMealThumbsDownCount] = useState(0);


    useEffect(() => {
      loadCountsFromStorage();
    }, []);

    useEffect(() => {
      saveCountsToStorage();
    }, [gymsThumbsUpCount, gymsThumbsDownCount, trainersThumbsUpCount, trainersThumbsDownCount, exercisesThumbsUpCount, exercisesThumbsDownCount, mealThumbsUpCount, mealThumbsDownCount]);


    const loadCountsFromStorage = async () => {
      try {
        const gymsThumbsUp = await AsyncStorage.getItem('gymsThumbsUp');
        const gymsThumbsDown = await AsyncStorage.getItem('gymThumbsDown');
        const trainersThumbsUp = await AsyncStorage.getItem('trainersThumbsUp');
        const trainersThumbsDown = await AsyncStorage.getItem('trainersThumbsDown');
        const exercisesThumbsUp = await AsyncStorage.getItem('exercisesThumbsUp');
        const exercisesThumbsDown = await AsyncStorage.getItem('exercisesThumbsDown');
        const mealThumbsUp = await AsyncStorage.getItem('mealThumbsUp');
        const mealThumbsDown = await AsyncStorage.getItem('mealThumbsDown');

        if (gymsThumbsUp) {
          setGymsThumbsUpCount(Number(gymsThumbsUp));
        } else {
          setGymsThumbsUpCount(0);
        }

        if (gymsThumbsDown) {
          setGymsThumbsDownCount(Number(gymsThumbsDown));
        } else {
          setGymsThumbsDownCount(0);
        }

        if (trainersThumbsUp) {
          setTrainersThumbsUpCount(Number(trainersThumbsUp));
        } else {
          setTrainersThumbsUpCount(0);
        }

        if (trainersThumbsDown) {
          setTrainersThumbsDownCount(Number(trainersThumbsDown));
        } else {
          setTrainersThumbsDownCount(0);
        }

        if (exercisesThumbsUp) {
          setExercisesThumbsUpCount(Number(exercisesThumbsUp));
        } else {
          setExercisesThumbsUpCount(0);
        }

        if (exercisesThumbsDown) {
          setExercisesThumbsDownCount(Number(exercisesThumbsDown));
        } else {
          setExercisesThumbsDownCount(0);
        }

        if (mealThumbsUp) {
          setMealThumbsUpCount(Number(mealThumbsUp));
        } else {
          setMealThumbsUpCount(0);
        }

        if (mealThumbsDown) {
          setMealThumbsDownCount(Number(mealThumbsDown));
        } else {
          setMealThumbsDownCount(0);
        }

      } catch (error) {
        console.error('error', error);
      }
    };

    const saveCountsToStorage = async () => {
      try {
        await AsyncStorage.setItem('gymsThumbsUp', gymsThumbsUpCount.toString());
        await AsyncStorage.setItem('gymThumbsDown', gymsThumbsDownCount.toString());
        await AsyncStorage.setItem('trainersThumbsUp', trainersThumbsUpCount.toString());
        await AsyncStorage.setItem('trainersThumbsDown', trainersThumbsDownCount.toString());
        await AsyncStorage.setItem('exercisesThumbsUp', exercisesThumbsUpCount.toString());
        await AsyncStorage.setItem('exercisesThumbsDown', exercisesThumbsDownCount.toString());
        await AsyncStorage.setItem('mealThumbsUp', mealThumbsUpCount.toString());
        await AsyncStorage.setItem('mealThumbsDown', mealThumbsDownCount.toString());

      } catch (error) {
        console.log('error', error);
      }
    };
    

    const handleUpCount = (section, type) => {
      console.log('handleUpCount pressed');
      if (section === 'gyms') {
        if (type === 'up') {
          setGymsThumbsUpCount(gymsThumbsUpCount + 1);
        } else if (type === 'down') {
          setGymsThumbsDownCount(gymsThumbsDownCount + 1);
        }
      } else if (section === 'trainers') {
        if (type === 'up') {
          setTrainersThumbsUpCount(trainersThumbsUpCount + 1);
        } else if (type === 'down') {
          setTrainersThumbsDownCount(trainersThumbsDownCount + 1);
        }
      } else if (section === 'exercises') {
        if (type === 'up') {
          setExercisesThumbsUpCount(exercisesThumbsUpCount + 1);
        } else if (type === 'down') {
          setExercisesThumbsDownCount(exercisesThumbsDownCount + 1);
        }
      } else if (section === 'meal') {
        if (type === 'up') {
          setMealThumbsUpCount(mealThumbsUpCount + 1);
        } else if (type === 'down') {
          setMealThumbsDownCount(mealThumbsDownCount + 1);
        }
      }
    };

    const handleDownCount = (section, type) => {
      console.log('handleDownCount pressed');
      if (section === 'gyms') {
        if (type === 'up') {
          setGymsThumbsUpCount(gymsThumbsUpCount + 1);
        } else if (type === 'down') {
          setGymsThumbsDownCount(gymsThumbsDownCount + 1);
        }
      } else if (section === 'gym2') {
        if (type === 'up') {
          setGym2UpCount(gym2UpCount + 1);
        } else if (type === 'down') {
          setGym2DownCount(gym2DownCount + 1);
        }
      } else if (section === 'gym3') {
        if (type === 'up') {
          setGym3UpCount(gym3UpCount + 1);
        } else if (type === 'down') {
          setGym3DownCount(gym3DownCount + 1);
        }
      } else if (section === 'trainers') {
        if (type === 'up') {
          setTrainersThumbsUpCount(trainersThumbsUpCount + 1);
        } else if (type === 'down') {
          setTrainersThumbsDownCount(trainersThumbsDownCount + 1);
        }
      } else if (section === 'exercises') {
        if (type === 'up') {
          setExercisesThumbsUpCount(exercisesThumbsUpCount + 1);
        } else if (type === 'down') {
          setExercisesThumbsDownCount(exercisesThumbsDownCount + 1);
        }
      } else if (section === 'meal') {
        if (type === 'up') {
          setMealThumbsUpCount(mealThumbsUpCount + 1);
        } else if (type === 'down') {
          setMealThumbsDownCount(mealThumbsDownCount + 1);
        }
      }
    };

    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Review</Text>
            <MaterialIcons name="rate-review" size={60} color='#DAA520' />
          </View>

          {/* Gym Section */}
          <View style={styles.section}>
            <Text style={styles.header}>Gyms</Text>
            <View style={styles.rowContainer}>
              <MaterialIcons name="fitness-center" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('gyms', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {gymsThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleDownCount('gyms', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {gymsThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <MaterialIcons name="sports-basketball" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('gyms', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {gymsThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleDownCount('gyms', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {gymsThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <MaterialIcons name="stadium" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('gyms', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {gymsThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleDownCount('gyms', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {gymsThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Trainers Section */}
          <View style={styles.section}>
            <Text style={styles.header}>Trainers</Text>
            <View style={styles.rowContainer}>
              <MCIcons name="face-man" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('trainers', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {trainersThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleDownCount('trainers', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {trainersThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <MCIcons name="face-woman" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('trainers', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {trainersThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleDownCount('trainers', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {trainersThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Exercises Section */}
          <View style={styles.section}>
            <Text style={styles.header}>Exercises</Text>
            <View style={styles.rowContainer}>
              <MCIcons name="weight-lifter" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <FA5 name="running" size={60} color='black' />
              <Text>       </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <MaterialIcons name="sports-gymnastics" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('exercises', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {exercisesThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Meal Section */}
          <View style={styles.section}>
            <Text style={styles.header}>Meal</Text>
            <View style={styles.rowContainer}>
              <FA6 name="bowl-food" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {mealThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {mealThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <MaterialIcons name="no-food" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {mealThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {mealThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <FA6 name="kitchen-set" size={60} color='black' />
              <Text>  </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {mealThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {mealThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.rowContainer}>
              <Ionicons name="fast-food" size={60} color='black' />
              <Text>    </Text>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'up')}>
                  <FontAwesome name="thumbs-up" size={30} color='green' />
                  <Text style={styles.buttonNumber}> {mealThumbsUpCount}  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper} onPress={() => handleUpCount('meal', 'down')}>
                  <FontAwesome name="thumbs-down" size={30} color='red' />
                  <Text style={styles.buttonNumber}> {mealThumbsDownCount}</Text>
                </TouchableOpacity>
              </View>
            </View>
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
      backgroundColor: '#FAFAFA',
      paddingHorizontal: 8,
      paddingVertical: 25,
    },
    title: {
      fontSize: 26,
      fontWeight: 'bold',
      marginBottom: 10,
      color: 'blue',
      fontFamily: 'Bitter-Black',
    },
    section: {
      marginBottom: 20,
    },
    header: {
      fontSize: 22,
      marginBottom: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    headerContainer: {
      flexDirection: 'row',
      alignItems: 'normal',
      justifyContent: 'space-between',
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 4,
      marginBottom: 9,
    },
    buttonWrapper: {
      marginVertical: 5,
      flexDirection: 'row',
      alignItems: 'center',
    },
    touchableView: {
      width: 300,
      height: 300,
      backgroundColor: '#AEEEEE',
      marginBottom: 20,
    },
    buttonNumber: {
      marginLeft: 5,
      marginRight: 5,
    },
  });

export default Review;