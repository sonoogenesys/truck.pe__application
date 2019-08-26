import React from "react";
import { 
  View,
  Text,
  StyleSheet
} from "react-native";
import { TouchableOpacity, TouchableNativeFeedback } from "react-native-gesture-handler";
import Glyph from "../../../components/Glyph";
import { ButtonIcon } from "../../../components/Button";

export default function ListItem(props) {
  return (
    <View style={styles.container} >
      <ButtonIcon 
        iconName={
          props.isActive? 
          'Ionicons|md-radio-button-on' : 
          "Ionicons|md-radio-button-off"
          } 
        onClick={props.onClick}
      />

      <View style={styles.textContainer} >
        <Text style={styles.itemText} numberOfLines={1} >{props.itemText}</Text>
      </View>
      <ButtonIcon iconName='AntDesign|closesquare' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
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
    marginLeft: 20,
  },
  itemText: {
    fontSize: 14,
    flexShrink: 1,
  },
});