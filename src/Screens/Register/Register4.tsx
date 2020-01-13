import React, {Component} from 'react';
import {Button, View, SafeAreaView, Text} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        <Text>Register4</Text>
        <Button
          title="Next"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default Home;
