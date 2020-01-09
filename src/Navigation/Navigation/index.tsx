import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../../Screens/Login';
import HomeTab from './HomeTab';

const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Home: HomeTab,
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
