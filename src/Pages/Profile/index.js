'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, View, ScrollView, Platform, KeyboardAvoidingView, TouchableOpacity, SafeAreaView, Image, Dimensions } from 'react-native'; // npm: react-native library.


/*
COMPONENT'S.
 */
import { EditText, PasswordText } from '../../components/EditText';
import { ButtonDark, ButtonIcon, ButtonLink } from '../../components/Button';


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  // private properties
  state = {
    mobilePhoneNumber: "",
    username: "",
    email: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
    password: "",
    confirmPassword: "",
  }


  /*
  HELPER METHOD'S
   */
  save = () => {
    try {
      if (
        this.state.mobilePhoneNumber === "" ||
        this.state.username === "" ||
        this.state.email === "" ||
        this.state.country === "" ||
        this.state.city === "" ||
        this.state.address === "" ||
        this.state.zipCode === "" ||
        this.state.password === "" ||
        this.state.confirmPassword === ""
      ) {
        alert("All fields are required");
      } else {
        // mobile phone number validation
        if (this.state.mobilePhoneNumber.search('^([\+0]91)?\-?[7-9]{1}[0-9]{9}$')) {
          alert("Invalid mobile phone number");
          return;
        }

        // email validation
        if (this.state.email.search("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")) {
          alert("Invalid email address");
          return;
        }

        // check password & confirm password are same or not
        if (this.state.password !== this.state.confirmPassword) {
          alert("Password not match");
          return;
        }
      }

    } catch (error) {
      console.log("Error in save profile: " + error);
    }
  }


  /*
  OBJECT: RENDER
  */
  render() {
    return (
      <SafeAreaView style={styles.container} >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <ScrollView style={{ flex: 1, paddingTop: 30 }} showsVerticalScrollIndicator={false} >
            <View style={styles.headerContainer} >
              <View style={{ paddingLeft: 20, paddingRight: 20 }} flexDirection={'column'} alignItems={'center'}>
                <View flexDirection={'row'} alignItems={'center'}>
                  <Image
                      style={styles.imageBtn}
                      source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
                  />
                </View>
                <View style={{ paddingLeft: 10, marginTop: 10 }} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                  <ButtonDark textStyle={[styles.name, { fontSize: 19, fontFamily: 'Poppins-Bold', color: '#323232', justifyContent: 'center' }]} text={'Nitesh Yadav'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
                  <ButtonDark textStyle={[styles.name, { fontSize: 17, fontFamily: 'Poppins-Bold', justifyContent: 'center' }]} text={'8826668515'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
                </View>
              </View>
            </View>
            <View style={{ padding: 20, marginTop: 10 }} flexDirection={'row'} justifyContent={'space-between'}>
              <View flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <ButtonIcon glyph={'truck-fast'} size={31} color={'#fff'} roundButton={{ width: 55, height: 55, marginBottom: 10 }}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 17, fontFamily: 'Poppins-Bold', color: '#323232' }]} text={'Total Trips'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 15, fontFamily: 'Poppins-Bold' }]} text={'234'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
              </View>
              <View style={{ left: -5 }} flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <ButtonIcon glyph={'star'} size={31} color={'#fff'} library={'antDesign'} roundButton={{ width: 55, height: 55, marginBottom: 10, backgroundColor: '#FF416C' }}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 17, fontFamily: 'Poppins-Bold', color: '#323232' }]} text={'Rating'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 15, fontFamily: 'Poppins-Bold' }]} text={'424'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
              </View>
              <View flexDirection={'column'} alignItems='center' justifyContent={'center'}>
                <ButtonIcon glyph={'pencil'} size={31} color={'#fff'} roundButton={{ width: 55, height: 55, marginBottom: 10 }}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 17, fontFamily: 'Poppins-Bold', color: '#323232' }]} text={'Review'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
                <ButtonDark textStyle={[styles.name, { fontSize: 15, fontFamily: 'Poppins-Bold' }]} text={'3232'} color={'#8454ff'} button={[ styles.normalizeButton, { backgroundColor: 'transparent' }]}/>
              </View>
            </View>
            <View style={styles.form}>
              <View style={{ width: '100%', marginTop: 10, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Full Name'} button={[ styles.normalizeButton, { backgroundColor: '#8454ff', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='user'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Name, Last name"
                onChangeText={(text) => this.setState({ username: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Email'} button={[ styles.normalizeButton, { backgroundColor: '#FF416C', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='mail'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="abc@xyz.com"
                onChangeText={(text) => this.setState({ email: text })}
                inputType='email-address'
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Country'} button={[ styles.normalizeButton, { backgroundColor: '#8454ff', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='map-pin'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Country"
                onChangeText={(text) => this.setState({ country: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'City'} button={[ styles.normalizeButton, { backgroundColor: '#8454ff', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='map-pin'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="City"
                onChangeText={(text) => this.setState({ city: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Permanent Address'} button={[ styles.normalizeButton, { backgroundColor: '#8454ff', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='map-pin'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Address"
                onChangeText={(text) => this.setState({ address: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Zip Code'} button={[ styles.normalizeButton, { backgroundColor: '#8454ff', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <EditText
                glyph='map-pin'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Zip Code"
                onChangeText={(text) => this.setState({ zipCode: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Password'} button={[ styles.normalizeButton, { backgroundColor: '#FF416C', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <PasswordText
                glyph='lock'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Password"
                onChangeText={(text) => this.setState({ password: text })}
              />

              <PasswordText
                glyph='lock'
                style={{ backgroundColor: '#f1effd' }}
                placeholderTextColor={'#8454ff'}
                color={'#8454ff'}
                hintText="Confirm password"
                onChangeText={(text) => this.setState({ confirmPassword: text })}
              />

              <View style={{ width: '100%', marginTop: 20, marginBottom: 10 }} flexDirection={'row'} alignItems='center' justifyContent={'flex-start'}>
                <ButtonLink text={'Truck.pe Registration'} button={[ styles.normalizeButton, { backgroundColor: '#FF416C', justifyContent: 'flex-start' } ]} textStyle={{ marginLeft: 0, paddingTop: 2.5, paddingLeft: 10, paddingRight: 10, color: '#fff' }}/>
              </View>
              <View style={styles.footer}>
                <View flex={0.8}>
                  <Text>By continuing you agree to account.</Text>
                  <ButtonLink glyph={'check'} library={'Octicons'} button={styles.otpChargeMessage} textStyle={styles.otpChargeText} text={'Hooraaaay, Finish your login process  '} color={'#8454ff'}/>
                </View>
                <View flex={0.2} flexDirection={'row'} justifyContent={'flex-end'}>
                  <ButtonIcon
                      glyph={'chevron-right'}
                      glyphStyle={{ 'color': '#fff' }}
                      onClick={this.verifyCode}
                      roundButton={styles.buttonToOtpVerification}
                  />
                </View>
              </View>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
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
    justifyContent: 'center'
  },
  form: {
    width: Dimensions.get('window').width,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#e6e6e6',
    padding: 20,
    paddingBottom: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  normalizeButton: {
    width: 'auto',
    height: 'auto'
  },
  headerContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageBtn: {
    width: 90,
    height: 90,
    margin: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#B7B7B7',
  },
  defImage: {
    fontSize: 80,
    color: '#fff',
  },
  itemIcon: {
    fontSize: 15,
    padding: 10,
    color: '#fff',
    backgroundColor: '#B7B7B7',
    borderRadius: 20,
    borderWidth: 0.5,
    position: 'absolute',
    bottom: 0,
    right: 0, 
  },
  name: {
    fontSize: 20,
    paddingTop: 5,
    marginLeft: 0,
    paddingLeft: 10,
    paddingRight: 10,
    color: '#8454ff'
  },
  email: {
    fontSize: 21,
    paddingTop: 5,
    paddingRight: 10,
    color: '#8454ff'
  },
  footer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  otpChargeMessage: {
    width: 260,
    backgroundColor: '#f1effd',
    height: 'auto',
    borderRadius: 5,
    marginTop: 5,
    paddingTop: 2.5,
    paddingBottom: 2.5
  },
  otpChargeText: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    color: '#8454ff',
    paddingTop: 2.5
  },
});