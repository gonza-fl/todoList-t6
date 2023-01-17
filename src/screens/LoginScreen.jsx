import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { login } from '@configs/media-url';
import LoginForm from '@components/LoginForm';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textBold, styles.titulo]}> Bienvenido </Text>
      <Image source={{ uri: login }} style={[styles.bgImage, styles.nose]} />
      <Text style= {[styles.subTitulo1]}> Coloca tus datos para ingresar a tu cuenta. </Text>
      <LoginForm navigation={navigation} />
      <Text style= {[styles.subTitulo]}> ¿No tenés una cuenta? </Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={[styles.textBold, styles.color]}>Registrarse</Text>
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
    backgroundColor:'#161819',
  },
  titulo: {
    fontSize: 50,
    marginTop: 30,
    marginBottom: 10,
    color: '#e8e8e9',
  },
  subTitulo: {
    color:'#e8e8e9', 
  },
  subTitulo1: {
    color:'#e8e8e9',
  },
  textBold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#a00498',
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
