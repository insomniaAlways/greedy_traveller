import React, { Component } from 'React';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class ImageCard extends Component {
  render() {
    debugger
    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={this.props.image} style={styles.image}/>
        </View>
        <View style={styles.detailsCard}>
          <Text style={styles.text}>{this.props.name}</Text>
          <Text style={styles.text}>Time</Text>
          <Text style={styles.text}>Rating</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 250,
    marginTop:10
  },
  imageContainer: {
    paddingLeft: 50
    // flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'center'
  },
  image: {
    width: '85%',
    height: 200
  },
  detailsCard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  text: {
    fontSize: 20,
  }
})