'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import _ from 'underscore' // npm: utility module.
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons'; // glyph: material icon's.
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome'; // glyph: fontAwesome glyph icon's.
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'; // glyph: material design
import Ionicons from 'react-native-vector-icons/Ionicons'; // glyph: default icon's.
import AntDesign from 'react-native-vector-icons/dist/AntDesign'; // glyph: antDesign icon's.
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'; // glyph: FontAwesome5 glyph icon's.
import Entypo from 'react-native-vector-icons/dist/Entypo'; // glyph: Entypo glyph icon's.
import EvilIcons from 'react-native-vector-icons/dist/EvilIcons'; // glyph: Entypo glyph icon's.
import Feather from 'react-native-vector-icons/dist/Feather'; // glyph: Feather glyph icon's.
import Octicons from 'react-native-vector-icons/dist/Octicons' // glyph: Octicons glyph icon's.
import Simpleicons from 'react-native-vector-icons/dist/SimpleLineIcons' // glyph: SimpleLineIcons glyph icon's.


/*
EXPORT'S.
 */
export default function Glyph(props) {
  // error handling.
  try {
    // if glyph prop is empty
    // than return null.
    if (props.glyph === undefined) return null;
    
    // local variable.
    let _glyph, _iconStyle, _fontSize, _color, _requiredLibrary
    
    // variable assignment.
    _glyph = props.glyph
    _iconStyle = props.style;
    _fontSize = props.size;
    _color = props.color
    _requiredLibrary = props.library

    // if _requiredLibrary is passed than
    // load glyph from library first.
    if (!_.isEmpty(_requiredLibrary)) {
      // library cases.
      if ('fontAwesome5'.includes(_requiredLibrary)) { return (<FontAwesome5 name={_glyph} style={_iconStyle} color={_color} size={_fontSize}/>) }
      else if ('antDesign'.includes(_requiredLibrary)) { return (<AntDesign name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('ioniIcons'.includes(_requiredLibrary)) { return (<Ionicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('entypo'.includes(_requiredLibrary)) { return (<Entypo name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('materialIcons'.includes(_requiredLibrary)) { return (<MaterialIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('materialCommunityIcons'.includes(_requiredLibrary)) return (<MaterialCommunityIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />)
      else if ('fontAwesome'.includes(_requiredLibrary)) { return (<FontAwesome name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('octicons'.includes(_requiredLibrary)) { return (<Octicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('simpleIcons'.includes(_requiredLibrary)) { return (<Simpleicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else if ('evilIcons'.includes(_requiredLibrary)) { return (<EvilIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
      else { return (<Feather name={_glyph || _glyph[0]} style={_iconStyle} color={_color} size={_fontSize} />); }
    }
    
    // case for handling
    // glyphicon's library.
    if (FontAwesome5.hasIcon(_glyph)) { return (<FontAwesome5 name={_glyph} style={_iconStyle} color={_color} size={_fontSize}/>) }
    else if (AntDesign.hasIcon(_glyph)) { return (<AntDesign name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (Ionicons.hasIcon(_glyph)) { return (<Ionicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (Entypo.hasIcon(_glyph)) { return (<Entypo name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (MaterialIcons.hasIcon(_glyph)) { return (<MaterialIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (MaterialCommunityIcons.hasIcon(_glyph)) return (<MaterialCommunityIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />)
    else if (FontAwesome.hasIcon(_glyph)) { return (<FontAwesome name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (Octicons.hasIcon(_glyph)) { return (<Octicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (Simpleicons.hasIcon(_glyph)) { return (<Simpleicons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else if (EvilIcons.hasIcon(_glyph)) { return (<EvilIcons name={_glyph} style={_iconStyle} color={_color} size={_fontSize} />) }
    else { return (<Feather name={_glyph || _glyph[0]} style={_iconStyle} color={_color} size={_fontSize} />); }
  } catch (error) {
    // report failure.
    throw error
  }
}