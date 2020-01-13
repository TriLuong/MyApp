import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from '../../Screens/Login';
import Register from './Register';
import HomeTab from './HomeTab';
import Welcome from '../../Screens/Welcome';
import Start from './Start';

const AppNavigator = createStackNavigator(
  {
    Welcome: Start,
    Home: HomeTab,
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  },
);

export default createAppContainer(AppNavigator);
