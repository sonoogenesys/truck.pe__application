'use strict'


/*
IMPORT'S.
 */
import { createSwitchNavigator, createAppContainer } from "react-navigation"; // npm: react-native library.
import {
  setCustomText
} from 'react-native-global-props'; // npm: global style's.


/*
NAVIGATOR'S.
 */
import { AppDrawerNavigator } from './Navigators/App';
import { AuthStackNavigator } from './Navigators/Login';


/*
OBJECT: SWITCH NAVIGATOR
 */
const AppSwitchNavigator = createSwitchNavigator({
  Auth: { screen: AuthStackNavigator },
  Home: { screen: AppDrawerNavigator },
});


/*
EXPORT'S.
 */
export default createAppContainer(AppSwitchNavigator);


/*
STYLE'S.
 */
setCustomText({
  style: {
    fontFamily: 'OpenSans-Regular'
  }
})