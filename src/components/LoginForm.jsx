import { StyleSheet, View } from 'react-native';
import TODoButton from './TODoButton';
import InputForm from './InputForm';
import { useState } from 'react';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import localStorage from '@helpers/localStorage';
import { showMessage } from 'react-native-flash-message';

const LoginForm = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async () => {
    try {
      const {
        data: { token },
      } = await clientAxios.post(BASE_PATH.LOGIN, {
        email,
        password,
      });
      await localStorage.setItem('token', token);
      showMessage({
        message: 'Hola de nuevo! 🧉',
        description: 'Usted ha iniciado sesion',
        backgroundColor: '#303030',
        icon: 'info',
      });
      navigation.navigate('ToDoList');
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <View style={styles.containerInput}>
      <View style={styles.lastTextInput}>
        <InputForm
          Placeholder='Ingrese su correo electrónico'
          handleChangeText={setEmail}
          value={email}
        />
        <InputForm
          Placeholder='Ingrese su contraseña'
          handleChangeText={setPassword}
          value={password}
          isHiden={true}
        />
      </View>
      <TODoButton text='Iniciar sesión' handleOnpress={login} />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'column',
    marginTop: 30,
    width: '90%',
  },
  lastTextInput: {
    marginBottom: 30,
  },
});
