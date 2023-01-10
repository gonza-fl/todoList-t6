import { StyleSheet, View } from 'react-native';
import TODoButton from './ToDoButton';
import InputForm from './InputForm';

const RegisterForm = () => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.lastTextInput}>
        <InputForm Placeholder='Ingrese su nombre completo' />
        <InputForm Placeholder='Ingrese su correo electronico' />
        <InputForm Placeholder='Ingrese una contraseña' />
        <InputForm Placeholder='Confirmar la contraseña' />
      </View>
      <TODoButton text='Registrarse' />
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  lastTextInput: {
    marginBottom: 30,
  },
});
