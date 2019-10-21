
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
import { Col, Row, Grid } from "react-native-easy-grid";

export default class Footmap extends Component {

  state = {
    colorFootRed: 'red',
    colorFootBlack: '231f20',
    sersor_r_1: { value: 0, color: 'red' },
    sersor_r_2: { value: 0, color: 'red' },
    sersor_r_3: { value: 0, color: 'red' },
    sersor_r_4: { value: 0, color: 'red' },
    sersor_l_1: { value: 0, color: 'red' },
    sersor_l_2: { value: 0, color: 'red' },
    sersor_l_3: { value: 0, color: 'red' },
    sersor_l_4: { value: 0, color: 'red' }
  }

  setColor = () => {
    this.setState({
      sersor_r_1: { value: 1, color: 'red' },
      sersor_r_2: { value: 1, color: 'red' },
      sersor_r_3: { value: 1, color: 'red' },
      sersor_r_4: { value: 1, color: 'red' },
      sersor_l_1: { value: 1, color: 'red' },
      sersor_l_2: { value: 1, color: 'red' },
      sersor_l_3: { value: 1, color: 'red' },
      sersor_l_4: { value: 1, color: 'red' }
    })
  }


  render() {


    return (
      <View style={styles.container}>
        <HeaderFix title={'Shoes Map'} icon_rigth={'refresh'} onpress_rigth={() => { console.log('test !') }}></HeaderFix>

        <Grid>
          <Col >
            <View style={{ flex: 1 }} >

              <Image
                style={{ width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 10, top: '10%', }}
                source={require('./src/assets/images/foot-left.png')}
              />

              <View style={{ padding: 50, top: '10%' }}>

                <Row style={{ height: '12%' }}>
                  {/* <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View> */}
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '4%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', left: '1%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '5%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '3%', left: '3%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>


              </View>
            </View>
          </Col>
          <Col>
            <View style={{ flex: 1 }}>


              <Image
                style={{ width: '90%', height: '55%', resizeMode: 'stretch', position: 'absolute', left: 15, top: '10%' }}
                source={require('./src/assets/images/foot-right.png')}
              />

              <View style={{ padding: 50, top: '10%' }}>

                <Row style={{ height: '12%' }}>
                  {/* <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
<View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
<View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
<View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
<View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View> */}
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%', left: '2%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.sersor_r_1.value != 0 ? this.state.sersor_r_1.color : this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.sersor_r_2.value != 0 ? this.state.sersor_r_2.color : this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.sersor_r_3.value != 0 ? this.state.sersor_r_3.color : this.state.colorFootBlack }}></View>
                </Row>

                <Row style={{ height: '7%', left: '1%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '7%', right: '4%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                </Row>

                <Row style={{ height: '7%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>

                <Row style={{ height: '3%', left: '3%' }}>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.colorFoot }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, backgroundColor: this.state.sersor_r_4.value != 0 ? this.state.sersor_r_4.color : this.state.colorFootBlack }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                  <View style={{ margin: 2, height: 15, width: 15, }}></View>
                </Row>


              </View>
            </View>
          </Col>
        </Grid>
        <ButtonFix title={'Start'} onPress={() => this.setColor()}/>


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
