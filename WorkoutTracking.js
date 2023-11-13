import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView, ScrollView } from 'react-native';

const WorkoutTracking = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
      <SafeAreaView>
          <ScrollView>
            <Text style={styles.title}>Workout Tracking</Text>
              <Button title="Edit" />
              <Button title="Add" />
              {/* Have Edit and Add buttons side by side using flexDirection */}
              <Text></Text>
              {/* similar to tasks from threedo */}
              <Text>Recents:</Text>
              <Text>date: 11 11 2023</Text>
              <Text>Time: ___________________</Text>
              <Text>Exercise: ______________</Text>
              <Text>Calories: _______________</Text>
              <Text></Text>
              <Text>Recents:</Text>
              <Text>date: 11 08 2023</Text>
              <Text>Time: ___________________</Text>
              <Text>Exercise: _______________</Text>
              <Text>Calories: _______________</Text>
              <Text></Text>
              <Text>Recents:</Text>
              <Text>date: 11/05/2023</Text>
              <Text>Time: ___________________</Text>
              <Text>Exercise: _______________</Text>
              <Text>Calories: _______________</Text>
              <Text></Text>
          </ScrollView>
        </SafeAreaView>
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
      marginTop: 10,
      marginBottom: 10,
      color: '#3344FF',
    },
    header: {
      fontSize: 23,
      marginBottom: 20,
      fontWeight: 'bold',
      color: 'black',
    },
    buttonContainer: {
      marginVertical: 10,
    },
    buttonWrapper: {
      marginVertical: 5,
    },
    touchableView: {
      width: 300,
      height: 300,
      backgroundColor: '#AEEEEE',
      marginBottom: 20,
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 5,
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    label: {
        fontSize: 16,
    },
    textInput: {
        fontSize: 16,
    },
  });

export default WorkoutTracking;