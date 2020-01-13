import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView, Text, Button, TextInput} from 'react-native';
import {Formik} from 'formik';
import {actions} from '../../Store';
import InputForm from '../../Components/InputForm';
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
    console.tron('event', event.nativeEvent);
  };

  onSubmit = values => {
    console.log('values', values);
    const {doLogin} = this.props;
    doLogin(values);
    this.props.navigation.navigate('Home');
  };

  render() {
    const {authReducer} = this.props;
    console.log('authReducer', authReducer);
    return (
      <View>
        <SafeAreaView />
        <Formik
          initialValues={{email: '', password: ''}}
          onSubmit={this.onSubmit}>
          {({handleChange, handleBlur, handleSubmit, values}) => (
            <View>
              <InputForm
                text="Username"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
                autoCapitalize="none"
              />

              <InputForm
                text="Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                autoCapitalize="none"
              />

              <Button onPress={handleSubmit} title="Login" />
              <Button
                onPress={() => this.props.navigation.navigate('Register')}
                title="Register"
              />
            </View>
          )}
        </Formik>
      </View>
    );
  }
}

const mapStateToProps = ({authReducer}: any) => {
  return {authReducer};
};

const mapDispatchToProps = dispatch => {
  return {
    doLogin: (evt: any) => dispatch(actions.login(evt)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
