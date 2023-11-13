import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, ScrollView, SafeAreaView } from 'react-native';

const Exercises = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
        <SafeAreaView>
          <ScrollView style={styles.scrollView}>
            <Text style={styles.title}>Exercises</Text>
            <Text>similar UI to Home Screen!</Text>
            <Text>square tile boxes that redirect to specific exercise pages</Text>
            <Text style={styles.header}>Strength</Text>
            <Text>Bench Press</Text>
            <Text>image</Text>
            <Text>T-Bar</Text>
            <Text>image</Text>
            <Text>Bicep Curls</Text>
            <Text>image</Text>
            <Text>Lateral Pulldown</Text>
            <Text>image</Text>
            <Text></Text>
            <Text style={styles.header}>Core</Text>
            <Text>Pull Ups</Text>
            <Text>image</Text>
            <Text></Text>
            <Text style={styles.header}>Cardio</Text>
            <Text>TREADMILL</Text>
            <Text>image</Text>
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

export default Exercises;