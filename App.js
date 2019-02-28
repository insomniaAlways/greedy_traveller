import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from './src/screens/AppNavigator';
import { movies } from './store/models/index';
import { getMovies, setMovies } from './store/actions/index';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  state = {
    models: {
      movies: movies
    }
  }
  onNavigationChange = (prevState, newState, action) => {
    console.log(prevState, newState, action)
  }
  render() {
    return <AppContainer
        onNavigationStateChange={this.onNavigationChange}
        uriPrefix="/app"
      />;
  }
}