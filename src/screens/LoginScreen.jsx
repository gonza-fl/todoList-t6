import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { login } from '../data/media-url';
import LoginForm from '../components/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textBold, styles.titulo]}>¡Bienvenido de vuelta!</Text>
      <Image source={{ uri: login }} style={[styles.bgImage, styles.nose]} />
      <LoginForm />
      <Text> ¿Olvidaste tu contraseña? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.textBold, styles.color]}>Recuperar contraseña</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    marginTop: 20,
    marginBottom: 80,
  },
  textBold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#58d0e0',
  },
  bgImage: {
    position: 'absolute',
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    resizeMode: 'contain',
  },
});
