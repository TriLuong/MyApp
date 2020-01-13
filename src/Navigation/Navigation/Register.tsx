import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {createStackNavigator} from 'react-navigation-stack';

import {
  Register1,
  Register2,
  Register3,
  Register4,
} from '../../Screens/Register';

const RegisterNavigator = createStackNavigator(
  {
    Register1: {
      screen: Register1,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
              <Text>Back</Text>
            </TouchableOpacity>
          );
        },
      }),
    },
    Register2: {
      screen: Register2,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          );
        },
      }),
    },
    Register3: {
      screen: Register3,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          );
        },
      }),
    },
    Register4: {
      screen: Register4,
      navigationOptions: ({navigation}) => ({
        headerLeft: () => {
          return (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text>Back</Text>
            </TouchableOpacity>
          );
        },
      }),
    },
  },
  {
    initialRouteName: 'Register1',
    // headerMode: 'none',
  },
);

export default RegisterNavigator;
