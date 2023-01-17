import { StyleSheet, View } from 'react-native';
import TODoButton from './TODoButton';
import InputForm from './InputForm';
import { useState } from 'react';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import localStorage from '@helpers/localStorage';

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
      navigation.navigate('ToDoList');
    } catch (error) {
      console.log('🚀 ~ file: LoginForm.jsx:26 ~ login ~ error', error);
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
