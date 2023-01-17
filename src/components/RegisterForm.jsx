import { StyleSheet, View } from 'react-native';
import TODoButton from './TODoButton';
import InputForm from './InputForm';
import { useState } from 'react';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import localStorage from '@helpers/localStorage';

const FORM_FIELDS = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const ONLY_LETTERS_AND_NUMBERS = /^[a-zA-Z0-9\s]*$/;

const IS_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const RegisterForm = ({ navigation }) => {
  const [formData, setFormData] = useState(FORM_FIELDS);

  const handleChangeText = (key, text) => {
    setFormData({ ...formData, [key]: text });
  };
  const handleChangeInputName = (key, text) => {
    if (ONLY_LETTERS_AND_NUMBERS.test(text)) {
      setFormData({ ...formData, [key]: text });
    } else {
      showMessage({
        message: 'Error',
        description: 'El nombre no puede contener caracteres especiales',
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  const sendDataToRegister = async () => {
    if (!formData.name || !formData.email || !formData.password) {
      showMessage({
        message: 'Error',
        description: 'No puede haber campos vacios',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }
    if (!IS_EMAIL.test(formData.email)) {
      showMessage({
        message: 'Error',
        description: 'Formato de correo electronico no valido',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }

    if (formData.password.length < 7) {
      showMessage({
        message: 'Error',
        description: 'La contraseña debe contener 7 caracteres o más',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      showMessage({
        message: 'Error',
        description: 'Las contraseñas no coinciden',
        type: 'danger',
        icon: 'danger',
      });
      return;
    }
    delete formData.confirmPassword;
    try {
      const {
        data: { token },
      } = await clientAxios.post(BASE_PATH.REGISTER_USER, formData);
      localStorage.setItem('token', token);
      setFormData(FORM_FIELDS);
      showMessage({
        message: 'Exito',
        description: 'Se ha registrado exitosamente',
        type: 'success',
        icon: 'success',
      });
      navigation.navigate('Login');
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <>
      <View style={styles.containerInput}>
        <View style={styles.lastTextInput}>
          <InputForm
            handleChangeText={text => handleChangeInputName('name', text)}
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
    </>
  );
};

export default RegisterForm;

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
