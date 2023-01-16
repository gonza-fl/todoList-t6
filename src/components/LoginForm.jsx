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

  const login = () => {
    clientAxios
      .post(
        BASE_PATH.LOGIN,
        JSON.stringify({
          email,
          password,
        }),
      )
      .then(({ data: { token } }) => {
        localStorage.setItem('token', token);
        navigation.navigate('ToDoList');
      })
      .catch(err => console.log({ error: err }));
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
      <TODoButton text='Iniciar Sesion' handleOnpress={login} />
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
