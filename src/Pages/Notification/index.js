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
import {EditText} from "../../components/EditText";



/*
EXPORT'S.
 */
export default function Index(props) {

  return (
      <View style={styles.container} flex={1}>
        <ScrollView style={{ 'width': '100%' }} flex={1} alignItems={'center'}>
          <View style={styles.regular} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Lorem ipsum dolor sit amet, consectetur.'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontFamily: 'Poppins-Bold' }}/>
              <Text style={styles.mainDescription}>Sed cursus consectetur lorem nec aliquam. Etiam faucibus ante in lorem venenatis, interdum hendrerit nisi suscipit.</Text>
            </View>
          </View>
          <View style={[styles.transportStatus, { marginTop: 10 }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'( HR-47A-7019 )  started transportation'} textStyle={{ paddingTop: 2.5, marginLeft: 0, color: '#319c4d', fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Driver Profile'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
            </View>
          </View>
          <View style={[styles.transportStatus, { marginTop: 10, borderColor: '#3c7be2' }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View style={{ position: 'relative' }} flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'( HR-47A-7019 )  transportation in progress'} textStyle={{ paddingTop: 2.5, marginLeft: 0, color: '#3c7be2', fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'View Location'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
            </View>
          </View>
          <View style={[styles.transportStatus, { marginTop: 10, backgroundColor: '#f1effd', borderColor: '#8454ff' }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'( HR-47A-7019 )  transportation completed'} textStyle={{ paddingTop: 2.5, marginLeft: 0, color: '#8454ff', fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Driver Profile'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontSize: 15, fontFamily: 'Poppins-Bold' }}/>
            </View>
          </View>
          <View style={[styles.notificationWithBigImage, { marginTop: 10 }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.5} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: '100%', height: 420, resizeMode: 'cover' }}
                  source={require('../../../assets/illustrations/background2.png')}
              />
            </View>
            <View style={{ padding: 20, paddingLeft: 10 }} flex={0.5}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Lorem ipsum dolor sit amet, consectetur.'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontFamily: 'Poppins-Bold' }}/>
              <Text style={styles.mainDescription}>Sed cursus consectetur lorem nec aliquam. Etiam faucibus ante in lorem venenatis, interdum hendrerit nisi suscipit.</Text>
            </View>
          </View>
          <View style={[styles.regular, { marginTop: 10 }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Lorem ipsum dolor sit amet, consectetur.'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontFamily: 'Poppins-Bold' }}/>
              <Text style={styles.mainDescription}>Sed cursus consectetur lorem nec aliquam. Etiam faucibus ante in lorem venenatis, interdum hendrerit nisi suscipit.</Text>
              <View style={{ position: 'relative' }}>
                <EditText hintText={'Username or Organization name..'} glyph={'user'} color={'#8454ff'} library={'antDesign'} style={styles.forwardForInput} placeholderTextColor={'#8454ff'} inputStyle={{ fontSize: 15, height: '100%', padding: 0, margin: 0 }}/>
                <ButtonLink button={[ styles.normalizeButton, { position: 'absolute', right: 0, height: '100%', verticalAlign: '50%', top: 2.5 }]} color={'#8454ff'} glyph={'chevron-right'}/>
              </View>
            </View>
          </View>
          <View style={[styles.regular, { marginTop: 10 }]} flexDirection={'row'} alignItems={'center'} justifyContent={'center'}>
            <View flex={0.2} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
              <Image
                  style={{ width: 55, height: 55, borderRadius: 100 }}
                  source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
              />
            </View>
            <View flex={0.8}>
              <ButtonLink button={[styles.normalizeButton, { justifyContent: 'flex-start' }]} text={'Lorem ipsum dolor sit amet, consectetur.'} textStyle={{ paddingTop: 2.5, marginLeft: 0, fontFamily: 'Poppins-Bold' }}/>
              <Text style={styles.mainDescription}>Sed cursus consectetur lorem nec aliquam. Etiam faucibus ante in lorem venenatis, interdum hendrerit nisi suscipit.</Text>
              <View style={{ marginTop: 10 }} flexDirection={'row'} alignItems={'center'}>
                <ButtonDark text={'accept'} glyph={'check'} color={'#fff'} textStyle={{ fontSize: 15 }} button={[ styles.normalizeButton, { 'backgroundColor': '#319c4d', paddingLeft: 10, paddingRight: 10 }]}/>
                <ButtonDark text={'cancel'} glyph={'cancel'} color={'#fff'} textStyle={{ fontSize: 15 }} button={[ styles.normalizeButton, { 'backgroundColor': '#FF416C', paddingLeft: 10, paddingRight: 10, marginLeft: 10 }]}/>
                <ButtonDark text={'update'} glyph={'system-update'} color={'#fff'} textStyle={{ fontSize: 15 }} button={[ styles.normalizeButton, { 'backgroundColor': '#8454ff', paddingLeft: 10, paddingRight: 10, marginLeft: 10 }]}/>
              </View>
            </View>
          </View>
        </ScrollView>
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
  forwardForInput: {
    height: 30,
    marginTop: 10,
    padding: 2.5,
    backgroundColor: '#f1effd'
  },
  transportStatus: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#319c4d'
  },
  normalizeButton: {
    height: 'auto',
    width: 'auto'
  },
  regular: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8454ff'
  },
  notificationWithBigImage: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#8454ff'
  }
});