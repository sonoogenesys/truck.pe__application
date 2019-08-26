'use strict'


/*
IMPORT'S.
 */
import {  createStackNavigator } from "react-navigation"; // npm: react-navigation library.


/*
PAGE'S.
 */
import LoginWithSocialAccount from '../../Pages/Account';
import SendOtp from '../../Pages/Account/Pages/Otp/Send';
import OtpVerification from '../../Pages/Account/Pages/Otp/Verification';


/*
EXPORT'S.
 */
export const AuthStackNavigator = createStackNavigator({
  SocialLogin: { screen: LoginWithSocialAccount },
  Login: { screen: SendOtp },
  OtpVerification: { screen: OtpVerification }
}, {
  headerMode: 'none'
});