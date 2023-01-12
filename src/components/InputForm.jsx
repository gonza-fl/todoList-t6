import { TextInput, StyleSheet } from 'react-native';

const InputForm = props => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={props.Placeholder}
      onChangeText={props.handleChangeText}
      value={props.value}
      secureTextEntry={props.isSecure}
    />
  );
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
