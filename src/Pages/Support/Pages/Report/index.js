import React from "react";
import { StyleSheet, Text, View, ScrollView, TextInput, Platform, KeyboardAvoidingView } from 'react-native';

import Logo from '../../../../components/Logo';
import { ButtonLight } from '../../../../components/Button';

export default class Index extends React.Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title'),
    };
  };

  render() {
    return (
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
        <KeyboardAvoidingView
          style={styles.container}
          behavior={Platform.OS === "ios" ? "padding" : null}
        >
          <Logo />
          <View style={styles.layout} >
            <View style={styles.headerContainer} >
              <Text style={styles.headerText} >Lorem Ipsum</Text>
              <Text style={styles.subText} >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent quis velit vitae enim gravida lacinia. Ut at auctor arcu. Ut eu pellentesque tortor.</Text>
            </View>
            
            <View style={styles.commentContainer} >
              <View style={styles.banner} >
                <Text style={[styles.bannerText, { color: '#FFD300' }]} >* </Text>
                <Text style={styles.bannerText} >Comments</Text>
              </View>
              <View style={styles.messageContainer} >
                <TextInput
                  style={styles.message}
                  multiline={true}
                />
              </View>

              <ButtonLight 
                iconName='FontAwesome|send'
                btnText="SEND MESSAGE " 
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  layout: {
    width: 320,
    paddingBottom: 20,
  },
  headerContainer: {
  },
  headerText: {
    fontSize: 24,
  },
  subText: {
    fontSize: 14,
  },
  commentContainer: {
    marginTop: 20,
  },
  banner: {
    flex: 1,
    flexDirection: 'row',
  },
  bannerText: {
    fontSize: 15,
  },
  messageContainer: {
    height: 120,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: '#F1F3F8',
    padding: 5,
  },
  message: {
    width: '100%',
    height: '100%',
    textAlignVertical: 'top',
  },
});