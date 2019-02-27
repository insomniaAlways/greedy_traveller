import React, { Component } from 'React';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
      headerRight: (
        <View style={{margin: 8}}>
          <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
            <Icon size={25} name="fa-bars" color="white"></Icon>
          </TouchableOpacity>
        </View>
      ),
    }
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to movie"
          onPress = {() => this.props.navigation.navigate('Movies')}
        />
      </View>
    )
  }
}