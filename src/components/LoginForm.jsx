import { StyleSheet, View } from 'react-native';
import ToDoButton from './TODoButton';
import InputForm from './InputForm';
  
const LoginForm = () => {
  return (
    <View style={styles.containerInput}>
      <View style={styles.lastTextInput}>
        <InputForm Placeholder='Ingrese su correo electrónico' />
        <InputForm Placeholder='Ingrese su contraseña' />
      </View>
      <ToDoButton text='Iniciar Sesion' />

    </View>
  );
};
  
  export default LoginForm;
  
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
  