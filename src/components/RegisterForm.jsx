import { StyleSheet, View } from 'react-native';
import TODoButton from './TODoButton';
import InputForm from './InputForm';
import { useState } from 'react';
import { URL } from '../data/urls';
import localStorage from '../helpers/localStorage';

const FORM_FIELDS = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const RegisterForm = () => {
  const [formData, setFormData] = useState(FORM_FIELDS);

  const handleChangeText = (key, text) => {
    setFormData({ ...formData, [key]: text });
  };

  const sendDataToRegister = () => {
    if (formData.password === formData.confirmPassword) {
      delete formData.confirmPassword;
      fetch(URL.REGISTER_USER, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(err => console.log({ error: err }));
    } else {
      console.log('password is not confirmed');
      setFormData(FORM_FIELDS);
    }
  };

  return (
    <View style={styles.containerInput}>
      <View style={styles.lastTextInput}>
        <InputForm
          handleChangeText={text => handleChangeText('name', text)}
          value={formData.name}
          Placeholder='Ingrese su nombre completo'
        />
        <InputForm
          handleChangeText={text => handleChangeText('email', text)}
          value={formData.email}
          Placeholder='Ingrese su correo electronico'
        />
        <InputForm
          handleChangeText={text => handleChangeText('password', text)}
          value={formData.password}
          Placeholder='Ingrese una contraseña'
          isHiden={true}
        />
        <InputForm
          handleChangeText={text => handleChangeText('confirmPassword', text)}
          value={formData.confirmPassword}
          Placeholder='Confirmar la contraseña'
          isHiden={true}
        />
      </View>
      <TODoButton text='Registrarse' handleOnpress={sendDataToRegister} />
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
