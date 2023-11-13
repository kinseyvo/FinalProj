import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, ScrollView, SafeAreaView } from 'react-native';

const Schedules = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
        <SafeAreaView style={styles.container}>
          <ScrollView>
            <Text style={styles.title}>Workout Schedules</Text>
              <Button title="Edit" />
              <Button title="Add" />
              {/* Have Edit and Add buttons side by side using flexDirection */}
              <Text></Text>
              <Text>react-native-calenders goes here</Text>
              <Text></Text>
              <Text style={styles.subHeader}>Monday: _______</Text>
              <Text style={styles.subHeader}>Tuesday: _______</Text>
              <Text style={styles.subHeader}>Wednesday: _______</Text>
              <Text style={styles.subHeader}>Thursday: _______</Text>
              <Text style={styles.subHeader}>Friday: _______</Text>
              <Text style={styles.subHeader}>Saturday: _______</Text>
              <Text style={styles.subHeader}>Sunday: _______</Text>
              <Text></Text>
              <Text>PUSH, PULL, LEGS, CARDIO, REST goes into the _____________ blanks</Text>
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

export default Schedules;