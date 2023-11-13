import 'react-native-gesture-handler';
import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppContext from './AppContext';
import Home from './Home';
import Account from './Account';
import Locations from './Locations';
import Schedules from './Schedules';
import WorkoutTracking from './WorkoutTracking';
import Nutrition from './Nutrition';
import Exercises from './Exercises';
import Review from './Review';
import About from './About';


const Stack = createNativeStackNavigator();

const App = () => {
  const [username, setUsername] = useState('Gym Bro');

  const contextValue = {
    username,
    setUsername,
  };

  return (
    <AppContext.Provider value={contextValue}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} initialParams={username} />
          <Stack.Screen name="Account" component={Account} initialParams={username} />
          <Stack.Screen name="Locations" component={Locations} />
          <Stack.Screen name="Schedules" component={Schedules} />
          <Stack.Screen name="WorkoutTracking" component={WorkoutTracking} />
          <Stack.Screen name="Nutrition" component={Nutrition} />
          <Stack.Screen name="Exercises" component={Exercises} />
          <Stack.Screen name="Review" component={Review} />
          <Stack.Screen name="About" component={About} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
  );
}

export default App;
