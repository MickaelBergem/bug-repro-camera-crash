import { createAppContainer, createStackNavigator } from 'react-navigation';

import HomeScreen from '../screens/HomeScreen';
import ScannerScreen from '../screens/ScannerScreen';

const screens = {
  HomeScreen,
  ScannerScreen,
};

export default createAppContainer(createStackNavigator(screens));
