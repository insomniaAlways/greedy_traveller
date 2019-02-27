import React, { Component } from 'React';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MovieScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Movies',
      headerRight: (
        <View style={{margin: 8}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon name="ios-menu" size={28} color="#fff" />
          </TouchableOpacity>
        </View>
      ),
    }
  };
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Movies Screen</Text>
      </View>
    )
  }
}