'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import {StyleSheet, Text, View, Dimensions, TouchableOpacity} from 'react-native'; // npm: react-native library.

/*
GLOBAL'S.
 */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height


/*
COMPONENT'S.
 */
import Logo from '../../components/Logo';
import Illustration from '../../components/Illustration';
import { ButtonLight, ButtonDark } from '../../components/Button';
import Glyph from '../../components/Glyph'


/*
EXPORT'S.
 */
export default function LoginWithSocialAccount(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerTitle}>Welcome, Truck.pe</Text>
          <Text style={styles.headerVersion}>Transportation Turbulence</Text>
        </View>
        <Glyph glyph={'alert-decagram'} size={25} color={'#8454ff'}/>
      </View>
      <View style={styles.illustration}>
        <Illustration />
      </View>
      <View style={styles.sociallogin} >
        <ButtonDark
            glyph={'facebook'}
            glyphStyle={{ 'color': '#fff' }}
            textStyle={{ 'marginTop': 2.5 }}
            button={styles.socialloginButton}
            text="FACE BOOK"
        />
      </View>
      <ButtonLight
          glyph={'mobile'}
          glyphStyle={{ 'color': '#8454ff' }}
          library={'fontAwesome5'}
          button={styles.btnToRegistration}
          text="Enter mobile number"
          textStyle={{ 'color': '#8454ff', 'marginTop': 2.5 }}
          color="#8454ff"
          onClick={() => props.navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#fff',
    position: 'relative'
  },
  headerTitle: {
    color: '#202020',
    fontSize: 19,
    fontFamily: 'Poppins-ExtraBold'
  },
  headerVersion: {
    backgroundColor: '#f1effd',
    color: '#8454ff',
    fontFamily: 'Poppins-Bold',
    fontSize: 13,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 5
  },
  header: {
    flex: 1,
    width: '100%',
    zIndex: 1000,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 20,
    paddingLeft: 10,
    justifyContent: 'space-between',
    position: 'absolute',
    top: 10,
  },
  illustration: {
    flex: 1,
    marginTop: 50,
    right: -50,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  sociallogin: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    paddingTop: 0
  },
  btnToRegistration: {
    backgroundColor: '#f1effd',
    borderStyle: 'solid',
    borderColor: '#E6E6E6',
    color: '#202020',
  },
  socialloginButton: {
    position: 'relative',
    margin: 10,
    marginBottom: 0,
    borderRadius: 5,
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.13,
    elevation: 2,
  }
});
