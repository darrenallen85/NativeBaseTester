import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';


class MyHeader extends Component {
  constructor(props){
      super(props)
      console.log("constructing MyHeader")
  }

  render(){
    console.log("MyHeader.render()")
    return (
      <View><Text>My Header</Text></View>
    )
  }
}

export default MyHeader;
