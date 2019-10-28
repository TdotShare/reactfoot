
import React, { Component } from 'react';
import { BleManager } from 'react-native-ble-plx';
import { View, PermissionsAndroid, Animated, StyleSheet, Image } from 'react-native';
import { Button } from 'native-base';
import HeaderFix from '../../../components/common/HeaderFix'
import ButtonFix from '../../../components/common/ButtonFix'
import { Col, Row, Grid } from "react-native-easy-grid";
//mport Animated from 'react-native-reanimated';

export default class Footmap extends Component {

  state = {
    touchFoot_R: true,
    touchFoot_L: true,
    device_ble: [],
    animation: new Animated.Value(0),
    width: new Animated.Value(0),
    height: new Animated.Value(0),
    mockupValue: '104,0,0,0,0,64|',
    colorFootRed: 'red',
    colorFootBlack: '23b1f20',
    sersor_l_all: [{ value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },],
    sersor_r_all: [{ value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },
    { value: 0, color: 'red', colorAnimated: new Animated.Value(0), size: new Animated.Value(0) },]
  }

  componentDidMount = () => {
    const { navigation } = this.props;
    setTimeout(() => {
      this.connectDevice(navigation.state.params.connectFoot)
    }, 1000);

  }

  componentWillUnmount = async () => {
    const { navigation } = this.props;
    let _connectFoot = navigation.state.params.connectFoot
    for (let i = 0; i < _connectFoot.length; i++) {
      _connectFoot[i].cancelConnection();

    }
  }

  connectDevice(el) {
    for (let i = 0; i < el.length; i++) {
      console.log(el[i].name)
      if (el[i].name.substring(el[i].name.length, el[i].name.length - 1) === 'L') {

        console.log('L sucssss !')


        el[i].connect().then((device) => {
          return device.discoverAllServicesAndCharacteristics();
        }).then((device) => {
          return this.setupNotificationsL(device);
        }, (error) => {
          console.log(error);
        })


      } else if (el[i].name.substring(el[i].name.length, el[i].name.length - 1) === 'R') {

        console.log('R sucssss !')

        el[i].connect().then((device) => {
          return device.discoverAllServicesAndCharacteristics();
        }).then((device) => {
          return this.setupNotificationsR(device);
        }, (error) => {
          console.log(error);
        })

      }
    }
  }

