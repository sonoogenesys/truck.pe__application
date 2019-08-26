'use strict'

/*
IMPORT'S.
 */
import React from 'react'; // npm: react.js library.
import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native'; // npm: react-native library.


/*
COMPONENT'S.
 */
import Glyph from '../Glyph';


/*
EXPORT'S.
 */
export function ListItem(props) {
  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.listItem} onPress={props.onClick} >
        {
          props.iconName !== undefined ?
            <View style={[styles.iconContainer, props.iconContainerStyle]} >
              <Glyph
                style={[styles.itemIcon, props.iconStyle]}
                name={props.iconName}
              />
            </View> : null
        }
        <View style={styles.textContainer} >
          <Text style={styles.itemText} numberOfLines={1} >{props.itemText}</Text>
        </View>
        <Glyph style={styles.itemIcon} name='chevron-right' />
      </TouchableOpacity>
    </View>
  );
}
export class SettingsListItem extends React.Component {
  // properties.
  state = {
    switchValue: false
  };


  /*
  OBJECT: RENDER.
   */
  render() {
    return (
      <View style={styles.settingListItem}>
        <View style={styles.textContainer} >
          <Text style={styles.itemText} numberOfLines={1} >{this.props.itemText}</Text>
        </View>
        <Switch
          thumbColor='#fff'
          trackColor={{ true: '#FFD300' }}
          onValueChange={() => this.setState({ switchValue: !this.state.switchValue })}
          value={this.state.switchValue}
        />
      </View>
    );
  }
}


/*
STYLE'S.
 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F3F8',
  },
  listItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  settingListItem: {
    flex: 1,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },
  itemIcon: {
    fontSize: 14,
  },
  textContainer: { 
    flex: 1, 
  },
  itemText: {
    fontSize: 14,
    flexShrink: 1,
  },
});
