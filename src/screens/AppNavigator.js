import { createStackNavigator } from "react-navigation";
import HomeScreen from './HomeScreen/index';
import MovieScreen from './MovieScreens/index';

const AppNavigator = createStackNavigator(
  {
    Home:  HomeScreen,
    Movies: MovieScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3BA0FF',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default AppNavigator;