  async setupNotificationsL(device) {
    const service = '0000FFE0-0000-1000-8000-00805F9B34FB';
    const characteristicN = '0000FFE1-0000-1000-8000-00805F9B34FB';
    device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
      if (error) {
        console.log(error);
        return
      }
      const lDetail = Base64.atob(characteristic.value);
      const arrDetail = lDetail.split(',');
      const l1 = parseInt(arrDetail[0]);
      const l2 = parseInt(arrDetail[1]);
      const l3 = parseInt(arrDetail[2]);
      const l4 = parseInt(arrDetail[3]);
      const l5 = parseInt(arrDetail[4]);

      let sersor_l = this.state.sersor_l_all
      sersor_l[0].value = l1;
      sersor_l[1].value = l2;
      sersor_l[2].value = l3;
      sersor_l[3].value = l4;
      sersor_l[4].value = l5;

      this.setState({
        sersor_l_all: sersor_l
      })

      console.log(this.state.sersor_l_all)

      //if (this.state.touchFoot_L) {
      this.startAnimationL()
      //}

    })
  }

  async setupNotificationsR(device) {
    const service = '0000FFE0-0000-1000-8000-00805F9B34FB';
    const characteristicN = '0000FFE1-0000-1000-8000-00805F9B34FB';
    device.monitorCharacteristicForService(service, characteristicN, (error, characteristic) => {
      if (error) {
        console.log(error);
        return
      }

      const rDetail = Base64.atob(characteristic.value);
      const arrDetail = rDetail.split(',');
      const r1 = parseInt(arrDetail[0]);
      const r2 = parseInt(arrDetail[1]);
      const r3 = parseInt(arrDetail[2]);
      const r4 = parseInt(arrDetail[3]);
      const r5 = parseInt(arrDetail[4]);
      //this.setState({ rDetail: Base64.atob(characteristic.value), r1: r1, r2: r2, r3: r3, r4: r4, r5: r5 });

      let sersor_r = this.state.sersor_r_all
      sersor_r[0].value = r1;
      sersor_r[1].value = r3;
      sersor_r[2].value = r2;
      sersor_r[3].value = r4;
      sersor_r[4].value = r5;

      this.setState({
        sersor_r_all: sersor_r
      })

      console.log(this.state.sersor_r_all)
      //if (this.state.touchFoot_R) {
      this.startAnimationR()
      //}

    })
  }

  startAnimationL = () => {

    // this.setState({
    //   touchFoot_L: false
    // })


    for (let i = 0; i < this.state.sersor_l_all.length; i++) {
      //----- sersor_l_all

      Animated.timing(this.state.sersor_l_all[i].colorAnimated, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        Animated.timing(this.state.sersor_l_all[i].colorAnimated, {
          toValue: 0,
          duration: 500,
        }).start();
      })

      Animated.timing(this.state.sersor_l_all[i].size, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        Animated.timing(this.state.sersor_l_all[i].size, {
          toValue: 0,
          duration: 500,
        }).start();
      })

      // if (i == this.state.sersor_l_all.length) {
      //   this.setState({
      //     touchFoot_L: true
      //   })
      // }

    }
  }


  startAnimationR = () => {

    // this.setState({
    //   touchFoot_R: false
    // })


    for (let i = 0; i < this.state.sersor_r_all.length; i++) {

      // ----- sersor_r_all

      Animated.timing(this.state.sersor_r_all[i].colorAnimated, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        Animated.timing(this.state.sersor_r_all[i].colorAnimated, {
          toValue: 0,
          duration: 500,
        }).start();
      })

      Animated.timing(this.state.sersor_r_all[i].size, {
        toValue: 1,
        duration: 500,
      }).start(() => {
        Animated.timing(this.state.sersor_r_all[i].size, {
          toValue: 0,
          duration: 500,
        }).start();
      })

      // if (i == this.state.sersor_r_all.length) {
      //   this.setState({
      //     touchFoot_R: true
      //   })
      // }
    }
  }

  ColorAnimat_r = (index) => {

    let sersor = this.state.sersor_r_all[index]
    let cool = sersor.value
    let shot = "";
    if(cool > 650){
      shot = `rgb(0,255,12)`;
    }else if(cool > 550){
      shot = `rgb(0,239,11)`;
    }else if(cool > 450){
      shot = `rgb(0,188,9)`;
    }else if(cool > 350){
      shot = `rgb(0,132,6)`;
    }else if(cool > 250){
      shot = `rgb(0,101,5)`;
    }else if(cool > 150){
      shot = `rgb(0,75,3)`;
    }else{
      shot = `rgb(0,0,0)`;
    }

    return shot;

    // return sersor.colorAnimated.interpolate({
    //   inputRange: [0, 1],
    //   //outputRange: ['rgb(0,0,0)', `rgb(${sersor.value},0,0)`],
    //   outputRange: ['rgb(0,0,0)', `rgb(0,${sersor.value},0)`],
    // })
  }

  ColorAnimat_l = (index) => {

    let sersor = this.state.sersor_l_all[index]
    let cool = sersor.value
    let shot = "";
    if(cool > 650){
      shot = `rgb(0,255,12)`;
    }else if(cool > 550){
      shot = `rgb(0,239,11)`;
    }else if(cool > 450){
      shot = `rgb(0,188,9)`;
    }else if(cool > 350){
      shot = `rgb(0,132,6)`;
    }else if(cool > 250){
      shot = `rgb(0,101,5)`;
    }else if(cool > 150){
      shot = `rgb(0,75,3)`;
    }else{
      shot = `rgb(0,0,0)`;
    }

    return shot;

    // return sersor.colorAnimated.interpolate({
    //   inputRange: [0, 1],
    //   outputRange: ['rgb(35,31,32)', shot],
    //   //outputRange: ['rgb(0,0,0)', `rgb(${sersor.value},0,0)`],
    // })
  }

  SizeAnimat_r = (index) => {

    let sersor = this.state.sersor_r_all[index]
    let sizeMax = 15

    if (sersor.value > 245) {
      sizeMax = 55
    } else if (sersor.value > 200) {
      sizeMax = 43
    } else if (sersor.value > 150) {
      sizeMax = 40
    } else if (sersor.value > 100) {
      sizeMax = 35
    } else if (sersor.value > 50) {
      sizeMax = 30
    } else if (sersor.value < 49) {
      sizeMax = 25
    }

    return sersor.size.interpolate({
      inputRange: [0, 1],
      outputRange: [15, sizeMax],
    })
  }

  SizeAnimat_l = (index) => {

    let sersor = this.state.sersor_l_all[index]
    let sizeMax = 15

    if (sersor.value > 245) {
      sizeMax = 55
    } else if (sersor.value > 200) {
      sizeMax = 43
    } else if (sersor.value > 150) {
      sizeMax = 40
    } else if (sersor.value > 100) {
      sizeMax = 35
    } else if (sersor.value > 50) {
      sizeMax = 30
    } else if (sersor.value < 49) {
      sizeMax = 25
    }

    return sersor.size.interpolate({
      inputRange: [0, 1],
      outputRange: [15, sizeMax],
    })
  }

  goBack() {
    const { navigation } = this.props;
    navigation.goBack();
    //navigation.state.params.onSelect({ selected: true });
  }

  render() {


    return (
      <View style={styles.container}>
        <HeaderFix
          icon_left={'arrow-back'}
          onpress_left={() => this.goBack()}
          title={'Shoes Map'}
          icon_rigth={'refresh'}
          onpress_rigth={() => { console.log('test !') }}></HeaderFix>

        <Grid>
          <Col >
            <View style={{ flex: 1 }} >

              <Image
                style={{ width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%', }}
                source={require('../../../assets/images/left.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_l(4), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%' }}
                source={require('../../../assets/images/ll/l1.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_l(3), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%' }}
                source={require('../../../assets/images/ll/l2.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_l(2), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%' }}
                source={require('../../../assets/images/ll/l3.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_l(1), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%' }}
                source={require('../../../assets/images/ll/l4.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_l(0), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%' }}
                source={require('../../../assets/images/ll/l5.png')}
              />

              <View style={{ padding: 50, top: '10%' }}>

                { /*

              <Row style={{ height: '12%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_l(0), width: this.SizeAnimat_l(0), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_l(0) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', right: '4%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_l(1), width: this.SizeAnimat_l(1), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_l(1) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_l(2), width: this.SizeAnimat_l(2), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_l(2) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_l(3), width: this.SizeAnimat_l(3), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_l(3) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', left: '1%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '5%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '3%', left: '3%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_l(4), width: this.SizeAnimat_l(4), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_l(4) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>


                */
                }




              </View>
            </View>
          </Col>
          <Col>
            <View style={{ flex: 1 }}>


              <Image
                style={{ width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/right.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_r(4), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/rr/r1.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_r(3), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/rr/r2.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_r(2), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/rr/r3.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_r(0), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/rr/r4.png')}
              />

              <Animated.Image
                style={{ tintColor: this.ColorAnimat_r(1), width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('../../../assets/images/rr/r5.png')}
              />

              <View style={{ padding: 50, top: '10%' }}>

                {/*

                <Row style={{ height: '12%' }}>
                 
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_r(0), width: this.SizeAnimat_r(0), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_r(0) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', left: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_r(1), width: this.SizeAnimat_r(1), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_r(1) }} ></Animated.View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_r(2), width: this.SizeAnimat_r(2), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_r(2) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_r(3), width: this.SizeAnimat_r(3), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_r(3) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', left: '1%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '4%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '3%', left: '3%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFootBlack }}></View>
                  <Animated.View style={{ margin: 2, height: this.SizeAnimat_r(4), width: this.SizeAnimat_r(4), borderRadius: 100 / 2, backgroundColor: this.ColorAnimat_r(4) }}></Animated.View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                */}

              </View>
            </View>
          </Col>
        </Grid>
        <ButtonFix title={'Start'} onPress={() => {

          let sersor_l = this.state.sersor_l_all
          sersor_l[0].value = Math.floor((Math.random() * 255) + 1);
          sersor_l[1].value = Math.floor((Math.random() * 255) + 1);
          sersor_l[2].value = Math.floor((Math.random() * 255) + 1);
          sersor_l[3].value = Math.floor((Math.random() * 255) + 1);
          sersor_l[4].value = Math.floor((Math.random() * 255) + 1);

          let sersor_r = this.state.sersor_r_all
          sersor_r[0].value = Math.floor((Math.random() * 255) + 1);
          sersor_r[1].value = Math.floor((Math.random() * 255) + 1);
          sersor_r[2].value = Math.floor((Math.random() * 255) + 1);
          sersor_r[3].value = Math.floor((Math.random() * 255) + 1);
          sersor_r[4].value = Math.floor((Math.random() * 255) + 1);

          this.setState({
            sersor_l_all: sersor_l,
            sersor_r_all: sersor_r
          })

          this.startAnimationL()
          this.startAnimationR()

        }} />


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

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
const Base64 = {
  btoa: (input = '') => {
    let str = input;
    let output = '';

    for (let block = 0, charCode, i = 0, map = chars;
      str.charAt(i | 0) || (map = '=', i % 1);
      output += map.charAt(63 & block >> 8 - i % 1 * 8)) {

      charCode = str.charCodeAt(i += 3 / 4);

      if (charCode > 0xFF) {
        throw new Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");
      }

      block = block << 8 | charCode;
    }

    return output;
  },

  atob: (input = '') => {
    let str = input.replace(/=+$/, '');
    let output = '';

    if (str.length % 4 == 1) {
      throw new Error("'atob' failed: The string to be decoded is not correctly encoded.");
    }
    for (let bc = 0, bs = 0, buffer, i = 0;
      buffer = str.charAt(i++);

      ~buffer && (bs = bc % 4 ? bs * 64 + buffer : buffer,
        bc++ % 4) ? output += String.fromCharCode(255 & bs >> (-2 * bc & 6)) : 0
    ) {
      buffer = chars.indexOf(buffer);
    }

    return output;
  }
};
