'use strict'


/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, View, FlatList, ScrollView, Image, Dimensions } from 'react-native'; // npm: react-native library.


/*
COMPONENT'S.
 */
import Logo from '../../components/Logo';
import { ButtonIcon, ButtonLink, ButtonDark } from "../../components/Button";



/*
EXPORT'S.
 */
export default function Index(props) {
  return (
      <View flex={1} alignItems={'center'} style={styles.container}>
        <Logo />
        <View style={styles.main} >
          <Text style={styles.mainHeadline}>Customer Care</Text>
          <ButtonLink button={{ maxWidth: 350 }} glyph={'fire'} color={'#8454ff'} text={'Lorem ipsum dolor sit amet, consectetur.'} textStyle={{ paddingTop: 2.5 }}/>
          <Text style={styles.mainDescription}>Sed cursus consectetur lorem nec aliquam. Etiam faucibus ante in lorem venenatis, interdum hendrerit nisi suscipit.</Text>
          <ButtonDark button={styles.reportButton} glyph={'report'} color={'#FF416C'} text={'Report'} textStyle={{ paddingTop: 2.5, color: '#FF416C' }}/>
        </View>
        <View style={{ position: 'absolute', width: '100%', height: 350, zIndex: -1000, bottom: 0, resizeMode: 'contain' }}>
          <Image style={{ flex: 1, width: '100%', left: -50, bottom: -50, height: '100%', resizeMode: 'contain' }} source={require('../../../assets/illustrations/background3.png')} />
        </View>
        <View style={{ width: '100%' }} flexDirection={'row'} justifyContent={'flex-end'}>
          <ButtonIcon
              glyph={'call'}
              glyphStyle={{ 'color': '#fff' }}
              roundButton={styles.callCustomerCare}
          />
        </View>
      </View>
  );
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    position: 'relative',
    padding: 10,
  },
  main: {
    flex: 1,
    alignItems: 'center'
  },
  mainHeadline: {
    fontSize: 24,
    width: '100%',
    textAlign: 'center'
  },
  mainDescription: {
    fontSize: 17,
    fontFamily: 'OpenSans-Regular',
    maxWidth: '80%',
    textAlign: 'center',
    marginBottom: 20
  },
  reportButton: {
    height: 'auto',
    width: 'auto',
    backgroundColor: '#f1effd',
    paddingLeft: 10,
    paddingRight: 10
  },
  callCustomerCare: {
    backgroundColor: '#FF416C',
    shadowColor: '#e6e6e6',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.19,
    elevation: 2,
  },
});