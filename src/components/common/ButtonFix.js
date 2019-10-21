import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Button } from 'native-base';
import UI from '../../config/CommonStyles'

export default class ButtonFix extends Component {
    render() {
        return (
            <View style={{ padding: 10}}> 
                <Button style={{justifyContent: 'center'}} onPress={this.props.onPress} > 
                    <Text style={{textAlign : 'center'  , color : UI.textWhite}}>{this.props.title}</Text>
                </Button>
            </View>
        ); 
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 50,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});
