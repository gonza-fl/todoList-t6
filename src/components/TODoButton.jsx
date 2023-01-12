import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const ToDoButton = ({ text, handleOnpress }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacitybttn} onPress={handleOnpress}>
      <Text style={styles.txtBttn}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ToDoButton;

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
