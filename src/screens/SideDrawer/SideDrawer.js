import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

class SideDrawer extends Component {
  static navigationOptions = ({ navigation }) => {
    return Promise.resolve({
      icon: Icons.getImageSource('menu', 30, '#fff')
    }).then((icon) => {
      return {
        drawerLabel: 'SideDrawer',
        drawerIcon: icon.icon
      }
    })
  };   
  
  render () {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.selectedTab('HomeScreen')}>
          <View style={styles.drawerItems}>
            <Icons name={Platform.OS == 'android' ? "md-log-out" : "ios-log-out"}
            size={30} 
            color="#bbb" 
            style={styles.drawerItemIcons}/>
            <Text>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.selectedTab('MovieScreen')}>
          <View style={styles.drawerItems}>
            <Icons name={Platform.OS == 'android' ? "md-log-out" : "ios-log-out"}
            size={30} 
            color="#bbb" 
            style={styles.drawerItemIcons}/>
            <Text>Movies</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    width: Dimensions.get('window').width * 0.8,
    backgroundColor: 'white',
    flex: 1
  },
  drawerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#eee'
  },
  drawerItemIcons:{
    marginRight: 10
  }
})

export default SideDrawer;