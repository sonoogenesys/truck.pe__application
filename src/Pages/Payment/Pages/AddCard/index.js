'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library
import {
  View,
  Text,
  Image,
  Platform,
  KeyboardAvoidingView,
  StyleSheet
} from "react-native"; // npm: react-native library.
import { ScrollView, TouchableNativeFeedback, TextInput  } from "react-native-gesture-handler"; // npm: react-native gesture handler.


/*
COMPONENT'S.
 */
import Glyph from "../../../../components/Glyph";
import {ButtonDark, ButtonIcon} from "../../../../components/Button";
import Logo from '../../../../components/Logo'


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  // properties.
  state = {
    cardNumber: "",
    expMonth: "",
    expYear: "",
    cvv: "",
    cardHolderName: "",
  };


  /*
  HELPER'S.
   */
  saveCard = () => {
    try {
      if (
        this.state.cardNumber === "" ||
        this.state.expMonth === "" ||
        this.state.expYear === "" ||
        this.state.cvv === "" ||
        this.state.cardHolderName === ""
      ) {
        alert("All fields are required");
      }
    } catch (error) {
      console.log("Error in save card: " + error);
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
        <ScrollView
          style={{ flex: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.layout}>
            <View style={styles.scanCardContainer} alignItems={'center'}>
              <Logo />
              <ButtonDark glyph={'cc-visa'} glyphStyle={{ paddingLeft: 10 }} color={'#8454ff'} text={'Credit Card'} size={25} textStyle={{ color: '#8454ff', paddingTop: 5, fontSize: 23, paddingLeft: 10, paddingRight: 10, marginLeft: 0 }} button={[styles.normalizeButton, { backgroundColor: '#f1effd', marginTop: 10, marginBottom: 10,     shadowColor: '#e6e6e6',
                shadowOffset: { width: 0, height: 3 },
                shadowOpacity: 0.19,
                elevation: 2, }]}/>
              <Text style={{marginTop: 10, marginBottom: 10, }} numberOfLines={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed massa ligula. Cras bibendum luctus nibh, in vestibulum dolor convallis a. Sed ut accumsan ante. </Text>
            </View>
            <View style={styles.form} >
              <View style={styles.cardNumberContainer} >
                <Text style={styles.labelText} >Card Number</Text>
                <View style={styles.inputContainer} >
                  <TextInput
                    style={styles.inputText}
                    placeholder={'XXXX-XXXX-XXXX-XXXX'}
                    placeholderTextColor={'#8454ff'}
                    onChangeText={(text) => this.setState({ cardNumber: text })}
                    keyboardType='numeric'
                  />
                </View>
              </View>
              <View style={styles.expDateCvvContainer} >
                <View style={styles.expirationDateContainer} >
                  <Text style={styles.labelText} >Expiration Date</Text>
                  <View style={styles.monthYearContainer} >
                    <View style={styles.numContainer} >
                      <TextInput
                        style={[styles.inputText, { color: '#fff'}]}
                        placeholder={'XX'}
                        placeholderTextColor={'#fff'}
                        onChangeText={(text) => this.setState({ expMonth: text })}
                        keyboardType='numeric'
                      />
                    </View>
                    <View style={styles.numContainer} >
                      <TextInput
                          style={[styles.inputText, { color: '#fff'}]}
                          placeholder={'XX'}
                          placeholderTextColor={'#fff'}
                        onChangeText={(text) => this.setState({ expYear: text })}
                        keyboardType='numeric'
                      />
                    </View>
                  </View>
                </View>
                <View style={styles.cvvContainer} >
                  <Text style={styles.labelText} >CVV / CVC <Glyph name='AntDesign|questioncircle' /></Text>
                  <View style={styles.numContainer} >
                    <TextInput
                        style={[styles.inputText, { color: '#fff' }]}
                        placeholder={'XXX'}
                        placeholderTextColor={'#fff'}
                      onChangeText={(text) => this.setState({ cvv: text })}
                      keyboardType='numeric'
                    />

                  </View>
                </View>
              </View>
              <View style={styles.cardHolderNameContainer} >
                <Text style={styles.labelText} >Card Holder Name</Text>
                <View style={styles.inputContainer} >
                  <TextInput
                    style={styles.inputText}
                    placeholder={'Ram Bahrose'}
                    placeholderTextColor={'#8454ff'}
                    onChangeText={(text) => this.setState({ cardHolderName: text })}
                    keyboardType='default'
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View style={{ width: '100%', padding: 20 }} flexDirection={'row'} justifyContent={'flex-end'} alignItems={'center'}>
          <ButtonDark
              text={'Save'}
              textStyle={{ color: '#8454ff' }}
              button={[ styles.normalizeButton, { height: 25, 'backgroundColor': '#f1effd', borderWidth: 1, borderColor: '#8454ff', paddingLeft: 10, paddingRight: 10, marginRight: 10 }]}
          />
          <ButtonIcon
              glyph={'save'}
              glyphStyle={{ 'color': '#fff', fontSize: 15 }}
              roundButton={styles.saveCard}
          />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  layout: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalizeButton: {
    width: 'auto',
    height: 'auto'
  },
  scanCardContainer: {
    width: '90%',
    padding: 20,
    borderRadius: 5,
  },
  scanCardBtn: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scanCardIcon: { 
    fontSize: 32
  },
  form: {
    flex: 1,
  },
  cardNumberContainer: {
    width: '100%',
  },
  labelText: {
    fontSize: 12,
    fontFamily: 'Poppins-Bold',
    marginBottom: 2
  },
  inputContainer: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    marginBottom: 15,
    backgroundColor: '#f1effd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#8454ff',
  },
  inputText: {
    flex: 1,
    fontSize: 15,
  },
  expDateCvvContainer: { 
    flexDirection: 'row', 
    alignContent: 'center', 
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  numContainer: {
    width: 75,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 15,
    borderRadius: 5,
    backgroundColor: '#8454ff',
  },
  monthYearContainer: { 
    width: 160, 
    flexDirection: 'row', 
    justifyContent: 'space-between' 
  },
  saveCard: {
    width: 40,
    height: 40,
    backgroundColor: '#8454ff',
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    elevation: 2,
  },
});