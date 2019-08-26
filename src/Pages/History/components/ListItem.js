'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";  // npm: react-native library.
import { TouchableNativeFeedback } from "react-native-gesture-handler"; // npm: react-native gesture handler.
import MapView, { Marker } from "react-native-maps"; // npm: google map's library.


/*
COMPONENT'S.
 */
import { ButtonLink, ButtonDark, ButtonIcon } from "../../../components/Button";
import Glyph from "../../../components/Glyph";


/*
GLOBAL'S.
 */
let source, destination

// variable assignment.
source = {
  latlng: {
    latitude: 37.80820,
    longitude: -122.4324,
  }
}
destination = {
  latlng: {
    latitude: 37.76825,
    longitude: -122.4020,
  }
}


/*
EXPORT'S.
 */
export function CurrentTripItem(props) {
  return (
    <View flex={1} style={styles.container}>
      <View flex={1}>
        <View style={[styles.mapContainer]}>
          <MapView
              style={{ flex: 1, borderRadius: 5 }}
              liteMode={true}
              customMapStyle={[
                {
                  "featureType": "administrative",
                  "elementType": "all",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    }
                  ]
                },
                {
                  "featureType": "landscape",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#fcfcfc"
                    }
                  ]
                },
                {
                  "featureType": "poi",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#fcfcfc"
                    }
                  ]
                },
                {
                  "featureType": "road.highway",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#dddddd"
                    }
                  ]
                },
                {
                  "featureType": "road.arterial",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#dddddd"
                    }
                  ]
                },
                {
                  "featureType": "road.local",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#eeeeee"
                    }
                  ]
                },
                {
                  "featureType": "water",
                  "elementType": "geometry",
                  "stylers": [
                    {
                      "visibility": "simplified"
                    },
                    {
                      "color": "#dddddd"
                    }
                  ]
                }
              ]}
              initialRegion={{ latitude: 37.78825, longitude: -122.432, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} >
            <Marker coordinate={source.latlng} pinColor='#FFD300' />
            <Marker coordinate={destination.latlng} />
          </MapView>
        </View>
        <View >
          <View style={[styles.containerInfo, { borderColor: '#8454ff', borderWidth: 1, borderRadius: 5 }]} flexDirection={'column'}>
            <View style={styles.howMuchEarned}>
              <ButtonDark text={'500 \u20B9'} button={[ styles.normalizeButton, { paddingLeft: 5, paddingRight: 5, backgroundColor: '#319c4d' } ]} textStyle={{ marginLeft: 0, fontSize: 15 }}/>
            </View>
            <View flexDirection={'row'} justifyContent={'space-between'}>
              <View style={styles.truckDetails} flex={1} flexDirection={'column'}>
                <View style={{ marginBottom: 5 }}>
                  <ButtonLink glyph={'truck-check'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} textStyle={{ color: '#8454ff', fontSize: 13, paddingTop: 2.5 }} text={'HR-47A-0709 ( TATA 407 )'} />
                </View>
                <View flexDirection={'row'}>
                  <Image style={styles.driverProfilePicture} source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }} />
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ color: '#202020', fontSize: 13 }}>Driver : Ram Kumar</Text>
                    <View style={{ marginTop: 5 }} flexDirection={'row'} alignItems={'center'}>
                      <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent' }]} glyph={'ios-star'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                      <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 5 }]} glyph={'ios-star'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                      <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 5 }]} glyph={'ios-star-half'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.transportDetails} flex={1} flexDirection={'column'}>
                <View style={{ marginBottom: 5, marginLeft: 5 }}>
                  <ButtonLink glyph={'truck-fast'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} textStyle={{ color: '#8454ff', fontSize: 13, paddingTop: 5, paddingLeft: 5 }} text={'Neemrana to Gurgoan'} />
                </View>
                <View flexDirection={'row'}>
                  <Image style={styles.driverProfilePicture} source={require('../../../../assets/illustrations/illustration_one.png')} />
                  <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 13 }}>Heromoto Corp</Text>
                    <ButtonLink glyph={'money'} button={[ styles.normalizeButton, { 'justifyContent': 'flex-start', marginTop: 5 } ]} color={'#FF416C'} textStyle={{ color: '#FF416C', fontSize: 11, fontFamily: 'Poppins-Bold' }} size={11} text={'Cash'}/>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
