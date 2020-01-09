import React, {Component} from 'react';
import {View, SafeAreaView, Text, Button} from 'react-native';

class Login extends Component {
  // static navigationOptions = {
  //   title: 'Login',
  //   header: () => (
  //     <SafeAreaView>
  //       <Text>23434rwer</Text>
  //     </SafeAreaView>
  //   ),
  //   headerShown: true,
  // };

  render() {
    return (
      <View>
        <SafeAreaView />
        <Button
          title="Login"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
      </View>
    );
  }
}

export default Login;
