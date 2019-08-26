'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library
import { View, Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native"; // npm: react-native library.
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // npm: react-native google maps library.
import Geolocation from 'react-native-geolocation-service'; // npm: geolocation library
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box"; // npm: android location services.
import CalendarPicker from 'react-native-calendar-picker'; // npm: calendar library.
import SlidingUpPanel from 'rn-sliding-up-panel'; // npm: react-native slide up panel.


/*
COMPONENT'S.
 */
import { EditText } from "../../components/EditText";
import {ButtonDark, ButtonIcon, ButtonLight, ButtonLink} from "../../components/Button";
import Glyph from "../../components/Glyph";


/*
GLOBAL'S.
 */
const { width, height } = Dimensions.get('window');


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  // properties.
  state = {
    mapRegion: null,
    hasLocationPermissions: false,
    locationResult: null,
    ride: { 'default': true },
      driver: { 'accepted': false, 'dropOff': false, 'completed': false }
  };

  /*
  OBJECT: HOOK'S.
   */
  async componentDidMount () {
    // error handling.
    try {
      // get user location.
      await this.GetLocationAsync();
    } catch (error) {
      // report failure.
      return { error }
    }
  }

  /*
  OBJECT: HELPER'S.
   */
  showChatDetails = () => this.props.navigation.navigate('Chat');
  getDrivers = () => this.setState({ isDriverReady: true,  isLoading: false, });
  switchServiceType = () => this.setState({ rideType: {} })

  /*
  OBJECT: GEO LOCATOR.
   */
  GetLocationAsync = async () => {
    try {
      // local variable.
      let _getGeoLocation

      // variable assignment.
      _getGeoLocation = await LocationServicesDialogBox.checkLocationServicesIsEnabled({
        message: "<h2>Use Location ?</h2>\
          This app wants to change your device settings:<br/><br/>\
          Use GPS, Wi-Fi, and cell network for location<br/><br/>",
        ok: "YES",
        cancel: "NO",
        enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
        showDialog: true, // false => Opens the Location access page directly
        openLocationServices: true, // false => Directly catch method is called if location services are turned off
        preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
        preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
        providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
      }).then(async (response) => {
        // on successful response.
        if (response.enabled) {

        }
      }).catch((error) => {
        // update state.
        this.setState({ locationResult: "Permission to access location was denied" });

        // report failure.
        return { error }
      });

      // if geolocation caught exception
      // than report failure.
      if (_.propertyOf(_getGeoLocation)('error')) return _getGeoLocation

      // on successful geolocation fetch
      // update state's with permission's
      // other data.
      if (!_.isEmpty(_getGeoLocation) && !_.propertyOf(_getGeoLocation)('response') && _getGeoLocation.response.enabled) {
        // set permission's.
        this.setState({ hasLocationPermissions: true });

        // update user geolocation.
        await Geolocation.getCurrentPosition(
            (position) => {
              // update position's to map.
              this.setState({
                locationResult: position,
                mapRegion: {
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421
                }
              });
            },
            (error) => console.log(error.code, error.message),
            { enableHighAccuracy: true, timeout: 20000 }
        );
      }
      // return _geolocation.
      return _getGeoLocation
    } catch (error) {
      // report failure.
      return { error }
    }
  };


  /*
  OBJECT: RENDER
   */
  render() {
      // local variable.
      let _selectTransportationMedium, _locationPicker, _acceptRide, _userContactDetails, _driverRewards, _dropOff, _pickupButton, _acceptRideButton, _dropOffButton, _confirmRide, _driverContactDetails

      // variable assignment.
      _acceptRideButton = (<ButtonLink onClick={() => this.setState({ driver: { 'accepted': true }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#8454ff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Accept Transportation`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'truck-delivery'} color={'#fff'} size={17}/>)
      _pickupButton = (<ButtonLink onClick={() => this.setState({ driver: { 'accepted': true, 'pickup': true }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#8454ff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Pickup`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'truck-trailer'} color={'#fff'} size={17}/>)
      _dropOffButton = (<ButtonLink onClick={() => this.setState({ driver: { 'accepted': false }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#8454ff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Complete Transportation`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'check'} color={'#fff'} size={17}/>)
      _locationPicker = (<View flex={1} flexDirection={'column'} style={{ position: 'relative' }}>
          <View style={styles.captureMyLocation} flexDirection={'row'}>
              <ButtonIcon glyph={'my-location'} glyphStyle={{ 'color': '#fff', 'fontSize': 27 }} roundButton={styles.captureMyLocationButton}/>
          </View>
          { this.state.notification ? <ButtonLink glyph={'fire'} color={'#fff'} button={styles.rideOptionsNotificationText} textStyle={{ color: '#fff', fontFamily: 'Poppins-Bold', marginTop: 2.5, fontSize: 13 }} text={'Enjoy music, radio, videos on the go.'}/> : null }
          <View style={styles.rideBookingContainer} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
              <EditText onClick={() => this._panel.show(280)} inputStyle={styles.whereToInput} style={{ paddingLeft: 10, backgroundColor: '#f1effd' }} hintText={'Where to ?'} glyph={'map-marker-circle'} placeholderTextColor={'#8454ff'} color={'#8454ff'} size={21}/>
              <View style={{ position: 'absolute', right: 25, top: 10 }}>
                  <ButtonDark button={{ backgroundColor: 'transparent' }} glyph={'calendar'} color={'#8454ff'} library={'antDesign'}/>
              </View>
          </View>
          <ScrollView flex={1} flexDirection={'column'} style={{ padding: 10, backgroundColor: '#fafafa' }}>
              <View style={[styles.emergencyButton]} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 35, height: 35, backgroundColor: '#8454ff' }} glyph={'Safety'} color={'#fff'} />
                  <View style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Emergency'} textStyle={{ color: '#fff', fontFamily: 'Poppins-Regular', fontSize: 19, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left', color: '#fff' }}>Slide to call for emergency</Text>
                  </View>
              </View>
              <View style={{ padding: 10, paddingTop: 20, paddingBottom: 20, paddingRight: 15, borderBottomWidth: 1, borderColor: '#e6e6e6' }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'star'} library={'antDesign'} color={'#FF416C'}/>
                  <View flex={1} style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Quick Transportation'} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>24 Saved Transportation</Text>
                  </View>
                  <ButtonIcon glyph={'chevron-right'} roundButton={{ backgroundColor: 'transparent', width: 25, height: 25 }} color={'#8454ff'}/>
              </View>
              <View style={{ padding: 10, marginTop: 15 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'map-marker-radius'} library={'materialCommunityIcons'} color={'#727272'}/>
                  <View style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink onClick={() => this.setState({ ride: { transportMedium: true } })} button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Alpine Convent School'} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>Unnamed Road, Vikas Nagar, Sector 10, Gurugram, Haryana</Text>
                  </View>
              </View>
              <View style={{ padding: 10, marginTop: 15, marginBottom: 30 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'map-marker-radius'} library={'materialCommunityIcons'} color={'#727272'}/>
                  <View style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Alpine Convent School'} textStyle={{ fontFamily: 'Poppins-Regular', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>Unnamed Road, Vikas Nagar, Sector 10, Gurugram, Haryana</Text>
                  </View>
              </View>
          </ScrollView>
          <View style={{ padding: 20, paddingBottom: 5, backgroundColor: '#fafafa' }} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
              <ButtonLink glyph={'infocirlce'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { padding: 2.5, paddingLeft: 5, paddingRight: 5, backgroundColor: '#f1effd', marginBottom: 5, justifyContent: 'center'  }]} text={'Only enter pickup location if you failed to Pin location on map  '} textStyle={{ fontSize: 12.5, fontFamily: 'Poppins-Bold', paddingTop: 2.5, color: '#8454ff' }}/>
          </View>
          <View style={[styles.pickupLocationInput, { padding: 20, marginBottom: 5 }]} flexDirection={'row'} alignItems={'center'}>
              <EditText inputStyle={[styles.whereToInput, { fontSize: 16 }]} style={[{  height: 50, backgroundColor: '#fff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2 }]} placeholderTextColor={'#FF416C'} hintText={'Enter Pickup location'} glyph={'map-marker-circle'} color={'#FF416C'} size={21}/>
          </View>
      </View>)
      _driverRewards = (<View flexDirection={'column'}>
          <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Rewards'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff', marginLeft: 0 }}/>
          <View flexDirection={'row'} style={{ marginTop: 5 }} alignItems={'center'}>
              <ButtonLink glyph={'time-slot'} color={'#da3e31'} size={16} button={[ styles.normalizeButton, { backgroundColor: 'transparent' } ]} textStyle={{ marginLeft: 0 }}/>
              <ButtonLink glyph={'gas-cylinder'} color={'#e8ae28'} size={17} button={[ styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 10 } ]} textStyle={{ marginLeft: 0 }}/>
              <ButtonLink glyph={'ticket'} color={'#319c4d'} size={16} button={[ styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 10 } ]} textStyle={{ marginLeft: 0 }}/>
              <ButtonLink glyph={'star'} color={'#3c7be2'} library={'antDesign'} size={17} button={[ styles.normalizeButton, { backgroundColor: 'transparent', marginLeft: 10 } ]} textStyle={{ marginLeft: 0 }}/>
          </View>
      </View>)
      _userContactDetails = (<View flex={0.7} flexDirection={'column'}>
          <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Contact User'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff', marginLeft: 0 }}/>
          <View flexDirection={'column'} style={{ marginTop: 5 }} alignItems={'center'}>
              <ButtonLink glyph={'user'} library={'antDesign'} color={'#fff'} size={13} text={'User Profile'} button={[ styles.normalizeButton, { width: '100%', backgroundColor: '#8454ff' } ]} textStyle={{ paddingTop: 2.5, fontSize: 15, color: '#fff', paddingLeft: 5, paddingRight: 5 }}/>
              <ButtonLink glyph={'phone'} color={'#8454ff'} size={15} library={'materialCommunityIcons'} text={'Call User'} button={[ styles.normalizeButton, { width: '100%', backgroundColor: '#f1effd', borderWidth: 1, borderTopWidth: 0, borderColor: '#8454ff' } ]} textStyle={{ paddingTop: 2.5, fontSize: 15, color: '#8454ff', paddingLeft: 5, paddingRight: 5 }}/>
          </View>
      </View>)
      _confirmRide = (<View flex={1} flexDirection={'column'} style={{ position: 'relative' }}>
          <View flexDirection={'column'}>
              <ButtonLink button={[styles.rideOptionsNotificationText, { justifyContent: 'center', backgroundColor: '#f1effd' }]} textStyle={{ color: '#8454ff', fontFamily: 'Poppins-Bold', fontSize: 13 }} text={'Accept ride or ride will be decline automatically'}/>
          </View>
          <View flex={1} flexDirection={'column'} style={{ padding: 10, backgroundColor: '#fafafa' }}>
              <View flexDirection={'row'} justifyContent={'space-between'}>
                  <View flexDirection={'column'}>
                      <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Heromoto corp'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
                      <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'From Neemrana to Haridwar'} textStyle={{ fontSize: 13, fontFamily: 'Poppins-Bold', marginLeft: 10, color: '#FF416C', paddingTop: 0 }}/>
                  </View>
                  <View style={{ paddingRight: 10 }} flexDirection={'column'} alignItems={'flex-end'} justifyContent={'space-around'}>
                      <ButtonLink glyph={'save'} library={'antDesign'} button={[ styles.normalizeButton, { justifyContent: 'flex-start', backgroundColor: '#f1effd', paddingLeft: 5, paddingRight: 5 } ]} text={`Save`} color={'#FF416C'} textStyle={{ fontSize: 13, paddingTop: 2.5, color: '#FF416C' }}/>
                      <ButtonLink glyph={'gift'} button={[ styles.normalizeButton, { justifyContent: 'flex-start', backgroundColor: '#f1effd', paddingLeft: 5, paddingRight: 5 } ]} text={`Reward`} color={'#8454ff'} textStyle={{ fontSize: 13, paddingTop: 2.5, color: '#8454ff' }}/>
                  </View>
              </View>
              <View style={{ padding: 10, marginTop: 10 }} flexDirection={'row'}>
                  <Image style={{ width: 55, height: 55, borderRadius: 100, alignSelf: 'center' }} source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}/>
                  <View flex={0.8} style={{ marginLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Truck Detail'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff' }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start', marginTop: 5 } ]} text={`Body : Open 16ft`} textStyle={{ fontSize: 13 }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={`Weight Capacity : 7 ton`} textStyle={{ fontSize: 13 }}/>
                  </View>
                  <View flex={0.8} style={{ marginLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Trip Fare'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff' }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start', marginTop: 5 } ]} text={`Estimated Price : 500 \u20B9`} textStyle={{ fontSize: 13 }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={`Total Distance : 200 Km`} textStyle={{ fontSize: 13 }}/>
                  </View>
              </View>
              <View style={{ padding: 10, paddingTop: 20 }} flexDirection={'column'} alignItems={'flex-start'}>
                  <ButtonLink onClick={() => this.setState({ ride: { 'startTransportation': true }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#8454ff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Confirm Transportation`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'check'} color={'#fff'} size={17}/>
              </View>
          </View>
      </View>)
      _driverContactDetails = (<View flex={1} flexDirection={'column'} style={{ position: 'relative' }}>
          <View flexDirection={'column'}>
              <ButtonLink button={[styles.rideOptionsNotificationText, { justifyContent: 'center', backgroundColor: '#f1effd' }]} textStyle={{ color: '#8454ff', fontFamily: 'Poppins-Bold', fontSize: 13 }} text={'Only click Start Transportation when truck is loaded'}/>
          </View>
          <View flex={1} flexDirection={'column'} style={{ padding: 10, backgroundColor: '#fafafa' }}>
              <View flexDirection={'row'} justifyContent={'space-between'}>
                  <View flexDirection={'column'}>
                      <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Nitesh Yadav'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
                      <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'HR-47A-0219  ( TATA 407 )'} textStyle={{ fontSize: 13, fontFamily: 'Poppins-Bold', marginLeft: 10, color: '#FF416C', paddingTop: 0 }}/>
                  </View>
              </View>
              <View style={{ padding: 10, marginTop: 10 }} flexDirection={'row'}>
                  <Image style={{ width: 55, height: 55, borderRadius: 100, alignSelf: 'center' }} source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}/>
                  <View flex={0.8} style={{ marginLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Driver Detail'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff' }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start', marginTop: 5 } ]} text={`Rate : 5 Star`} textStyle={{ fontSize: 13 }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={`Review : 121 Comments`} textStyle={{ fontSize: 13 }}/>
                  </View>
                  <View flex={0.8} style={{ marginLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Trip Fare'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff' }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start', marginTop: 5 } ]} text={`Estimated Price : 500 \u20B9`} textStyle={{ fontSize: 13 }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={`Total Distance : 200 Km`} textStyle={{ fontSize: 13 }}/>
                  </View>
              </View>
              <View style={{ padding: 10, paddingTop: 20 }} flexDirection={'column'} alignItems={'flex-start'}>
                  <ButtonLink onClick={() => this.setState({ driver: { 'accepted': false }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#FF416C', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Start Transportation`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'truck-fast'} color={'#fff'} size={17}/>
              </View>
          </View>
      </View>)
      _dropOff = (<View flexDirection={'column'}>
          <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Contact User'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff', marginLeft: 0 }}/>
          <View flexDirection={'row'} style={{ marginTop: 5 }}>
              <ButtonLink glyph={'user'} library={'antDesign'} color={'#8454ff'} size={17} button={[ { width: 35, height: 35, borderColor: '#8454ff', backgroundColor: '#f1effd', borderWidth: 1 } ]} textStyle={{ marginLeft: 0 }}/>
              <ButtonLink glyph={'phone'} color={'#fff'} size={17} library={'materialCommunityIcons'} button={[ { width: 35, height: 35, backgroundColor: '#FF416C', marginLeft: 5 } ]} textStyle={{ marginLeft: 0 }}/>
              <ButtonLink glyph={'message1'} library={'antDesign'} color={'#fff'} size={17} button={[ { width: 35, height: 35, backgroundColor: '#8454ff', marginLeft: 5 } ]} textStyle={{ marginLeft: 0 }}/>
          </View>
      </View>)
      _acceptRide = (<View flex={1} flexDirection={'column'} style={{ position: 'relative' }}>
          <View flexDirection={'column'}>
              <ButtonLink button={[styles.rideOptionsNotificationText, { justifyContent: 'center', backgroundColor: '#f1effd' }]} textStyle={{ color: '#8454ff', fontFamily: 'Poppins-Bold', fontSize: 13 }} text={'Accept ride or ride will be decline automatically'}/>
          </View>
          <View flex={1} flexDirection={'column'} style={{ padding: 10, backgroundColor: '#fafafa' }}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Heromoto corp'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'From Neemrana to Haridwar'} textStyle={{ fontSize: 13, fontFamily: 'Poppins-Bold', marginLeft: 10, color: '#FF416C', paddingTop: 0 }}/>
              <View style={{ padding: 10, marginTop: 10 }} flexDirection={'row'}>
                  <Image style={{ width: 55, height: 55, borderRadius: 100, alignSelf: 'center' }} source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}/>
                  <View flex={0.8} style={{ marginLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Trip Fare'} textStyle={{ fontSize: 15, fontFamily: 'Poppins-Bold', color: '#8454ff' }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start', marginTop: 5 } ]} text={`Estimated Price : 500 \u20B9`} textStyle={{ fontSize: 13 }}/>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={`Total Distance : 200 Km`} textStyle={{ fontSize: 13 }}/>
                  </View>
                  {
                      this.state.driver.accepted ? _userContactDetails : _driverRewards
                  }
              </View>
              <View style={{ padding: 10, paddingTop: 20 }} flexDirection={'column'} alignItems={'flex-start'}>
                  { !this.state.driver.accepted ? _acceptRideButton : this.state.driver.accepted && this.state.driver.pickup ? _dropOffButton : _pickupButton}
              </View>
          </View>
      </View>)
      _selectTransportationMedium = (<View flex={1} flexDirection={'column'} style={{ position: 'relative' }}>
          <View flexDirection={'column'}>
              <ButtonLink button={[styles.rideOptionsNotificationText, { justifyContent: 'center', backgroundColor: '#f1effd' }]} textStyle={{ color: '#8454ff', fontFamily: 'OpenSans-ExtraBold', fontSize: 9 }} text={'_______'}/>
              <ButtonLink button={[styles.rideOptionsNotificationText, { justifyContent: 'center', backgroundColor: '#f1effd' }]} textStyle={{ color: '#8454ff', fontFamily: 'Poppins-Bold', fontSize: 13 }} text={'Choose a ride, or swipe up for more'}/>
          </View>
          <ScrollView flex={1} flexDirection={'column'} style={{ padding: 10, backgroundColor: '#fafafa' }}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'For'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
              <View style={{ padding: 10, paddingTop: 20 }} flexDirection={'column'} alignItems={'flex-start'}>
                  <ButtonLink button={[styles.normalizeButton, { padding: 2.5, paddingLeft: 5, paddingRight: 5, backgroundColor: '#f1effd', marginBottom: 5, justifyContent: 'flex-start',  }]} text={'For whom you want to transport for  ( Optional )'} textStyle={{ fontSize: 11, fontFamily: 'Poppins-Bold', marginLeft: 0, color: '#8454ff' }}/>
                  <View flex={1} style={{ position: 'relative' }} flexDirection={'row'} alignItems={'center'} justifyContent={'space-around'}>
                      <View flex={1}>
                          <EditText inputStyle={[styles.whereToInput, { fontSize: 16, alignItems: 'center' }]} style={[{  height: 'auto', backgroundColor: '#f1effd', borderColor: '#8454ff', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2 }]} placeholderTextColor={'#8454ff'} hintText={'Username or Organization name..'} glyph={'user'} library={'antDesign'} color={'#8454ff'} size={21}/>
                          <View style={{ position: 'absolute', right: 15, top: 15 }}>
                              <ButtonLink button={[styles.normalizeButton, { alignItems: 'center' }, { backgroundColor: 'transparent', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2 }]} color={'#8454ff'} glyph={'search1'} size={21} textStyle={{ marginLeft: 0, paddingTop: 2.5 }}/>
                          </View>
                      </View>
                  </View>
              </View>
              <ButtonLink button={[{ justifyContent: 'flex-start' }]} text={'Regular'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
              <View style={{ padding: 10, paddingTop: 20, paddingBottom: 20 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'star'} library={'antDesign'} color={'#FF416C'}/>
                  <View flex={1} style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink onClick={() => this.setState({ ride: { 'transportMedium': true }})} button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Tata 407'} textStyle={{ fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>upto 4 Ton</Text>
                  </View>
                  <ButtonLink button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]} color={'#8454ff'} text={`100 \u20B9 / Km`}/>
              </View>
              <View style={{ padding: 10, paddingTop: 20, paddingBottom: 20, backgroundColor: '#f1effd', borderRadius: 5 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'star'} library={'antDesign'} color={'#FF416C'}/>
                  <View flex={1} style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Tata 709'} textStyle={{ fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>upto 4 Ton</Text>
                  </View>
                  <ButtonLink button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]} color={'#8454ff'} text={`500 \u20B9 / Km`}/>
              </View>
              <ButtonLink button={[{ justifyContent: 'flex-start' }]} text={'Containers'} textStyle={{ fontSize: 21, fontFamily: 'Poppins-Bold', marginLeft: 10 }}/>
              <View style={{ padding: 10, paddingTop: 20, paddingBottom: 20 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonIcon roundButton={{ width: 40, height: 40, backgroundColor: '#f1effd' }} glyph={'star'} library={'antDesign'} color={'#FF416C'}/>
                  <View flex={1} style={{ paddingLeft: 10 }} flexDirection={'column'}>
                      <ButtonLink button={[ styles.normalizeButton, { justifyContent: 'flex-start' } ]} text={'Tata 1106'} textStyle={{ fontFamily: 'Poppins-Bold', fontSize: 17, marginLeft: 0 }}/>
                      <Text style={{ textAlign: 'left' }}>upto 4 Ton</Text>
                  </View>
                  <ButtonLink button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]} color={'#8454ff'} text={`1600 \u20B9 / Km`}/>
              </View>
          </ScrollView>
          <View style={{ padding: 10, paddingBottom: 5, backgroundColor: '#fafafa' }} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
              <ButtonLink glyph={'fire'} size={13} color={'#8454ff'} button={[styles.normalizeButton, { padding: 2.5, paddingLeft: 5, paddingRight: 5, backgroundColor: '#f1effd', marginBottom: 5, justifyContent: 'center'  }]} text={' Duis lacinia eros vitae lorem venenatis, et commodo orci. '} textStyle={{ fontSize: 12.5, fontFamily: 'Poppins-Bold', paddingTop: 2.5, color: '#8454ff' }}/>
          </View>
          <View style={{ padding: 10, paddingBottom: 5 }} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <View flex={0.3} style={styles.pickupLocationInput}>
                  <ButtonLink button={[{  height: 50, marginBottom: 5, backgroundColor: '#fff', borderWidth: 1, borderColor: '#8454ff', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} glyph={'money'} color={'#8454ff'} text={`Cash`} textStyle={{ paddingTop: 2.5, color: '#8454ff' }} onClick={() => this.props.navigation.navigate('Payment')}/>
              </View>
              <View flex={0.9} style={[styles.pickupLocationInput, { paddingLeft: 0 }]} flexDirection={'row'} alignItems={'center'}>
                  <ButtonLink onClick={() => this.setState({ ride: { 'confirm': true }})} button={[{  height: 50, marginBottom: 5, backgroundColor: '#8454ff', borderColor: '#FF416C', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2, margin: 0 }]} text={`Confirm Tata 407`} textStyle={{ paddingTop: 5, color: '#fff' }} glyph={'truck-check'} color={'#fff'} size={21}/>
              </View>
          </View>
      </View>)

    // return layout.
    return (
      <View flex={1}>
        <View style={styles.mapContainer}>
          <MapView
              style={styles.map}
              provider={PROVIDER_GOOGLE}
              initialRegion={{
                latitude: 28.430171533633906,
                longitude: 77.0683821426356,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
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
              ]}>
            <MapView.Marker
                style={{ width: 50, height: 40 }}
                coordinate={{
                    latitude: 28.430171533633906,
                    longitude: 77.0683821426356,
                }}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../../assets/map/userLocationMarket.png')} />
            </MapView.Marker>
            <MapView.Marker
                style={{ width: 50, height: 50, position: 'absolute', zIndex: 10000 }}
                coordinate={{
                    latitude: 28.430571533633906,
                    longitude: 77.0383821426356,
                }}>
              <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }} source={require('../../../assets/trucks/topView/truck.png')} />
            </MapView.Marker>
          </MapView>
        </View>
        <View flex={1} style={{ position: 'relative', justifyContent: 'flex-end' }}>
            <View style={styles.header} flex={1} alignItems={'center'}>
                <View style={[styles.rideType]}>
                    { this.state.ride.default ? <ButtonLink onClick={() => { this.props.navigation.openDrawer() }} glyph={'menu'} size={25} color={'#fff'} button={styles.headerTitle} /> : !this.state.ride.default ? <ButtonLink onClick={() => this.setState({ ride: { default: true, transportMedium: false }})} glyph={'chevron-left'} size={25} color={'#fff'} button={styles.headerTitle} /> : null }
                </View>
                <ButtonIcon glyph={'drivers-license'} size={23} color={'#fff'} roundButton={[{ width: 40, height: 40 }, this.state.ride.driveTruck ? { backgroundColor: '#FF416C' } : { backgroundColor: '#319c4d' } ]} textStyle={{ marginLeft: 0 }} onClick={() => this.setState({ ride: { 'driveTruck': true }})}/>
            </View>
            <SlidingUpPanel ref={c => this._panel = c} friction={0.95} allowMomentum={false} minimumVelocityThreshold={0.55} draggableRange={{ bottom: 250, top: Dimensions.get('window').height - 25 }} containerStyle={{ backgroundColor: '#f8f8f8', zIndex: 1000, minHeight: Dimensions.get('window').height }}>
                { this.state.ride.default ? _locationPicker : this.state.ride['transportMedium'] ? _selectTransportationMedium : this.state.ride['driveTruck'] ? _acceptRide : this.state.ride['confirm'] ? _confirmRide : this.state.ride['startTransportation'] ? _driverContactDetails : null }
            </SlidingUpPanel>
        </View>
      </View>
    );
  }
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  main: {
    flex: 1
  },
    normalizeButton: {
      width: 'auto',
        height: 'auto'
    },
    shadowBox: {
        shadowColor: '#e6e6e6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.19,
        elevation: 2,
    },
    whereToInput: {
      paddingTop: 10,
        fontSize: 17
    },
    rideBookingContainer: {
      backgroundColor: '#fff',
        padding: 10,
        paddingBottom: 7.5,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#e6e6e6',
        position: 'relative'
    },
  headerTitle: {
    height: 40,
    width: 40,
    justifyContent: 'center',
      backgroundColor: '#8454ff',
      borderWidth: 1,
      borderColor: '#8454ff',
      borderRadius: 100,
      paddingLeft: 5,
      shadowColor: '#e6e6e6',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.19,
      elevation: 3
  },
  header: {
      flex: 1,
      maxHeight: 55,
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      justifyContent: 'space-between',
      position: 'absolute',
      width: '100%',
      top: 10
  },
  mapContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  clickProductPhotoButton: {
    width: 50,
    backgroundColor: '#fff',
    height: 50,
    padding: 0,
    marginLeft: 5,
    marginTop: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FF416C',
    borderStyle: 'solid',
  },
  rideOptions: {
    position: 'relative',
    paddingBottom: 0,
    backgroundColor: '#f8f8f8',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e6e6e6',
    borderStyle: 'solid',
  },
  rideOptionsNotificationText: {
    padding: 5,
    height: 'auto',
    borderRadius: 0,
    backgroundColor: '#FF416C',
    color: '#fff',
    justifyContent: 'flex-start',
  },
  captureMyLocation: {
    position: 'absolute',
    top: -60,
    right: 10,
    zIndex: 100
  },
  captureMyLocationButton: {
    width: 45,
    height: 45,
      backgroundColor: '#FF416C',
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    elevation: 2,
  },
  captureMyProductButton: {
    width: 45,
    height: 45,
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    elevation: 2,
    marginRight: 10,
    backgroundColor: '#FF416C',
  },
  rideType: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
    emergencyButton: {
        shadowColor: '#e6e6e6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.19,
        elevation: 2,
        backgroundColor: '#8454ff',
        padding: 10,
        borderRadius: 5
    },
    pickupLocationInput: {
      padding: 10,
        paddingTop: 0,
        paddingBottom: 10
  },
    footer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10
    },
    buttonToOtpVerification: {
        shadowColor: '#e6e6e6',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.19,
        elevation: 2,
    },
    otpChargeMessage: {
        width: 250,
        backgroundColor: '#f1effd',
        height: 'auto',
        borderRadius: 5,
        marginTop: 5,
        paddingTop: 2.5,
        paddingBottom: 2.5
    },
    otpChargeText: {
        fontSize: 13,
        marginTop: 2.5,
        fontFamily: 'Poppins-Bold',
        color: '#FF416C'
    },
});