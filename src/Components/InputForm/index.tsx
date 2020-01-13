import React, {Component} from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

class InputForm extends Component {
  render() {
    const {text, ...all} = this.props;
    return (
      <View>
        <Text>{text}</Text>
        <TextInput {...all} style={styles.inputForm} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputForm: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
  },
});

export default InputForm;
