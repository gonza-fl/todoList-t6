import { TextInput, StyleSheet } from 'react-native';

import React from 'react';

const InputForm = prop => {
  const { Placeholder } = prop;
  return <TextInput style={styles.textInput} placeholder={Placeholder} />;
};

export default InputForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 50,
    flexBasis: 50,
    margin: 8,
  },
});
