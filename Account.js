import React, { useEffect, useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView, Image, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ImagePicker from 'react-native-image-crop-picker';


const Account = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [userImage, setUserImage] = useState(null);

    const handleSave = async () => {
      console.log("handleSave pressed");
      try {
        await AsyncStorage.setItem('username', context.username);
        await AsyncStorage.setItem('email', context.email);
        await AsyncStorage.setItem('gymName', context.gymName);

        if (userImage) {
          await AsyncStorage.setItem('userImage', userImage);
        }

        console.log("data saved");
      } catch (error) {
        console.error("data save FAILED", error);
      }
    };


    const handleUploadPhoto = async () => {
      try {
        const image = await ImagePicker.openPicker({
          width: 300,
          height: 400,
          cropping: true,
        });

        setUserImage(image.path);
      } catch (error) {
        console.log('error:', error);
      }
    };

    const handleResetImage = () => {
      setUserImage(null);
    };


    useEffect(() => {
      const loadData = async () => {
        try {
          const username = await AsyncStorage.getItem('username');
          const email = await AsyncStorage.getItem('email');
          const gymName = await AsyncStorage.getItem('gymName');
          const storedUserImage = await AsyncStorage.getItem('userImage');

          if (username) {
            context.setUsername(username);
          }
          if (email) {
            context.setEmail(email);
          }
          if (gymName) {
            context.setGymName(gymName);
          }
          if (storedUserImage) {
            setUserImage(storedUserImage);
          }
        } catch (error) {
          console.error("error" , error);
        }
      };

      loadData();
    }, []);
    

    return (
      <SafeAreaView>
        <Text style={styles.title}>Account</Text>
        <Image source={userImage ? {uri: userImage} : require('./assets/image/arnold.jpg')} style={styles.image} />

        <Text style={styles.header}>Name: {context.username}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter New Name"
          value={context.username}
          onChangeText={(text) => context.setUsername(text)}
        />
        <Text style={styles.header}>Email: {context.email}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter New Email"
          value={context.email}
          onChangeText={(text) => context.setEmail(text)}
        />
        <Text style={styles.header}>Gym: {context.gymName}</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter New Gym"
          value={context.gymName}
          onChangeText={(text) => context.setGymName(text)}
        />
        <View style={styles.buttonContainer}>
          <Button title="Save Info" onPress={handleSave}/>
          <Button title="Change Photo" onPress={handleUploadPhoto}/>
          <Button title="Remove Photo" onPress={handleResetImage}/>
        </View>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'normal',
    backgroundColor: '#FAFAFA',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
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
  image: {
    width: 320,
    height: 200,
    marginBottom: 11,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  subHeader: {
    fontSize: 13,
    marginBottom: 5,
    color: 'black',
  },
  subSubHeader: {
    fontSize: 11,
    marginBottom: 5,
    color: 'black',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});

export default Account;