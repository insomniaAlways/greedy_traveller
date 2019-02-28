import { createStackNavigator, createDrawerNavigator } from "react-navigation";
import HomeScreen from './HomeScreen/index';
import MovieScreen from './MovieScreens/index';

const stackHeaderDefaultConfiguration = {
  headerStyle: {
    backgroundColor: '#3BA0FF',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
}

const MoviesStackNavigator = createStackNavigator(
  {
    Movies: MovieScreen
  },
  {
    initialRouteName: "Movies",
    defaultNavigationOptions: stackHeaderDefaultConfiguration
  }
)

const HomeStackNavigator = createStackNavigator(
  {
    Root: HomeScreen
  },
  {
    initialRouteName: "Root",
    defaultNavigationOptions: stackHeaderDefaultConfiguration
  }
)

const AppNavigator = createDrawerNavigator(
  {
    Home:  HomeStackNavigator,
    Movies: MoviesStackNavigator,
  }, {
    initialRouteName: 'Movies'
  }
);

export default AppNavigator;