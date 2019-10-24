
import React, { Component } from 'react';
import { Text, ScrollView, View, Platform } from 'react-native';
import { ActionSheet } from "native-base";
import { BleManager } from 'react-native-ble-plx';

import HeaderFix from '../../common/HeaderFix'
import ButtonFix from '../../common/ButtonFix'
import CardsFix from '../../common/CardsFix'





export default class index extends Component {

  state = {
    list : [],
    connectName : [], 
    manager : new BleManager(),
    devicelist: [],
    leftSelect: { name: '' },
    rightSelect: { name: '' },
    data: [{ ssid: '14:DD:AE:45:AA', name: 'dd1', value: '100,50,0,0,54|' }, { ssid: '55:DD:AE:45:AA', name: 'dd2', value: '150,0,0,0,54|' }],
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    this.focusListener = navigation.addListener('didFocus', () => {
      if (Platform.OS === 'ios') {
        this.manager.onStateChange((state) => {
          if (state === 'PoweredOn') this.scanAndConnect();
        })
      } else {
        this.scanAndConnect();
      }

      this.setState({connectName : []})
    });
  }

  componentWillUnmount = () => {
    //this.focusListener.remove();
  }

  scanAndConnect() {
    this.state.manager.startDeviceScan(null, null, (error, device) => {
      if (error) {
        console.log(error);
        return;
      }
      if (device.name) {
        if (this.state.list.findIndex(l => l.id === device.id) < 0) {
          let arrlist = this.state.list;
          arrlist.push(device)
          this.setState({list : arrlist})
        }
      }
      if (new Date().getMilliseconds() < 30) {
        this.setState({ devicelist: this.state.list.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)), list: [] });
      }
    });
  }




  actionMore = (el, index) => {

    let BUTTONS = [
      { text: "Connect", icon: "link", iconColor: "#3742fa" },
      { text: "Cancel", icon: "close", iconColor: "red" }
    ];

    let OptionsIndex = BUTTONS.length - 1

    return (
      ActionSheet.show(
        {
          options: BUTTONS,
          cancelButtonIndex: OptionsIndex,
          destructiveButtonIndex: OptionsIndex,
          title: "Option"
        },
        buttonIndex => {
          if (buttonIndex != OptionsIndex) {
            let _connectName = this.state.connectName
            if(_connectName.length == 0){
              _connectName.push(el)
            }else{
              if(_connectName.findIndex(_name => _name.name ===  el.name ) < 0){
                 _connectName.push(el)
              }else{
                alert(`${el.name} ถููกเชื่อมต่อแล้ว !`)
              }
            }

            this.setState({
              connectName : _connectName
            })
          }
        }
      )
    )
  }

  actionRefresh = () => {
    console.log('actionRefresh ! ')

    this.setState({
      data: [{ ssid: '14:DD:AE:BB:BB', name: 'dd1', value: '100,50,0,0,54|' }, { ssid: 'BB:BB:AE:45:AA', name: 'dd2', value: '150,0,0,0,54|' }],
    })
  }

  render() {

    return (
      <View>
        <HeaderFix title={'Ble Connect'} ></HeaderFix>
        <ButtonFix title={'View Footmap'}
          onPress={() => {
            this.state.manager.stopDeviceScan()
            this.props.navigation.navigate("Footmap", { connectFoot  : this.state.connectName });
          }}>
        </ButtonFix>
        <ScrollView >
          <CardsFix
            data={this.state.list}
            fillable={['name', 'id']}
            fillLabel={['ชื่อ', 'รหัส']}
            onPress={(el, index) => this.actionMore(el, index)}>
          </CardsFix>
        </ScrollView>
      </View>

    );
  }

}