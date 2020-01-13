import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {createStackNavigator} from 'react-navigation-stack';

import Welcome from '../../Screens/Welcome';
import Login from '../../Screens/Login';
import Register from './Register';

const loginStart = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: ({navigation}) => ({
        title: 'new login',
        headerBackTitleVisible: true,
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <Text>Back</Text>
            </TouchableOpacity>
          );
        },
        headerBackTitleStyle: {
          color: 'red',
        },
        headerTitleStyle: {
          color: 'red',
        },
      }),
    },
    Register: {
      screen: Register,
      navigationOptions: ({navigation}) => ({
        headerBackTitleVisible: false,
      }),
    },
  },
  {
    initialRouteName: 'Login',
    // headerMode: 'none',
  },
);

const RegisterNavigator = createStackNavigator(
  {
    Welcome,
    Login: loginStart,
    Register,
  },
  {
    initialRouteName: 'Welcome',
    headerMode: 'none',
  },
);

export default RegisterNavigator;
