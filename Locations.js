import React, { useState } from 'react';
import AppContext from './AppContext';

import { StyleSheet, View, Button, Text, SafeAreaView, TextInput, Keyboard, TouchableOpacity } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';

const Locations = ({ route, navigation }) => {
    const context = React.useContext(AppContext);

    const [zipCode, setZipCode] = useState('');
    const [markers, setMarkers] = useState([]);
    const [region, setRegion] = useState({
      latitude: 33.8823,
      longitude: -117.921410,
      latitudeDelta: 0.05,
      longitudeDelta: 0.05,
    });
    const apiKey = 'API_KEY';

    const handleFindGyms = async () => {
      try {
        const response = await fetch(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=gym+in+${zipCode}&key=${apiKey}`);
        const data = await response.json();

        if (data.results) {
          const gymLocations = data.results.map((result) => ({
            id: result.place_id,
            name: result.name,
            latitude: result.geometry.location.lat,
            longitude: result.geometry.location.lng,
            address: result.formatted_address,
          }));
          setMarkers(gymLocations);

          if (gymLocations.length > 0) {
            setRegion({
              latitude: gymLocations[0].latitude,
              longitude: gymLocations[0].longitude,
              latitudeDelta: 0.05,
              longitudeDelta: 0.05,
            });
          }
        }
      } catch (error) {
        console.error('error fetching gym locations:', error);
      } finally {
        Keyboard.dismiss();
      }
    };

    const handleRegionChange = (newRegion) => {
      setRegion(newRegion);
    };


    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Gym Locations</Text>
        <View style={styles.inputContainer}>
          <View style={styles.zipCodeContainer}>
            <Text style={styles.label}>Enter Zip Code:</Text>
            <TextInput
              style={styles.textInput}
              placeholder='99999'
              value={zipCode}
              onChangeText={(text) => setZipCode(text)}
              keyboardType='numeric'
            />
          </View>
          <TouchableOpacity style={styles.roundedButton} onPress={handleFindGyms}>
            <Text style={styles.buttonText}>Find Gyms</Text>
          </TouchableOpacity>
        </View>
        <MapView
          style={{ flex: 1 }}
          region={region}
          onRegionChangeComplete={handleRegionChange}
        >
          {markers.map((marker) => (
            <Marker 
              key={marker.id}
              coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
              title={marker.name}
            >
              <Callout style={styles.calloutContainer}>
                <View>
                  <Text style={styles.calloutTitle}>{marker.name}</Text>
                  <Text style={styles.calloutAddress}>{marker.address}</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'normal',
    backgroundColor: '#ACB6E5',
    paddingHorizontal: 8,
    paddingVertical: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
    color: '#3344FF',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  zipCodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  textInput: {
    fontSize: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 12,
    padding: 5,
    marginLeft: 5,
    width: 108,
  },
  roundedButton: {
    backgroundColor: '#3344FF',
    borderRadius: 25,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  calloutContainer: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  calloutTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  calloutAddress: {
    fontSize: 14,
    color: 'black',
  },
});

export default Locations;