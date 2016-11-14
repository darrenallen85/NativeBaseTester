/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import {  Container} from 'native-base';
import React, { Component } from 'react';
import {
  View,
} from 'react-native';

import MyHeader from './MyHeader';



class App extends Component {
  constructor(props){
    super(props)
    console.log("constructing app")
  }

  componentWillMount(){
    console.log("app: component will mount")
  }

  render() {
    const a= <Container>
            <MyHeader/>
          </Container>
    const b= <View>
            <MyHeader/>
          </View>
    return b
  }

}
export default App;
