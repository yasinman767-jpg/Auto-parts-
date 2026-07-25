import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './App';

LogBox.ignoreAllLogs(true);
AppRegistry.registerComponent('AutoPartsReactNative', () => App);
