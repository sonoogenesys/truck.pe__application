'use strict'


/*
IMPORT'S.
 */
import React from 'react'; // npm: react-native library.
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'; // npm: react-native library.
import { DrawerItems, SafeAreaView } from 'react-navigation'; // npm: react-native navigation.


/*
COMPONENT'S.
 */
import Glyph from '../../components/Glyph';
import {ButtonLink} from "../../components/Button";


/*
EXPORT'S.
 */
module.exports = (props) => (
  <SafeAreaView style={styles.container} >
    <ScrollView style={{ flex: 1, height: '100%' }} >
      <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
      >
        <View style={{ padding: 10, borderBottomWidth: 1, borderColor: '#e6e6e6' }} flexDirection={'row'} alignItems={'center'} justifyContent={'space-between'}>
          <Image
              style={styles.profilePicture}
              source={{ uri: 'https://images.pexels.com/photos/2108706/pexels-photo-2108706.jpeg' }}
          />
          <View style={{ paddingLeft: 10 }} flex={1} flexDirection={'column'} alignItems={'flex-start'}>
            <Text style={styles.name} >Lorem ipsum</Text>
            <ButtonLink glyph={'mobile'} size={13} button={styles.profileStatusDetail} text={'882-666-8515'} textStyle={{ paddingTop: 2.5 }}/>
          </View>
          <ButtonLink glyph={'chevron-right'} color={'#8454ff'} size={13} button={styles.openProfileButton}/>
        </View>
      </TouchableOpacity>
      <View style={{ flex:1, paddingLeft: 10, paddingRight: 10 }} >
        <DrawerItems {...props} />
      </View>
    </ScrollView>
    <View style={styles.drawerFooterButtons}>
      <TouchableOpacity
          style={styles.logoutButton}
          onPress={() => props.navigation.navigate('Auth')}
      >
        <Glyph style={[styles.itemIcon, { color: '#fff' }]} glyph='logout' />
        <Text style={[styles.itemText, { color: '#fff', fontFamily: 'Poppins-ExtraBold', paddingLeft: 10 }]}>Logout</Text>
      </TouchableOpacity>
    </View>
  </SafeAreaView>
);


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 120,
  },
  profileStatusDetail: {
    height: 'auto',
    width: 'auto'
  },
  openProfileButton: {
    height: 'auto',
    width: 'auto',
    backgroundColor: 'transparent'
  },
  item: {
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 14,
    marginLeft: 32,
    fontWeight: 'bold',
  },
  logoutButton: {
    backgroundColor: '#FF416C',
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    padding: 20,
    borderRadius: 0
  },
  drawerFooterButtons: {
    position: 'absolute',
    width: '100%',
    bottom: 0
  }
});