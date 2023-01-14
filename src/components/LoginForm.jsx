import { StyleSheet, View } from 'react-native';
import TODoButton from './TODoButton';
import InputForm from './InputForm';
import { useState } from 'react';
import { URL } from '../data/urls';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    fetch(URL.LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then(data => data.json())
      .then(json => console.log(json))
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
