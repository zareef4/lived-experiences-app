import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {StyleSheet, View, Dimensions} from 'react-native';
import {Icon} from 'native-base';
import MarkerModel from '../model/MarkerModel'
import HeaderBar from "../HeaderBar"

let counter = 0;

function getNext() {
  counter += 1;
  return counter;
}

const markerMocks = [
  new MarkerModel(getNext(), {latitude: 49.263931, longitude: -123.166615},
    "Great place", "", true),
  new MarkerModel(getNext(), {latitude: 49.283024, longitude: -123.098492},
    "Bad place", "", false),
  new MarkerModel(getNext(), {latitude: 49.279068, longitude: -123.128978},
    "I was harassed here", "", false),
  new MarkerModel(getNext(), {latitude: 49.242378, longitude: -123.180193},
    "Safe for all", "", true),
  new MarkerModel(getNext(), {latitude: 49.254405, longitude: -123.060154},
    "", "", true)
];

const initialRegion = {latitude: 49.281914, longitude: -123.121234, latitudeDelta: 0.4, longitudeDelta: 0.4};

export function MapScreen({navigation}) {
  function getMarkers() {
    // TODO replace with call to db
    return markerMocks;
  }

  return (
      <View style={styles.container}>
        <MapView style={styles.mapStyle} initialRegion={initialRegion}>
          {getMarkers().map(marker => (
            <Marker
              key={marker.id}
              coordinate={marker.latlon}
              pinColor={marker.isGoodEvent ? "orange" : "red"}
              title={marker.title}
              description={marker.description}
            />
          ))}
        </MapView>
        <HeaderBar style={{position: "absolute", top: 50}}/>
        <Icon style={{position: "absolute", bottom: 50, fontSize: 60, color: "orange"}}
              name="add-circle"
              type="MaterialIcons"
              onPress={() => navigation.navigate("AddNew")}
        />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export function handleNewPost(title, name, location, story, wasGoodExp) {
  let latlon = null;
  switch(location) {
    case "Vancouver":
      latlon = {latitude: 49.281914, longitude: -123.121234};
      break;
    case "Chinatown":
      latlon = {latitude: 49.280688, longitude: -123.108517};
      break;
    case "Main Street":
      latlon = {latitude: 49.245767, longitude: -123.101282};
      break;
  }
  const marker = new MarkerModel(getNext(), latlon, title, story, wasGoodExp);
  markerMocks.push(marker)
}
