import React, { Component } from 'React';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getMovies } from '../../../store/actions/index';
import { movies } from '../../../store/models/index'
import ListView from '../../components/ListView/ListView'

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

  state = {
    model: movies
  }

  itemSelectedHandler = (args) => {

  }

  componentDidMount() {
    Promise.resolve(getMovies())
    .then(() => {
      this.setState({
        model: movies
      })
    })
  }
  render() {
    return (
      <View>
        <ListView values={this.state.model}/>
      </View>
    )
  }
}