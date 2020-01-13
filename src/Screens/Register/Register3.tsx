import React, {Component} from 'react';
import {Button, View, SafeAreaView, Text} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        <Text>Register3</Text>
        <Button
          title="Next"
          onPress={() => {
            this.props.navigation.navigate('Register4');
          }}
        />
      </View>
    );
  }
}

export default Home;
