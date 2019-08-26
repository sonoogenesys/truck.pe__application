'use strict'

/*
IMPORT'S.
 */
import React from "react";
import { 
  View,
  Text,
  Image,
  StyleSheet
} from "react-native";
import { ScrollView, TouchableNativeFeedback } from "react-native-gesture-handler";


/*
COMPONENT'S.
 */
import Glyph from "../../components/Glyph";
import Logo from '../../components/Logo'
import { ButtonLink, ButtonIcon } from "../../components/Button";


/*
EXPORT'S.
 */
export default class Index extends React.Component {
  render() {
    return (
      <View style={styles.container} >
        <ScrollView
          style={{ flex: 1 }} 
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.main}>
            <View style={styles.headerContainer} alignItems={'center'}>
              <Logo />
              <ButtonLink glyph={'add'} textStyle={[styles.headerText, { color: '#8454ff', paddingTop: 2.5 }]} button={[ styles.normalizeButton, { backgroundColor: '#f1effd', paddingLeft: 5, paddingRight: 5, marginTop: 20 }]} color={'#8454ff'} text={'Add Payment Methods You Like'} />
              <Text style={{ textAlign: 'center', fontSize: 17, marginTop: 20, marginBottom: 20 }} numberOfLines={2}>Nulla mattis aliquet mollis. Nam mattis neque vitae lorem ullamcorper, a blandit sapien rhoncus.</Text>
            </View>
            <View style={styles.paymentsOptionsList} >
              <View style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 5 }} >
                <TouchableNativeFeedback
                    style={[styles.paymentOptionsContainer,{ borderColor: '#e6e6e6' }]}
                    background={TouchableNativeFeedback.Ripple('#c1c1c1')}
                    onPress={() => this.props.navigation.goBack('Payment')}
                >
                  <Glyph style={styles.paymentOptionIcon} glyph='money' color={'#8454ff'} />
                  <Text style={styles.paymentOptionText} >Cash</Text>
                  <Glyph style={styles.paymentOptionIcon} glyph='checkbox-marked-circle' color={'#8454ff'} />
                </TouchableNativeFeedback>
              </View>
              <View style={{ marginTop: 20, backgroundColor: '#f1effd', borderRadius: 5 }} >
                <TouchableNativeFeedback 
                  style={styles.paymentOptionsContainer} 
                  background={TouchableNativeFeedback.Ripple('#c1c1c1')}
                  onPress={() => this.props.navigation.navigate('Cards')}
                >
                  <Glyph style={styles.paymentOptionIcon} glyph='cc-visa' color={'#8454ff'} />
                  <Text style={styles.paymentOptionText} >Credit or Debit Card</Text>
                  <Glyph style={styles.paymentOptionIcon} glyph='ios-arrow-forward' color={'#8454ff'} />
                </TouchableNativeFeedback>
              </View>

              <View style={{ marginTop: 20, backgroundColor: '#fff', borderRadius: 5 }} >
                <TouchableNativeFeedback 
                  style={styles.paymentOptionsContainer} 
                  background={TouchableNativeFeedback.Ripple('#c1c1c1')}
                >
                  <Image 
                    style={{ width: 32, height: 32, resizeMode: 'contain' }} 
                    source={{ uri: 'https://lh3.googleusercontent.com/B5cNBA15IxjCT-8UTXEWgiPcGkJ1C07iHKwm2Hbs8xR3PnJvZ0swTag3abdC_Fj5OfnP=s180-rw' }}
                  />
                  <Text style={styles.paymentOptionText} >BHIM</Text>
                  <Glyph style={styles.paymentOptionIcon} name='ios-arrow-forward' />
                </TouchableNativeFeedback>
              </View>
              
              <View style={{ marginTop: 20, backgroundColor: '#8454ff', borderRadius: 5 }} >
                <TouchableNativeFeedback 
                  style={styles.paymentOptionsContainer} 
                  background={TouchableNativeFeedback.Ripple('#c1c1c1')}
                >
                  <Image 
                    style={{ width: 32, height: 32, resizeMode: 'contain' }} 
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/PhonePe.png/100px-PhonePe.png' }}
                  />
                  <Text style={[styles.paymentOptionText, { color: '#fff' }]}>PhonePe</Text>
                  <Glyph style={styles.paymentOptionIcon} name='ios-arrow-forward' />
                </TouchableNativeFeedback>
              </View>
            </View>
          </View>
        </ScrollView>
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
    paddingTop: 30,
  },
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  normalizeButton: {
    width: 'auto',
    height: 'auto'
  },
  shadowBox: {
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.19,
    elevation: 2
  },
  headerContainer: {
    width: '70%',
  },
  headerImage: {
    width: 180,
    height: 165,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 10,
  },
  headerText: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 2.5,
  },
  paymentsOptionsList: {
    width: '90%',
    padding: 10,
  },
  defaultPaymentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultPaymentText: {
    fontSize: 18,
    marginHorizontal: 10,
  },
  defaultPaymentIcon: {
    fontSize: 18,
  },
  paymentOptionsContainer: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#8454ff',
    borderRadius: 3,
  },
  paymentOptionText: {
    fontSize: 15,
    marginLeft: 15,
    flexGrow: 1,
  },
  paymentOptionIcon: {
    width: 32,
    height: 32,

    fontSize: 24,
    textAlign: 'center',
    textAlignVertical: 'center',
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