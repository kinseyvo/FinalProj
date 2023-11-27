import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, Text, SafeAreaView, ScrollView, Linking, TouchableWithoutFeedback } from 'react-native';
import Zocial from 'react-native-vector-icons/Zocial';

const About = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const handleLinkPress = () => {
      const url = 'https://github.com/kinseyvo/Gymprentice';
      Linking.openURL(url);
    };
    
    return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.title}>About Page</Text>
        <Text style={styles.header}>Name: Kinsey Vo</Text>
        <Text style={styles.header}>Class: CPSC 411-01</Text>
        <Zocial name="github" size={30} color='black' />
        <Text style={styles.header}>GitHub{' '}
        <TouchableWithoutFeedback onPress={handleLinkPress}>
          <Text style={styles.linkText}>Link!</Text>
        </TouchableWithoutFeedback></Text>
        <Text style={styles.header}>Gymprentice</Text>
        <Text style={styles.subHeader}>For gym rats, new and old. The only hard part of going to the gym is actually going to the gym. Find nearby gyms to workout. You can make your own workout schedule, with ro without personal trainers. Explore different types of strength, core, and cardio exercises. Don’t put off until tomorrow what can be done today!</Text>
        <Text style={styles.header}>Features</Text>
        <Text style={styles.subHeader}>Users can search for nearby gyms.</Text>
        <Text style={styles.subHeader}>Users can make their own workout schedule.</Text>
        <Text style={styles.subHeader}>Users can track their workouts, such as time and exercises.</Text>
        <Text style={styles.subHeader}>Users can browse and learn strength, core, and cardio exercises.</Text>
        <Text style={styles.subHeader}>Users can review gyms, trainers, and workout plans.</Text>
        <Text style={styles.subHeader}>Users can view workout meals and nutrition.</Text>
        <Text style={styles.subHeader}>Users can register to become a gym influencer or personal trainer.</Text>
        <Text style={styles.subHeader}>Users can find a workout buddy.</Text>
        <Text style={styles.subHeader}>Users can upload progress pictures.</Text>
        <Text style={styles.subHeader}>Users can share workout music playlists.</Text>
        <Text style={styles.header}>Users</Text>
        <Text style={styles.subHeader}>Gym Novice</Text>
        <Text style={styles.subSubHeader}> - Users who are new to the gym and don't know where to start.</Text>
        <Text style={styles.subHeader}>Gym Pro</Text>
        <Text style={styles.subSubHeader}> - Users who are already familiar with the gym and want to explore new exercises.</Text>
        <Text style={styles.subHeader}>Personal Trainer</Text>
        <Text style={styles.subSubHeader}> - Users who are personal trainers and know the gym.</Text>
        <Text style={styles.subHeader}>Gym Influencer</Text>
        <Text style={styles.subSubHeader}> - Users who know the gym and are trying to spread awareness about the gym.</Text>
        <Text style={styles.centerTitle}>WE GO GYM</Text>
        <Text style={styles.copyrightText}>Copyright @2023 Kinsey</Text>
      </ScrollView>
    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#3375ff',
  },
  centerTitle: {
    fontSize: 44,
    fontWeight: 'bold',
    marginTop: 10,
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
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default About;