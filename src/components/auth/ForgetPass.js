import React, { Component } from 'react';
import { View, Text } from 'react-native';

import HeaderFix from '../common/HeaderFix'
import ButtonFix from '../common/ButtonFix'

export default class ForgetPass extends Component {
  render() {
    return (
      <View>
        <HeaderFix
          icon_left={'arrow-back'}
          onpress_left={() => this.props.navigation.goBack()}
          title={'ลืมรหัสผ่าน'}
          />

          
      </View>
    );
  }
}

