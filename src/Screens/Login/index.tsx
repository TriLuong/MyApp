import React, {Component} from 'react';
import {View, SafeAreaView, Text, Button, TextInput} from 'react-native';
import {Formik} from 'formik';

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

  onChange = (event: any) => {
    console.log('event', event.nativeEvent);
  };

  render() {
    return (
      <View>
        <SafeAreaView />
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={values => console.log(values)}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <Text>Username</Text>
              <TextInput
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                autoCapitalize="none"
              />
              <Text>Password</Text>
              <TextInput
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                autoCapitalize="none"
              />
              <Button onPress={handleSubmit} title="Login" />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

export default Login;
