import React, {Component} from 'react';
import {Button, View, SafeAreaView, Text} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View>
        <SafeAreaView />
        <Text>Register1</Text>
        <Button
          title="Next"
          onPress={() => {
            this.props.navigation.navigate('Register2');
          }}
        />
      </View>
    );
  }
}

export default Home;
