/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import listenToKeyboardEvents from './lib/KeyboardAwareHOC'
import KeyboardAwareScrollView from './lib/KeyboardAwareScrollView'
import KeyboardAwareListView from './lib/KeyboardAwareListView'
import KeyboardAwareFlatList from './lib/KeyboardAwareFlatList'
import KeyboardAwareSectionList from './lib/KeyboardAwareSectionList'

AppRegistry.registerComponent(appName, () => App);
export {
  listenToKeyboardEvents,
  KeyboardAwareListView,
  KeyboardAwareFlatList,
  KeyboardAwareSectionList,
  KeyboardAwareScrollView
}
