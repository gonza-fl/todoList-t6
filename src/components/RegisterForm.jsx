import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const RegisterForm = () => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese su nombre completo'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese su correo electronico'
      />
      <TextInput
        style={styles.textInput}
        placeholder='Ingrese una contraseña'
      />
      <TextInput
        style={[styles.textInput, styles.lastTextInput]}
        placeholder='Confirmar la contraseña'
      />
      <TouchableOpacity style={styles.touchableOpacitybttn}>
        <Text style={styles.txtBttn}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: "column",
    justifyContent: "space-evenly",
    marginTop: 50,
  },
  textInput: {
    backgroundColor: "#ffffff",
    width: 300,
    borderRadius: 50,
    paddingHorizontal: 50,
    flexBasis: 50,
    margin: 8,
  },
  lastTextInput: {
    marginBottom: 70,
  },
  firstTextInput: {},
  touchableOpacitybttn: {
    flexBasis: 50,
    backgroundColor: "#58d0e0",
    borderRadius: 19,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  txtBttn: {
    color: "#fff",
    fontWeight: "bold",
  },
});
