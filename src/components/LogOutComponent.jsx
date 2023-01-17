import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import localStorage from '@helpers/localStorage';
import { useNavigation } from '@react-navigation/native';

export const LogOutComponent = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.buttonLogOut}
      onPress={() => {
        localStorage.removeItem('key');
        navigation.navigate('Login');
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
