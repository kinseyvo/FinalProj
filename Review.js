import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView, ScrollView } from 'react-native';

const Review = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
      <SafeAreaView>
        <ScrollView>
          <Text style={styles.title}>Review</Text>
              <Button title="Add Review" />
              {/* Have Edit and Add buttons side by side using flexDirection */}
              <Text></Text>
              <Text style={styles.header}>Gyms</Text>
              <Text style={styles.header}>Trainers</Text>
              <Text style={styles.header}>Exercises</Text>
              <Text style={styles.header}>Meals</Text>
              <Text style={styles.header}>Improvements?</Text>
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

export default Review;