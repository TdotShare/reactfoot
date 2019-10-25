import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Col, Row, Grid } from "react-native-easy-grid";

import Text from '../common/TextFix';
import ButtonFix from '../common/ButtonFix'
import InputFix from '../common/InputFix'

export default class SingIn extends Component {

    actionSignln = () => {
        alert('test !')
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={{
                    left: 0,
                    height: 180,
                    backgroundColor: '#575fcf',
                    borderStyle: 'solid',
                    borderLeftWidth: Dimensions.get('window').width,
                    borderBottomWidth: 80,
                    borderLeftColor: 'transparent',
                    borderBottomColor: '#ffffff'
                }}></View>

                <View style={{ height: '3%' }}></View>

                <InputFix rounded={true} placeholder={'Username'} Icon={'person'} onChangeText={(txt) => { }} />
                <InputFix rounded={true} placeholder={'Password'} Icon={'lock'} secure={true} onChangeText={(txt) => { }} />
                <ButtonFix rounded={true} title={'Login'} onPress={() => this.actionSignln()} />

                <Grid>
                    <Col>
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("Register");
                        }}>
                            <Text style={{ textAlign: 'center' }}>สมัครสมาชิก</Text>
                        </TouchableOpacity>

                    </Col>
                    <Col >
                        <TouchableOpacity onPress={() => {
                            this.props.navigation.navigate("ForgetPass");
                        }}>
                            <Text style={{ textAlign: 'center' }}>ลืมรหัสผ่าน ?</Text>
                        </TouchableOpacity>
                    </Col>
                </Grid>


            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        //padding: 10,
        flex: 1,
        justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#ffffff',
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
