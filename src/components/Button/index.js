'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'; // npm: react-native library.
import { TouchableNativeFeedback } from 'react-native-gesture-handler'; // npm: react-native gesture handler.
import LinearGradient from "react-native-linear-gradient"; // npm: gradient background library.
//import {Size, widthSize} from 'SizeHandler';
/*
COMPONENT'S.
 */
import Glyph from '../Glyph';


/*
EXPORT'S.
 */

export function ButtonLight(props = { glyph: null, name: null, button: null, color: null, text: null, textStyle: null }) {
  return (
    <TouchableOpacity 
      style={[styles.button, props.button]}
      onPress={props.onClick}
    >
      { props && props.glyph ? <Glyph glyph={props.glyph} style={props.glyphStyle} library={props.library} size={props.size || 17} color={props.color}/> : null }
      <Text style={[styles.textStyle, props.textStyle]} >{props.text}</Text>
    </TouchableOpacity>
  );
}
export function ButtonDark(props) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor: '#8454ff' }, props.button]}
      onPress={props.onClick}
    >
      { props && props.glyph ? <Glyph glyph={props.glyph} style={props.glyphStyle} library={props.library} size={props.size || 17} color={props.color || '#fff'}/> : null }
      { props && props.text ? <Text style={[styles.textStyle, { 'color': '#fff' }, props.textStyle]} >{props.text}</Text> : null }
    </TouchableOpacity>
  );
}
export function ButtonLink(props) {
  return (
    <TouchableOpacity style={[styles.button, props.button]}   onPress={props.onClick} >
      { props && props.glyph ? <Glyph glyph={props.glyph} style={props.glyphStyle} library={props.library} size={props.size || 17} color={props.color}/> : null }
      <Text style={[styles.textStyle, props.textStyle]} >{props.text}</Text>
    </TouchableOpacity>
  );
}
export function ButtonGradient(props) {
  return (
      <View style={[styles.button, props.button]}>
        <LinearGradient start={{x: 0.0, y: 0.25}} end={{x: 0.5, y: 1.0}} locations={[0,0.5,0.6]} colors={ props.gradients ? props.gradients: ['#8454ff', '#8454ff'] } style={[styles.button, props.gradientStyle]}>
          <TouchableOpacity onPress={props.onClick} style={[styles.row, props.button]}>
            { props && props.glyph ? <Glyph glyph={props.glyph} style={props.glyphStyle} library={props.library} size={props.size || 17} color={props.color || '#fff'}/> : null }
            <Text style={[styles.textStyle, { color: '#FFF' }, props.textStyle]} >{props.text}</Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
  );
}
export function ButtonIcon(props = { backgroundColor: '#8454ff' }) {
  return (
    <TouchableNativeFeedback 
      style={[styles.roundButton, { backgroundColor: '#8454ff' }, props.roundButton]}
      background={TouchableNativeFeedback.Ripple(props.backgroundColor || '#8454ff' )}
      onPress={props.onClick} 
    >
      <Glyph
        style={[styles.glyphStyle, props.glyphStyle]}
        color={props.color}
        size={props.size}
        library={props.library}
        glyph={props.glyph}
      />
    </TouchableNativeFeedback>
  );
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden'
  },
  roundButton: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    height: 60,
    fontSize: 21
  },
  textStyle: {
    fontSize: 17,
    marginLeft: 5,
    fontFamily: 'Poppins-Regular'
  },
  gradientStyle: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  glyphStyle: {
    fontSize: 21
  }
});
