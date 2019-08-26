'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library
import { 
  View,
  Text,
  StyleSheet,
    Image,
    Dimensions
} from "react-native"; // npm: react-native library.
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler"; // npm: react-native gesture handler.


/*
COMPONENT'S.
 */
import {ButtonDark, ButtonIcon, ButtonLink,} from "../../../../components/Button";
import Glyph from "../../../../components/Glyph";



/*
EXPORT'S.
 */
export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <View style={styles.layout} >
            <TouchableNativeFeedback style={styles.cardItemContainer} >
              <View style={styles.creditCard} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <View style={{ marginLeft: 5 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonLink glyph={'cc-mastercard'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]} size={27}/>
                </View>
                <View flex={1} flexDirection={'column'}>
                  <ButtonLink button={[styles.normalizeButton, { paddingLeft: 5, justifyContent: 'flex-start', paddingRight: 5 }]} text={'Aisha Rathour'} textStyle={{ color: '#8454ff' }} />
                  <ButtonLink button={[styles.normalizeButton, { paddingLeft: 5, justifyContent: 'flex-start', paddingRight: 5 }]} text={'XXX-XXXX-XXX-3234'} />
                </View>
                <ButtonDark text={'Pay'} textStyle={{ color: '#fff', marginLeft: 0 }} button={[ styles.normalizeButton, { paddingLeft: 5, paddingRight: 5 }]} size={31}/>
              </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback style={[styles.cardItemContainer, { marginTop: 10 }]} >
              <View style={styles.creditCard} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
                <View style={{ marginLeft: 5 }} flexDirection={'row'} alignItems={'center'}>
                  <ButtonLink glyph={'cc-visa'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]} size={27}/>
                </View>
                <View flex={1} flexDirection={'column'}>
                  <ButtonLink button={[styles.normalizeButton, { paddingLeft: 5, justifyContent: 'flex-start', paddingRight: 5 }]} text={'Aisha Rathour'} textStyle={{ color: '#8454ff' }}/>
                  <ButtonLink button={[styles.normalizeButton, { paddingLeft: 5, justifyContent: 'flex-start', paddingRight: 5 }]} text={'XXX-XXXX-XXX-3234'} />
                </View>
                <ButtonDark text={'Pay'} textStyle={{ color: '#8454ff', marginLeft: 0 }} button={[ styles.normalizeButton, { paddingLeft: 5, paddingRight: 5, borderWidth: 1, backgroundColor: '#fff', borderColor: '#8454ff' }]} size={31}/>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
        <View style={styles.footer}>
          <View flex={0.9}>
            <Text>Paying by card is safe and convenient.</Text>
            <ButtonLink glyph={'fire'} size={13} library={'fontAwesome'} button={styles.otpChargeMessage} textStyle={styles.otpChargeText} text={'Message and data rates may apply.  '} color={'#FF416C'}/>
          </View>
          <View flex={0.2} flexDirection={'row'} justifyContent={'flex-end'}>
            <ButtonIcon
                glyph={'plus'}
                glyphStyle={{ 'color': '#fff' }}
                onClick={() => this.props.navigation.push('AddCard')}
                roundButton={styles.buttonToOtpVerification}
            />
          </View>
        </View>
      </View>
    );
  }
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  normalizeButton: {
    width: 'auto',
    height: 'auto'
  },
  cardsListContainer: {
    width: '100%',
  },
  cardItemContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    elevation: 2,
  },
  cardInfoContainer: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    borderRadius: 5,
    overflow: 'hidden'
  },
  divider: {
    height: 1, 
    backgroundColor: '#F1F3F8',
    marginVertical: 20,
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
  creditCard: {
    width: '100%',
    padding: 10,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#f1effd',
    borderColor: '#8454ff'
  }
});