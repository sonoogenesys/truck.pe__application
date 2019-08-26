'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library
import { View, Text, StyleSheet } from "react-native"; // npm: react-native library.
import { ScrollView, FlatList } from "react-native-gesture-handler"; // npm: react-native gesture handler.


/*
COMPONENT'S.
 */
import { CurrentTripItem, OldTripItem } from "./components/ListItem";
import {ButtonDark, ButtonLink} from "../../components/Button";
import Logo from '../../components/Logo'

/*
GLOBAL'S.
 */
let tripHistoryList = [
  {
    data: "21 April",
    time: "16:12",
    amountPaid: "$17.00",
  },
  {
    data: "18 March",
    time: "11:23",
    amountPaid: "$7.00",
  },
];

// variable assignment.
tripHistoryList = [
  {
    data: "21 April",
    time: "16:12",
    amountPaid: "$17.00",
  },
  {
    data: "18 March",
    time: "11:23",
    amountPaid: "$7.00",
  },
];


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView  style={styles.historyList} showsVerticalScrollIndicator={false} >
          <View style={styles.header} alignItems={'center'} justifyContent={'center'}>
            <Logo />
            <View style={styles.headline} flexDirection={'row'} alignItems={'center'}>
              <ButtonLink button={{ width: 'auto', height: 'auto' }} size={21} text={'Hist'} textStyle={{ fontSize: 33, paddingTop: 2.5, color: '#8454ff' }}/>
              <ButtonLink button={{ width: 'auto', height: 'auto', backgroundColor: '#f1effd', marginLeft: 5 }} text={'ory'} textStyle={{ fontSize: 33, marginLeft: 0, paddingLeft: 5, paddingRight: 5, paddingTop: 2.5, color: '#8454ff' }}/>
            </View>
            <ButtonLink glyph={'fire'} color={'#8454ff'} button={{ justifyContent: 'center' }} size={19} text={'Fusce venenatis consectetur'} textStyle={{ fontSize: 21, paddingTop: 5 }}/>
            <Text style={styles.headlineDescription} numberOfLines={2}>Vivamus tristique dolor eget orci pulvinar fermentum. Sed ante nisi, euismod quis pharetra sit amet, posuere vel quam.</Text>
            <View style={{ padding: 5, marginTop: 15, marginBottom: 10 }} flexDirection={'row'}>
              <ButtonDark
                  button={{ width: 'auto', height: 'auto', backgroundColor: 'transparent' }}
                  text={'Generate Bill'}
                  glyph={'file-invoice'}
                  size={13}
                  color={'#FF416C'}
                  textStyle={{ 'color': '#FF416C', paddingTop: 2.5, fontSize: 13 }}
                  library={'fontAwesome5'}
              />
              <ButtonDark
                  button={{ marginLeft: 20, paddingLeft: 10, paddingRight: 10, width: 'auto', height: 'auto', backgroundColor: '#f1effd' }}
                  text={'Share Bill'}
                  size={13}
                  color={'#8454ff'}
                  textStyle={{ 'color': '#8454ff', paddingTop: 2.5, fontSize: 13 }}
                  glyph={'share'}
              />
            </View>
          </View>
          {
            // render active trip.
            <CurrentTripItem
                dataTime={"16:14 PM"}
                onClick={() => this.props.navigation.navigate('OnlineSupport')}
            />
          }
          {
            // render trip's flat list
            <FlatList
                data={tripHistoryList}
                keyExtractor={(item, index) => index.toString()}
                renderItem={
                  ({ item }) =>
                      <OldTripItem
                          dataTime={`${item.data}, ${item.time}`}
                          amountPaid={item.amountPaid}
                          onClick={() =>
                              this.props.navigation.navigate(
                                  'TripDescription',
                                  { 'tripDetails': item }
                              )
                          }
                      />
                }
            />
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  historyList: {
    flex: 1
  },
  headline: {
    marginLeft: 5,
    marginRight: 30
  },
  header: {
    paddingTop: 10,
    paddingBottom: 20,
    width: '100%',
    paddingLeft: 5
  },
  headlineDescription: {
    fontFamily: 'OpenSans-Regular',
    fontSize: 17,
    maxWidth: '80%',
    marginLeft: 5,
    textAlign: 'center'
  }
}); 