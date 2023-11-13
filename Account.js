import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView } from 'react-native';

const Account = ({ route, navigation }) => {
    const context = React.useContext(AppContext);


    return (
      <SafeAreaView>
        <Text style={styles.title}>Account</Text>
        <Text>photo goes here....................</Text>
        <Text></Text>
        <Text style={styles.header}>Name: {context.username}</Text>
        <Text style={styles.header}>Email: </Text>
        <Text style={styles.header}>Gym: </Text>
        <Button title="Edit Info"/>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F0F0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3375ff',
  },
  centerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3375ff',
    textAlign: 'center',
  },
  header: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',
    color: 'black',
  },
  subHeader: {
    fontSize: 13,
    marginBottom: 5,
    color: 'black',
  },
  copyrightText : {
    alignSelf: 'center',
    fontSize: 12,
    marginBottom: 10,
  },
  subSubHeader: {
    fontSize: 11,
    marginBottom: 5,
    color: 'black',
  },
});

export default Account;