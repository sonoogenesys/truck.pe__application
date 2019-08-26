'use strict'

/*
IMPORT'S.
 */
import { AppRegistry } from 'react-native'; // npm: react-native library.


/*
APP
 */
import App from './src/App'; // custom: application entry point.
import { name as _appName } from './app.json'; // custom: application.json file.


/*
APP REGISTRY
 */
AppRegistry.registerComponent(_appName, () => App, {});
