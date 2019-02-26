import React, { Component } from 'React';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  // componentDidMount() {
  //   this.props.navigation.setParams({ increaseCount: this._increaseCount, count: this.state.count });
  // }

  state = {
    count: 0,
  };

  // _increaseCount = () => {
  //   this.setState({ count: this.state.count + 1 });
  // };

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