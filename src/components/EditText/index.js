'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, View, TextInput, TouchableOpacity, Image } from 'react-native'; // npm: react-native.js library.


/*
COMPONENT'S.
 */
import Glyph from '../Glyph';


/*
EXPORT'S.
 */
export function EditText(props) {
  return (
    <View style={[styles.inputHolder, props.style]}>
      { props.image ? <Image source={props.image} style={[ styles.imageStyle, props.imageStyle ]}/>: null }
      { props.glyph ? <Glyph style={[styles.glyphStyle, props.glyphStyle]} size={props.size} library={props.library} color={props.color} glyph={props.glyph} /> : null }
      <TextInput
        style={[styles.input, props.inputStyle]}
        placeholder={props.hintText}
        onChangeText={props.onChangeText}
        placeholderTextColor={props.placeholderTextColor || '#202020'}
        keyboardType={props.inputType}
        underlineColorAndroid='transparent'
      />
    </View>
  );
}
export class PasswordText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hidePassword: true }
  }

  render() {
    return (
      <View style={[styles.inputHolder, this.props.style]}>
        <Glyph style={styles.glyphStyle} glyph={this.props.glyph} size={this.props.size} color={this.props.color} />
        <TextInput
          style={[styles.inputPassword]}
          placeholder={this.props.hintText}
          onChangeText={this.props.onChangeText}
          secureTextEntry={this.state.hidePassword}
          placeholderTextColor={this.props.placeholderTextColor || '#202020'}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity 
          style={styles.iconBtn} 
          onPress={() => this.setState({ hidePassword: !this.state.hidePassword })} 
        >
          <Glyph
            style={styles.glyphStyle}
            color={this.props.color}
            size={this.props.size}
            glyph={this.state.hidePassword ? 'eye-off' : 'eye'}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  inputHolder: {
    width: '100%',
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 5,
    marginBottom: 5,
    borderRadius: 2.5,
    borderWidth: 1,
    borderColor: '#8454ff',
  },
  imageStyle: {
    width: 40,
    height: 40,
    marginLeft: 5,
    borderRadius: 2.5
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 15
  },
  inputPassword: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 15,
  },
  glyphStyle: {
    marginLeft: 10
  },
  iconBtn: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 15,
  }
});
