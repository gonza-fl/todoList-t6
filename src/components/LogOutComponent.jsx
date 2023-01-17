import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import localStorage from '@helpers/localStorage';
import { useNavigation } from '@react-navigation/native';
import { showMessage } from 'react-native-flash-message';

export const LogOutComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLogOut}
      onPress={() => {
        localStorage.removeItem('token');
        navigation.navigate('Login');
        showMessage({
          message: 'Adios! 👋🏽',
          description: 'Usted ha cerrado sesión',
          backgroundColor: '#303030',
          icon: 'info',
        });
      }}>
      <Text style={styles.textDelete}>LogOut</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonLogOut: {
    margin: 10,
    position: 'absolute',
    top: 10,
    right: 8,
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  textDelete: {
    color: '#fff',
  },
});
