'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, View } from 'react-native'; // npm: react-native library.
import { createStackNavigator, createDrawerNavigator } from "react-navigation"; // npm: react-native navigation library.


/*
COMPONENT'S
 */
import { ButtonIcon, ButtonLink } from '../../components/Button';
import Glyph from '../../components/Glyph';
import WebView, { TargetUri } from '../../components/WebView';

/*
DRAWER.
 */
import Drawer from '../Drawer';


/*
PAGE'S.
 */
import Home from '../../Pages/Home';
import History from '../../Pages/History';
import Support from '../../Pages/Support';
import CheatCode from '../../Pages/PromoCode/';
import Payment from '../../Pages/Payment/';
import PaymentCards from '../../Pages/Payment/Pages/Cards';
import PaymentAddCard from '../../Pages/Payment/Pages/AddCard';
import Notification from '../../Pages/Notification';
import Profile from '../../Pages/Profile';


/*
GLOBAL'S.
 */
let _HomeStackNavigator, _HistoryStackNavigator, _ProfileStackNavigator, _PoliciesStackNavigator, _PaymentStackNavigator, _KnowYourTransportationStackNavigator,
    _CheatCodeStackNavigator, _AboutStackNavigator, _SupportStackNavigator, _NotificationStackNavigator


/*
OBJECT'S.
 */
{
  // error handling [Home]
  try {
    // create stack navigator.
    _HomeStackNavigator = createStackNavigator({ Home: { screen: Home } }, { headerMode: 'none' });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [Profile]
  try {
    // create stack navigator.
    _ProfileStackNavigator = createStackNavigator({
      Profile: {
        screen: Profile,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120 }}
                  text={'Profile'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      },
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [History]
  try {
    // create stack navigator.
    _HistoryStackNavigator = createStackNavigator({
      History: {
        screen: History,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120 }}
                  text={'History'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      }
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [Payment]
  try {
    // create stack navigator.
    _PaymentStackNavigator = createStackNavigator({
      Payment: {
        screen: Payment,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120, marginLeft: 10 }}
                  text={'Payment Methods'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      },
      Cards: {
        screen: PaymentCards,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120 }}
                  text={'Cards'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      },
      AddCard: {
        screen: PaymentAddCard,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120, marginLeft: 10 }}
                  text={'Add Card'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      },
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [KnowTransportation]
  try {
    // update targetUri
    TargetUri('https://www.truck.pe')

    // create stack navigator.
    _KnowYourTransportationStackNavigator = createStackNavigator({
      KnowYourTransport: {
        screen: WebView,
        navigationOptions: ({ navigation }) => ({
          headerRight: (<View style={{ marginRight: 10 }}>
            <ButtonLink
                button={{ backgroundColor: '#f1effd', minWidth: 100, justifyContent: 'center', height: 'auto' }}
                text={'Web view'}
                size={15}
                textStyle={{ fontSize: 15, paddingTop: 2.5, color: '#8454ff' }}
                color={'#8454ff'}
                glyph='web'
                onClick={() => navigation.openDrawer()}
            />
          </View>),
          headerLeft: (
              <View style={{ marginLeft: 10 }}>
                <ButtonLink
                    button={{ backgroundColor: 'transparent', minWidth: 120 }}
                    text={'Truck.pe ?'}
                    textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                    glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                    glyph='chevron-left'
                    onClick={() => navigation.openDrawer()}
                />
              </View>
          )
        }),
      }
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [About]
  try {
    // update targetUri
    TargetUri('https://www.rootandleaves.com')

    // create stack navigator.
    _AboutStackNavigator = createStackNavigator({
      About: {
        screen: WebView,
        navigationOptions: ({ navigation }) => ({
          headerRight: (<View style={{ marginRight: 10 }}>
            <ButtonLink
                button={{ backgroundColor: '#f1effd', minWidth: 100, justifyContent: 'center', height: 'auto' }}
                text={'Web view'}
                size={15}
                textStyle={{ fontSize: 15, paddingTop: 2.5, color: '#8454ff' }}
                color={'#8454ff'}
                glyph='web'
                onClick={() => navigation.openDrawer()}
            />
          </View>),
          headerLeft: (
              <View style={{ marginLeft: 10 }}>
                <ButtonLink
                    button={{ backgroundColor: 'transparent', minWidth: 120 }}
                    text={'About us'}
                    textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                    glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                    glyph='chevron-left'
                    onClick={() => navigation.openDrawer()}
                />
              </View>
          )
        }),
      }
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [PromoCode]
  try {
    // create stack navigator.
    _CheatCodeStackNavigator = createStackNavigator({
      PromoCode: {
        screen: CheatCode,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120, marginLeft: 10 }}
                  text={'Promo Code'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      },
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [Support]
  try {
    // create stack navigator.
    _SupportStackNavigator = createStackNavigator({
      OnlineSupport: {
        screen: Support,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120 }}
                  text={'Support'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      }
    });

  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [Policies]
  try {
    // update targetUri
    TargetUri('https://www.google.com')

    // create stack navigator.
    _PoliciesStackNavigator = createStackNavigator({
      OnlineSupport: {
        screen: WebView,
        navigationOptions: ({ navigation }) => ({
          headerRight: (<View style={{ marginRight: 10 }}>
            <ButtonLink
                button={{ backgroundColor: '#f1effd', minWidth: 100, justifyContent: 'center', height: 'auto' }}
                text={'Web view'}
                size={15}
                textStyle={{ fontSize: 15, paddingTop: 2.5, color: '#8454ff' }}
                color={'#8454ff'}
                glyph='web'
                onClick={() => navigation.openDrawer()}
            />
          </View>),
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120 }}
                  text={'Policies'}
                  textStyle={{ fontSize: 19, paddingTop: 5, paddingLeft: 10 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      }
    });
  } catch (error) {
    // report failure.
    throw error
  }


  // error handling [Notification]
  try {
    // create stack navigator.
    _NotificationStackNavigator = createStackNavigator({
      OnlineSupport: {
        screen: Notification,
        navigationOptions: ({ navigation }) => ({
          headerRight: (<View style={{ marginRight: 10 }}>
            <ButtonLink
                button={{ backgroundColor: '#f1effd', minWidth: 160, justifyContent: 'center', height: 'auto' }}
                text={'Driverkinaukri.com'}
                size={15}
                textStyle={{ fontSize: 15, paddingTop: 2.5, color: '#8454ff' }}
                color={'#8454ff'}
                glyph='web'
                onClick={() => navigation.openDrawer()}
            />
          </View>),
          headerLeft: (
              <ButtonLink
                  button={{ backgroundColor: 'transparent', minWidth: 120, marginLeft: 10 }}
                  text={'Notification'}
                  textStyle={{ fontSize: 19, paddingTop: 5 }}
                  glyphStyle={{ fontSize: 21, color: '#FF416C' }}
                  glyph='chevron-left'
                  onClick={() => navigation.openDrawer()}
              />
          )
        }),
      }
    });
  } catch (error) {
    // report failure.
    throw error
  }
}


/*
EXPORT'S.
 */
export const AppDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: _HomeStackNavigator,
      navigationOptions: {
        drawerLabel: "Home",
        drawerIcon: ({ tintColor }) => (
            <Glyph style={[styles.icon]} glyph='home' />
        )
      }
    },
    Notification: {
      screen: _NotificationStackNavigator,
      navigationOptions: {
        drawerLabel: "Notification",
        drawerIcon: ({ tintColor }) => (
            <Glyph style={[ styles.icon, { color: tintColor } ]} glyph='notification' />
        )
      }
    },
    History: {
      screen: _HistoryStackNavigator,
      navigationOptions: {
        drawerLabel: "Transportation History",
        drawerIcon: ({ tintColor }) => (
          <Glyph style={[styles.icon]} glyph='history' />
        )
      }
    },
    KnowYourTransportation: {
      screen: _KnowYourTransportationStackNavigator,
      navigationOptions: {
        drawerLabel: "Know your transportation",
        drawerIcon: ({ tintColor }) => (
          <Glyph style={[styles.icon, { color: tintColor }]} glyph='information' />
        )
      }
    },
    Payment: {
      screen: _PaymentStackNavigator,
      navigationOptions: {
        drawerLabel: "Payment Method",
        drawerIcon: ({ tintColor }) => (
            <Glyph style={[ styles.icon, { color: tintColor } ]} glyph='money' />
        )
      }
    },
    ReferAndEarn: {
      screen: _CheatCodeStackNavigator,
      navigationOptions: {
        drawerLabel: "Refer and Earn",
        drawerIcon: ({ tintColor }) => (
          <Glyph style={[styles.icon, { color: tintColor }]} glyph='gift' />
        )
      }
    },
    About: {
      screen: _AboutStackNavigator,
      navigationOptions: {
        drawerLabel: "About",
        drawerIcon: ({ tintColor }) => (
          <Glyph style={[styles.icon, { color: tintColor }]} glyph='organization' />
        )
      }
    },
    Policy: {
      screen: _PoliciesStackNavigator,
      navigationOptions: {
        drawerLabel: "Policies",
        drawerIcon: ({ tintColor }) => (
          <Glyph style={[ styles.icon, { color: tintColor } ]} glyph='pen' />
        )
      }
    },
    OnlineSupport: {
      screen: _SupportStackNavigator,
      navigationOptions: {
        drawerLabel: "Support",
        drawerIcon: ({ tintColor }) => (
            <Glyph style={[ styles.icon, { color: tintColor } ]} glyph='support' />
        )
      }
    },
    Profile: {
      screen: _ProfileStackNavigator,
      navigationOptions: {
        drawerLabel: "Profile",
        drawerIcon: ({ tintColor }) => (
            <Glyph style={[ styles.icon, { color: tintColor } ]} glyph='Profile' />
        )
      }
    },
  }, 
  {
    headerMode: 'none',
    contentComponent: Drawer,
    contentOptions: {
      activeTintColor: '#8454ff',
      activeBackgroundColor: '#f8f8f8',
      inactiveTintColor: '#202020',
      iconContainerStyle: {
        opacity: 1,
      },
    },
  }
);


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  icon: {
    fontSize: 17,
  }
});