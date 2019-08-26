'use strict'


/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Dimensions } from 'react-native'; // npm: react-native library.
import { WebView } from 'react-native-webview'

/*
COMPONENT'S.
 */
import Logo from '../Logo';
import { ButtonIcon, ButtonLink, ButtonDark } from "../Button";


/*
GLOBAL'S.
 */
let _globalUri


/*
EXPORT'S.
 */
export default function Index(props) {
  return (
      <View style={styles.container}>
        <WebView style={styles.main} source={{ uri: props.uri || _globalUri || 'https://www.rootandleaves.com' }} startInLoadingState={true}
                 scalesPageToFit={true} />
      </View>
  );
}
export const TargetUri = (uri) => _globalUri = uri


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative'
  },
  main: {
    width: '100%',
    height: '100%'
  }
});