'use strict'


/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import {StyleSheet, Image, View} from 'react-native'; // npm: react-native library.


/*
EXPORT'S.
 */
export default function Logo() {
  return (
      <Image style={styles.logo} source={require('../../../assets/logo.png')} />
  );
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  logo: {
    height: 100,
    width: 100,
    resizeMode: 'contain',
    margin: 10,
    left: 0,
    top: 0,
    position: 'relative',
    right: 0
  }
});
