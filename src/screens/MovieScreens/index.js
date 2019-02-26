import React, { Component } from 'React';
import { View, Text, Button } from 'react-native';

export default class MovieScreen extends Component {
  static navigationOptions = {
    title: 'Movies'
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movies Screen</Text>
      </View>
    )
  }
}