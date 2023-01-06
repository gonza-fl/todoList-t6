import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import RegisterForm from "../components/RegisterForm";

const RegisterScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={[styles.textBold, styles.titulo]}>Bienvenido a Bordo!</Text>
      <Text>
        {" "}
        {/* style={styles.subtitulo} */}
        Vamos ayudarte a cumplir con tus tareas
      </Text>
      <RegisterForm />
      <View style={styles.lol}>
        <Text>¿Ya tienes una cuenta? </Text>
        <TouchableOpacity>
          <Text style={[styles.textBold, styles.color]}>Inicia sesión</Text>
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
  // subtitulo: {
  //   marginBottom: 20,
  // },
  textBold: {
    fontWeight: "bold",
  },
  color: {
    color: "#58d0e0",
  },
  lol: {
    flexDirection: "row",
  },
});
