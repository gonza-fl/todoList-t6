import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const TODoButton = ({ text, handleOnpress }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacitybttn} onPress={handleOnpress}>
      <Text style={styles.txtBttn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default TODoButton;

const styles = StyleSheet.create({
  touchableOpacitybttn: {
    flexBasis: 50,
    backgroundColor: '#58d0e0',
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtBttn: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
