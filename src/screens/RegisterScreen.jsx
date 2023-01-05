import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Bienvenido a bordo!</Text>
      <Text>Dejanos ayudarte a encontrate con tus tareas</Text>
      <RegisterForm />
      <Text>Te ayudamos a organizar tus tareas</Text>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
