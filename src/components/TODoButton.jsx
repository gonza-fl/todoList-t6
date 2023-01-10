import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';

const TODoButton = (props) => {
  const { text } = props;
  return (
    <TouchableOpacity style={styles.touchableOpacitybttn}>
      <Text style={styles.txtBttn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TODoButton;

const styles = StyleSheet.create({
  touchableOpacitybttn: {
    flexBasis: 50,
    backgroundColor: '#58d0e0',
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtBttn: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
