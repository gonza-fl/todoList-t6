import RegisterScreen from './src/screens/RegisterScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import GetStartedScreen from './src/screens/GetStartedScreen';
import { LogBox } from 'react-native';
import ToDoListScreen from './src/screens/ToDoListScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  LogBox.ignoreLogs(['Remote debugger']);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='GetStarted'
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='GetStarted' component={GetStartedScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='ToDoList' component={ToDoListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
