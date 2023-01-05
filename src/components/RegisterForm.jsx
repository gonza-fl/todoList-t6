import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

const RegisterForm = () => {
  return (
    <View>
      <TextInput style={styles.texInput} placeholder='Nombre completo' />
      <TextInput style={styles.texInput} placeholder='Correo electronico' />
      <TextInput style={styles.texInput} placeholder='Ingrese una contraseña' />
      <TextInput style={styles.texInput} placeholder='Confirmar contraseña' />
      <TouchableOpacity>
        <Text>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  container: {
    
  },
  texInput: {
    backgroundColor: '#ffffff',
    width: 350,
    borderRadius: 50,
    paddingHorizontal: 50,
  },
});
