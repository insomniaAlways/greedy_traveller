import React, { Component } from 'React';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home',
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
        <Text>Home Screen</Text>
        <Button
          title="Go to movie"
          onPress = {() => this.props.navigation.navigate('Movies')}
        />
      </View>
    )
  }
}