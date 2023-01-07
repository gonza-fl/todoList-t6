import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
            source={require('../images/elipse.png')}
            style={[styles.bgImage, styles.nose]}
          />
      <Text style={[styles.textBold, styles.titulo]}>Bienvenido a Bordo!</Text>
      <Text>
        {" "}
        {/* style={styles.subtitulo} */}
        Vamos ayudarte a cumplir con tus tareas
      </Text>
      <RegisterForm />
      <View style={styles.footer}>
        <Text>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={[styles.textBold, styles.color]} >Inicia sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titulo: {
    fontSize: 20,
    marginTop: 120,
    marginBottom: 20,
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
    fontWeight: "bold",
  },
  color: {
    color: "#58d0e0",
  },
  footer: {
    flexDirection: "row",
  },
});
