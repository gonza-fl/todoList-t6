import { TextInput, StyleSheet } from 'react-native';

const InputForm = ({ Placeholder, handleChangeText, value, isHiden = false }) => {
  return (
    <TextInput
      style={styles.textInput}
      placeholder={Placeholder}
      onChangeText={handleChangeText}
      value={value}
      secureTextEntry={isHiden}
    />
  );
};

export default InputForm;

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: '#ffffff',
    width: 'auto',
    borderRadius: 50,
    paddingHorizontal: 20,
    flexBasis: 50,
    margin: 8,
  },
});
