'use strict'

/*
IMPORT'S.
 */
import React from "react"; // npm: react.js library.
import { 
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Image
} from "react-native"; // npm: react-native library.


/*
COMPONENT'S.
 */
import Logo from "../../../../../components/Logo";
import { EditText } from "../../../../../components/EditText";
import { ButtonDark, ButtonLight, ButtonIcon, ButtonLink } from "../../../../../components/Button";
import Glyph from "../../../../../components/Glyph";
import GlyphIcon from "react-native-vector-icons/MaterialCommunityIcons";


/*
EXPORT CLASS.
 */
export default class Index extends React.Component {
  // properties
  state = {
    mobilePhoneNumber: "0000000000",
  }

  /*
  METHOD: SENDCODE
   */
  sendCode = () => {
    try {
      if (this.state.mobilePhoneNumber === "0000000000") {
        alert("Enter mobile number");
      } else {
        // mobile phone number validation
        if (this.state.mobilePhoneNumber.search('^([\+0]91)?\-?[7-9]{1}[0-9]{9}$')) {
          alert("Invalid mobile phone number");
          return;
        }
        
        this.props.navigation.replace('OtpVerification');
      }
    } catch (error) {
      console.log("Error in send code: " + error);
    }
  }

  /*
  METHOD: RENDER
   */
  render() {
    return (
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ScrollView
            contentContainerStyle={{ flexGrow: 1, alignItems: 'center', width: '100%' }}
            showsVerticalScrollIndicator={false}
        >
          <View style={styles.main} >
            <Image style={styles.mainBackground} source={require('../../../../../../assets/illustrations/background2.png')} />
            <View flex={1}>
              <View style={styles.header}>
                <View>
                  <ButtonLink glyph={'chevron-left'} color={'#FF416C'} text={'Back'} onClick={() => this.props.navigation.goBack(null) } textStyle={{ 'fontSize': 23, 'fontFamily': 'Poppins-Bold', 'paddingTop': 5 }} button={styles.headerTitle} />
                  <ButtonLink glyph={'heart'} color={'#8454ff'} library={'antDesign'} size={13} button={styles.headerVersion} text={'Holla, Love to see you '} textStyle={styles.headerTextVersion}/>
                </View>
                <Glyph glyph={'alert-decagram'} size={25} color={'#8454ff'}/>
              </View>
              <View style={styles.loginForm} flex={10}>
                <Text style={styles.loginFormTitle}>Enter your mobile number</Text>
                <EditText
                    image={require('../../../../../../assets/flags/US.png')}
                    inputStyle={{ fontSize: 17 }}
                    style={[{  height: 'auto', paddingTop: 5, paddingBottom: 5, backgroundColor: '#f1effd', borderWidth: 1, borderColor: '#8454ff', alignItems: 'center', shadowColor: '#e6e6e6', shadowOffset: { width: 0, height: 3 }, shadowOpacity: 0.19, elevation: 2 }]}
                    hintText="Mobile Number"
                    placeholderTextColor={'#8454ff'}
                    onChangeText={(text) => this.setState({ mobilePhoneNumber: text })}
                    inputType='number-pad'
                />
              </View>
            </View>
            <View style={styles.footer}>
              <View flex={0.9}>
                <Text>By continuing you may receive n SMS for verification.</Text>
                <ButtonLink glyph={'fire'} size={13} library={'fontAwesome'} button={styles.otpChargeMessage} textStyle={styles.otpChargeText} text={'Message and data rates may apply  '} color={'#FF416C'}/>
              </View>
              <View flex={0.2} flexDirection={'row'} justifyContent={'flex-end'}>
                <ButtonIcon
                    glyph={'chevron-right'}
                    glyphStyle={{ 'color': '#fff' }}
                    onClick={this.sendCode}
                    roundButton={styles.buttonToOtpVerification}
                />
              </View>
            </View>
          </View>
        </ScrollView>
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
    justifyContent: 'center'
  },
  main: {
    flexGrow: 1,
  },
  mainBackground: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: 370,
    height: 350
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
  loginForm: {
    padding: 10
  },
  loginFormTitle: {
    fontSize: 21,
    marginBottom: 10
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
  headerTitle: {
    height: 'auto',
    width: 'auto',
    justifyContent: 'flex-start'
  },
  headerVersion: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#f1effd',
    padding: 2.5,
    paddingLeft: 5,
    color: '#8454ff',
    paddingRight: 5,
    borderRadius: 5
  },
  headerTextVersion: {
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    paddingTop: 2.5,
    color: '#8454ff'
  },
  header: {
    flex: 1,
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 10,
    justifyContent: 'space-between',
  },
});