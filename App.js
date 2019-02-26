import React from "react";
import { createAppContainer } from "react-navigation";
import AppNavigator from './src/screens/AppNavigator';

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
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