import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TODoButton = ({ text, handleOnpress }) => {
  return (
    <TouchableOpacity style={styles.touchableOpacitybttn} onPress={handleOnpress}>
      <LinearGradient colors={['#a00498', '#f7bd56']} 
      start={{x:0,y:0}}
      end={{x:1, y:1 }}
      style={styles.gradient}>
      <Text style={styles.txtBttn}>{text}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default TODoButton;

const styles = StyleSheet.create({
  touchableOpacitybttn: {
    flexBasis: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  txtBttn: {
    color: '#fff',
    fontWeight: 'bold',
  },
  gradient: {
    width: "80%",
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
   },
});
