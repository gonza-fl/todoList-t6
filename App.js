import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import RegisterScreen from "./src/screens/RegisterScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require("./src/images/elipse.png")}
          style={[styles.bgImage, styles.nose]}
        />
      </View>
      <RegisterScreen />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8e8e8",
  },
  bgImage: {
    position: "absolute",
    top: -100,
    left: -100,
    right: -100,
    bottom: -100,
    resizeMode: "contain",
  },
});
