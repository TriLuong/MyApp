import React, {Component} from 'react';
import {Button, View, SafeAreaView, Text} from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'My Task',
    headerShown: true,
  };

  render() {
    return (
      <View>
        <SafeAreaView />
        <Text>My Task</Text>
        {/* <Button title="Home" onPress={() => {}} /> */}
      </View>
    );
  }
}

export default Home;
