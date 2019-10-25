import React from 'react';
import { createAppContainer , createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SignInScreen from './src/components/auth/SignIn'
import RegisterScreen from './src/components/auth/Register'
import ForgetPasswordScreen from './src/components/auth/ForgetPass'
import AuthLoadingScreen from './src/components/auth/AuthLoading'

import ConnectbleScreen from './src/components/menu/ConnectBle/index'
import FootmapScreen from './src/components/menu/ConnectBle/footmap'



import { Root } from "native-base";

const AuthStack = createStackNavigator({ 
  //SignIn: SignInScreen ,
  Register : RegisterScreen,
  ForgetPass : ForgetPasswordScreen
}, {
  defaultNavigationOptions: {
    header: null,
  },
});

const AppStack = createStackNavigator({

  Connectbel: ConnectbleScreen,
  Footmap : FootmapScreen,

}, {
  defaultNavigationOptions: {
    header: null,
  },
}
);

const Main = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'Auth',
    }
  )
);

export default () =>
  <Root>
    <Main />
  </Root>;

//export default createAppContainer(AppNavigator);