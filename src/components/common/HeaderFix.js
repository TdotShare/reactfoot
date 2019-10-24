import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Left, Body, Right, Icon, Button, Title } from 'native-base';


export default class HeaderFix extends Component {
    render() {
        return (
            <View>
                <Header>
                    <Left>
                        {this.props.icon_left ?
                            <TouchableOpacity onPress={this.props.onpress_left}>
                                <Icon name={this.props.icon_left} style={{ color: '#ffffff'}} />
                            </TouchableOpacity> : null
                        }
                    </Left>
                    <Body>
                        <Title>{this.props.title}</Title>
                    </Body>
                    <Right>
                        {this.props.icon_rigth ?
                            <TouchableOpacity onPress={this.props.onpress_rigth}>
                                <Icon name={this.props.icon_rigth} style={{ color: '#ffffff'}} />
                            </TouchableOpacity> : null
                        }
                    </Right>
                </Header>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
