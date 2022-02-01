import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import OnBoardingScreen from './src/screens/OnBoardingScreen';
import ComponentsScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import TextScreen from './src/screens/TextScreen';
import HomeScreen from './src/screens/HomeScreen';
import MovieDetail from './src/screens/MovieDetailScreen';
import SplashScreen from './src/screens/SplashScreen';

const navigator = createStackNavigator(
  {
    Splash: SplashScreen,
    OnBoarding: OnBoardingScreen,
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    MovieDetail: MovieDetail,
  },
  {
    initialRouteName: 'Splash',
    defaultNavigationOptions: {
      title: 'App',
    },
     headerMode: 'none'
  }
);

export default createAppContainer(navigator);
