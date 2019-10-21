
import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  TouchableHighlight,
  NativeAppEventEmitter,
  Platform,
  PermissionsAndroid,
  StyleSheet,
  Image
} from 'react-native';
import { Button } from 'native-base';
import HeaderFix from './src/components/common/HeaderFix'
import ButtonFix from './src/components/common/ButtonFix'

export default class index extends Component {


  render() {


    return (
      <View style={styles.container}>
        <HeaderFix title={'Ble Connect'} ></HeaderFix>
      </View>

    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 15,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
