import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import ConnectbleScreen from './src/components/menu/ConnectBle/index'
import FootmapScreen from './src/components/menu/ConnectBle/footmap'

import { Root } from "native-base";

const AppNavigator = createStackNavigator({
  //Footmap : FootmapScreen,
  Connectbel: ConnectbleScreen,
  Footmap : FootmapScreen,
}, {
  defaultNavigationOptions: {
    header: null,
  },
}
);

const Main = createAppContainer(AppNavigator); 

export default () =>
  <Root>
    <Main />
  </Root>;

//export default createAppContainer(AppNavigator);