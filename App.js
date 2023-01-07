import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <StatusBar style='auto' /> */}
        {/* <View>
          <Image
            source={require('./src/images/elipse.png')}
            style={[styles.bgImage, styles.nose]}
          />
        </View> */}
        {/* <View style={styles.container}> */}
          <Stack.Screen name='Register' component={RegisterScreen} />
          <Stack.Screen name='Login' component={LoginScreen} />
        {/* </View> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e8e8',
  },
});
