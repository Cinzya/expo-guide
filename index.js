/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {startProximityObserver, stopProximityObserver} from './proximityObserver';

AppRegistry.registerComponent(appName, () => App);

startProximityObserver();