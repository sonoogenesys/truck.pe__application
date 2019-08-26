'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, View, Platform, KeyboardAvoidingView, ScrollView } from 'react-native'; // npm: react-native library.


/*
COMPONENT'S.
 */
import Logo from '../../components/Logo';
import { ButtonDark, ButtonLink } from '../../components/Button';
import { EditText } from '../../components/EditText'


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  // properties.
  state = {
    promoCode: ""
  }

  /*
  METHOD: HELPER'S.
   */
  activationPromoCode = () => {
    try {
      if (this.state.promoCode === "") {
        alert("Enter Promocode");
      }
    } catch (error) {
      console.log("Error in activation promo code: " + error);
    }
  }


  /*
  OBJECT: RENDER
   */
  render() {
    return (
      <KeyboardAvoidingView
          style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <Logo />
        <Text style={styles.headline} >Promo Code</Text>
        <ButtonLink glyph={'ticket'} color={'#45B649'} text={'Lorem ipsum dolor sit amet'} textStyle={{ paddingTop: 2.5, color: '#45B649', 'paddingLeft': 5 }}/>
        <Text style={styles.headlineDescription}>Fusce venenatis consectetur dui at tempor. Nullam molestie tortor quam, ac viverra augue ultrices sit amet.</Text>
        <Text style={styles.userAccountActivationDiscountCheat}>Bashuka</Text>
        <View style={styles.cheatForm} >
          <Text style={styles.cheatFormLabel}>Enter Code</Text>
          <EditText
              glyph={'ticket'}
              color={'#8454ff'}
              size={19}
              onChangeText={(text) => this.setState({ promoCode: text })}
              placeholderTextColor='#0003'
              hintText={'SDFGTR-90'}
              underlineColorAndroid='transparent'
          />
          <View style={{ marginTop: 20 }} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <ButtonDark
                glyph={'codesquare'}
                color={'#fff'}
                size={17}
                button={styles.activateCheatButton}
                text={"Activation"}
                textStyle={{ color: '#fff', paddingTop: 2.5, fontSize: 15 }}
                onClick={this.activationPromoCode}
            />
            <ButtonDark
                glyph={'share'}
                button={styles.shareCheatButton}
                text={"Share"}
                color={'#8454ff'}
                size={17}
                textStyle={{ color: '#8454ff', paddingTop: 2.5, fontSize: 15 }}
                onClick={this.activationPromoCode}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20
  },
  cheatForm: {
    width: 300,
  },
  cheatFormLabel: {
    fontFamily: 'Poppins-ExtraBold',
    fontSize: 13,
    color: '#8454ff'
  },
  headline: {
    fontSize: 30,
    marginTop: 10
  },
  headlineDescription: {
    fontSize: 17,
    maxWidth: '70%',
    textAlign: 'center'
  },
  userAccountActivationDiscountCheat: {
    fontFamily: 'Poppins-Bold',
    fontSize: 29,
    marginTop: 20,
    marginBottom: 20,
    color: '#FF416C',
    borderRadius: 2.5,
    paddingTop: 5,
    borderColor: '#FF416C',
    borderWidth: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  activateCheatButton: {
    backgroundColor: '#FF416C',
    width: 'auto',
    height: 'auto',
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  },
  shareCheatButton: {
    backgroundColor: '#f1effd',
    width: 'auto',
    height: 'auto',
    paddingLeft: 5,
    paddingRight: 5,
    marginRight: 10
  }
});
