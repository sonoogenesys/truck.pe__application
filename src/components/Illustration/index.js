'use strict'

/*
IMPORT'S.
 */
import React from 'react';
import { StyleSheet, View, Image, Dimensions } from 'react-native';


/*
GLOBAL'S.
 */
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height


/*
EXPORT'S.
 */
export default function Illustration(props) {
  return (
      <Image style={styles.main} resizeMode="contain" source = {require('../../../assets/illustrations/illustration_one.png')} />
  );
}

/*
STYLE'S.
 */
const styles = StyleSheet.create({
  'main': {
      maxHeight: 420,
      maxWidth: 320,
      alignItems: 'flex-end',
      resizeMode: 'cover'
  }
})