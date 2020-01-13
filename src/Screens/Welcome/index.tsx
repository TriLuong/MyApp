import React, {Component} from 'react';
import {Button, View, SafeAreaView, Text} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        <Text>Welcome</Text>
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Login');
          }}
        />
        <Button
          title="Register"
          onPress={() => {
            this.props.navigation.navigate('Register');
          }}
        />
      </View>
    );
  }
}

export default Home;
