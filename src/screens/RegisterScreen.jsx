import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import RegisterForm from '@components/RegisterForm';
import { elipse } from '@configs/media-url';

const RegisterScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: elipse }} style={[styles.bgImage, styles.nose]} />
      <Text style={[styles.textBold, styles.titulo]}>Te damos la bienvenida, </Text>
      <Text style={[styles.subTitulo]}>
        registrate para que te ayudemos a cumplir con tus tareas.
      </Text>

      <RegisterForm navigation={navigation} />
      <View style={styles.footer}>
        <Text style={[styles.subTitulo]}>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textBold, styles.color]}> Inicia sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ToDoList')}></TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#161819',
  },
  titulo: {
    fontSize: 30,
    marginTop: 120,
    marginBottom: 10,
    color: '#e8e8e9',
  },
  subTitulo: {
    color: '#e8e8e9',
  },
  bgImage: {
    position: 'absolute',
    top: -100,
    left: -100,
    right: -100,
    bottom: -100,
    resizeMode: 'contain',
  },
  textBold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#a00498',
  },
  footer: {
    flexDirection: 'row',
  },
});
