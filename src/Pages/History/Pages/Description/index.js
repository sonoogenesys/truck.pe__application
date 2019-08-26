import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import MapView, { Marker } from "react-native-maps";

import Glyph from "../../../../components/Glyph";
import { ButtonDark, ButtonIcon } from "../../../../components/Button";

export default class Index extends React.Component  {

  state = {
    isCalling: false,
  }

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

  render() {

    const { navigation } = this.props;
    const tripDetails = navigation.getParam('tripDetails');

    return (
      <View style={styles.container}>
        <ScrollView style={styles.tripDescription} showsVerticalScrollIndicator={false} >
          <View style={styles.layout} >
            <Text style={styles.routeIDText} >
              Route ID: <Text style={{ color: '#171F24' }} >GD345</Text>
            </Text>
            <View style={styles.mapContainer} >
              <MapView
                style={{ flex: 1 }}
                liteMode={true}
                initialRegion={{
                  latitude: 37.78825,
                  longitude: -122.432,
                  latitudeDelta: 0.0922,
                  longitudeDelta: 0.0421,
                }}
              >
                <Marker
                  coordinate={source.latlng}
                  pinColor='#FFD300'
                />

                <Marker
                  coordinate={destination.latlng}
                />
              </MapView>
            </View>
  
            <View style={styles.dataTimeContainer} >
              <Text style={styles.dataText} >
                <Glyph name='calendar' /> {tripDetails.data}
              </Text>
              
              <Text style={styles.timeText} >
                <Glyph name='clock' /> {tripDetails.time}
              </Text>
            </View>
  
            <View style={styles.divider} />
  
            <View style={styles.tripLocationContainer} >
              <View style={styles.iconContainer} >
                <Glyph
                  style={styles.sourceLocationIcon}
                  name='MaterialIcons|navigation'
                />
  
                <Glyph
                  style={styles.destinationLocationIcon}
                  name='FontAwesome|circle-o'
                />
              </View>
              <View style={styles.locationsTextContainer} >
                <Text style={styles.sourceLocationText} >
                  157 Highland str.  ( <Text style={{ color: '#707070' }} >{'Worcester, MA'}</Text> )
                </Text>
  
                <View style={[styles.divider, { marginVertical: 15 }]} />
  
                <Text style={styles.destinationLocationText} >
                  919 Main str.  ( <Text style={{ color: '#707070' }} >{'Worcester, MA'}</Text> )
                </Text>
              </View>
            </View>
  
            <ButtonDark
              btnText="SUPPORT "
              iconName='AntDesign|questioncircle'
              onClick={() => this.props.navigation.navigate('OnlineSupport')}
            />
  
            <View style={styles.tripFareContainer} >
              <Text style={{ fontSize: 12 }} >TRIP FARE</Text>
              <View style={styles.divider} />
              
              <View>
                <View style={styles.payAmountContainer} >
                  <Text style={{ color: '#2F2F2F' }} >Credit card</Text>
                  <Text style={{ color: '#1308FE' }} >$12.30</Text>
                </View>
                <View style={styles.payAmountContainer} >
                  <Text style={{ color: '#2F2F2F' }} >Tip</Text>
                  <Text style={{ color: '#1308FE' }} >$2.00</Text>
                </View>
                <View style={styles.payAmountContainer} >
                  <Text style={{ color: '#2F2F2F' }} >Total paid amount</Text>
                  <Text style={{ color: '#1308FE' }} >$14.30</Text>
                </View>
              </View>
            </View>
  
            <View style={styles.divider} /> 
  
            <View style={styles.driverInfoContainer} >
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'baseline' }} >
                <Image
                  style={styles.driverImage}
                  source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                />

                <Text style={styles.driverNameText} >Sergey Gubelmayer</Text>
              </View>

              <View style={{ flexDirection: 'row' }} >
                <ButtonIcon
                  btnStyle={[
                    styles.contactBtn,
                    { backgroundColor: '#2F2F2F' }
                  ]}
                  iconStyle={styles.contactIcon}
                  iconName='Ionicons|ios-chatbubbles'
                />

                <ButtonIcon
                  btnStyle={[
                    styles.contactBtn,
                    { backgroundColor: this.state.isCalling ? '#FF0000' : '#FFD300' },
                  ]}
                  iconStyle={styles.contactIcon}
                  iconName={this.state.isCalling ? 'MaterialIcons|call-end' : 'MaterialIcons|call'}
                  onClick={() => this.setState({ isCalling: !this.state.isCalling })}
                />
              </View>
            </View>

            <View style={styles.carInfoContainer} >
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }} >
                <View>
                  <Text style={styles.titleText} >Car Model:</Text>
                  <Text style={styles.dataText} >Toyota Prius</Text>
                </View>
                <View>
                  <Text style={[styles.titleText, { textAlign: 'right' }]} >Plate Number:</Text>
                  <Text style={[styles.dataText, { textAlign: 'right' }]} >GL-278-LG</Text>
                </View>
              </View>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }} >
                <View>
                  <Text style={styles.titleText} >Color:</Text>
                  <Text style={styles.dataText} >
                    <Glyph style={{ fontSize: 14, color: '#000' }} name='FontAwesome|circle' /> Black
                  </Text>
                </View>
                <View>
                  <Text style={[styles.titleText, { textAlign: 'right' }]} >Taxi Type:</Text>
                  <Text style={[styles.dataText, { textAlign: 'right' }]} >Economy</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  layout: {
    width: 330,
    backgroundColor: '#fff',

    padding: 15,
    margin: 15,

    borderRadius: 5,
    elevation: 5,
  },
  routeIDText: {
    flex: 1,
    fontSize: 12,
    color: '#606060',
    marginBottom: 5,
  },
  mapContainer: {
    height: 120,
    backgroundColor: '#c1c1c1',

    marginBottom: 10,
  },
  dataTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dataTimeText: {
    color: '#2F2F2F',
  },
  divider: {
    height: 1,
    backgroundColor: '#F1F3F8',
    marginTop: 5,
    marginBottom: 15,
  },
  tripLocationContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 2,
    marginRight: 20,
  },
  sourceLocationIcon: {
    transform: [{ rotate: '180deg' }],
  },
  destinationLocationIcon: {
    color: '#FFD300',
  },
  locationsTextContainer: {
    flexGrow: 1,
  },
  sourceLocationText: {
    color: '#22242A',
  },
  tripFareContainer: {
    marginVertical: 15,
  },
  payAmountContainer: { 
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between',
  },
  driverInfoContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  driverImage: {
    width: 48,
    height: 48,

    borderRadius: 3,
  },
  driverNameText: { 
    width: 80, 
    height: 40, 
    color: '#2F2F2F',
    textAlignVertical: 'bottom',
    marginLeft: 15,
  },
  contactBtn: {
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',

    marginLeft: 5,
    borderRadius: 5,
  },
  contactIcon: {
    fontSize: 24,
    color: '#fff',
  },
  carInfoContainer: {
    marginVertical: 10
  },
  titleText: {
    fontSize: 12,
    color: '#7B7B7B'
  },
  dataText: {
    color: '#2F2F2F'
  }
});