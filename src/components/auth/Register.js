import React, { Component } from 'react';
import { View, Text } from 'react-native';

import HeaderFix from '../common/HeaderFix'
import ButtonFix from '../common/ButtonFix'
import InputFix from '../common/InputFix'

export default class Register extends Component {
  
  state = {
    username : '',
    password : '',
    cm_password : '',
    email : ''
  }

  actionSignUp = (register) => {
    if(register.user != "" && register.pass != "" && register.cm_pass != "" && register.email != ""){
      if(register.pass == register.cm_pass){
        alert('register sucss !')
        
        this.props.navigation.goBack()

      }else{
        alert('sucss but .. password error')
      }
    }else{
      alert('error !')
    }
  }

  render() {

    let register = { user : '' , pass : '' , cm_pass : '' , email : ''}
    
    return (
      <View>
        <HeaderFix
          icon_left={'arrow-back'}
          onpress_left={() => this.props.navigation.goBack()}
          title={'สมัครสมาชิก'}
        />

        <InputFix rounded={true} placeholder={'Username'} Icon={'person'} onChangeText={(txt) => { register.user = txt }} />
        <InputFix rounded={true} placeholder={'Password'} Icon={'lock'} secure={false} onChangeText={(txt) => { register.pass = txt }} />
        <InputFix rounded={true} placeholder={'Confirm Password'} Icon={'checkmark-circle-outline'} secure={true} onChangeText={(txt) => { register.cm_pass = txt  }} />
        <InputFix rounded={true} placeholder={'E-mail'} Icon={'mail'} onChangeText={(txt) => { register.email = txt  }} />
        <ButtonFix rounded={true} title={'ลงทะเบียนใช้งาน'} onPress={() => this.actionSignUp(register)} />

      </View>
    );
  }
}