export function OldTripItem(props) {
  return (
    <TouchableNativeFeedback
      onPress={props.onClick}
    >
      <View flex={1} style={styles.container}>
        <View style={[styles.containerWrapper]}>
          <View style={[styles.mapContainer]}>
            <MapView
                style={{ flex: 1, borderRadius: 5 }}
                liteMode={true}
                customMapStyle={[
                  {
                    "featureType": "administrative",
                    "elementType": "all",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      }
                    ]
                  },
                  {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#fcfcfc"
                      }
                    ]
                  },
                  {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#fcfcfc"
                      }
                    ]
                  },
                  {
                    "featureType": "road.highway",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#dddddd"
                      }
                    ]
                  },
                  {
                    "featureType": "road.arterial",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#dddddd"
                      }
                    ]
                  },
                  {
                    "featureType": "road.local",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#eeeeee"
                      }
                    ]
                  },
                  {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                      {
                        "visibility": "simplified"
                      },
                      {
                        "color": "#dddddd"
                      }
                    ]
                  }
                ]}
                initialRegion={{ latitude: 37.78825, longitude: -122.432, latitudeDelta: 0.0922, longitudeDelta: 0.0421 }} >
              <Marker coordinate={source.latlng} pinColor='#FFD300' />
              <Marker coordinate={destination.latlng} />
            </MapView>
          </View>
          <View style={styles.containerInfo}>
            <View style={{ borderColor: '#8454ff', borderWidth: 1, borderRadius: 5 }} flexDirection={'column'}>
              <View flexDirection={'row'} justifyContent={'space-between'}>
                <View style={styles.truckDetails} flex={1} flexDirection={'column'}>
                  <View style={{ marginBottom: 5 }}>
                    <ButtonLink glyph={'truck-check'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} textStyle={{ color: '#8454ff', fontSize: 13, paddingTop: 2.5 }} text={'HR-47A-0709 ( TATA 407 )'} />
                  </View>
                  <View flexDirection={'row'}>
                    <Image style={styles.driverProfilePicture} source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }} />
                    <View style={{ paddingLeft: 10 }}>
                      <Text style={{ color: '#202020', fontSize: 13 }}>Driver : Ram Kumar</Text>
                      <View style={{ marginTop: 5 }} flexDirection={'row'} alignItems={'center'}>
                        <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent' }]} glyph={'ios-star'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                        <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 5 }]} glyph={'ios-star'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                        <ButtonIcon roundButton={[styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 5 }]} glyph={'ios-star-half'} glyphStyle={{ fontSize: 11 }} library={'ioniIcons'} color={'#FF416C'}/>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.transportDetails} flex={1} flexDirection={'column'}>
                  <View style={{ marginBottom: 5, marginLeft: 5 }}>
                    <ButtonLink glyph={'truck-fast'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} textStyle={{ color: '#8454ff', fontSize: 13, paddingTop: 5, paddingLeft: 5 }} text={'Neemrana to Gurgoan'} />
                  </View>
                  <View flexDirection={'row'}>
                    <Image style={styles.driverProfilePicture} source={require('../../../../assets/illustrations/illustration_one.png')} />
                    <View style={{ paddingLeft: 10 }}>
                      <Text style={{ fontSize: 13 }}>Heromoto Corp</Text>
                      <ButtonLink glyph={'money'} button={[ styles.normalizeButton, { 'justifyContent': 'flex-start', marginTop: 5 } ]} color={'#FF416C'} textStyle={{ color: '#FF416C', fontSize: 11, fontFamily: 'Poppins-Bold' }} size={11} text={'Cash'}/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: Dimensions.get('window').width,
    padding: 20
  },
  normalizeButton: {
    height: 'auto',
    width: 'auto'
  },
  mapContainer: {
    minHeight: 340,
    borderRadius: 5,
    overflow: 'hidden'
  },
  driverProfilePicture: {
    height: 35,
    width: 35,
    borderRadius: 100
  },
  truckDetails: {
    padding: 10,
  },
  transportDetails: {
    padding: 10
  },
  containerInfo: {
    marginTop: 10,
    backgroundColor: '#f1effd',
    shadowColor: '#202020',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.19,
    elevation: 2
  },
  howMuchEarned: {
    position: 'absolute',
    right: -1,
    top: -12.5
  }
});