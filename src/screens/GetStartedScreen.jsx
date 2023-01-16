import { StyleSheet, Text, View, Image } from 'react-native';
import images from '@configs/media-url';
import TODoButton from '@components/TODoButton';

const GetStartedScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: images.elipse }} style={styles.bgImage} />
      <Image source={{ uri: images.onboarding }} style={styles.getImage} />
      <View style={styles.content}>
        <Text style={[styles.textBold, styles.titulo]}>      Hacé tus cosas con ToDo</Text>
        <Text style={styles.description}>
          Esta aplicación te permitirá crear listas de tareas para mantenerte organizado.{'\n'}Si estás listo
          presiona el siguiente botón...{' '}
        </Text>

        <TODoButton text='Comenzar' handleOnpress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
};
export default GetStartedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#161819',
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  titulo: {
    fontSize: 30,
    top: 90,
    marginTop: 150,
    marginBottom: 40,
    color: '#e8e8e9',
  },
  bgImage: {
    width: 250,
    position: 'absolute',
    top: -100,
    left: -70,
    right: 0,
    bottom: 700,
    resizeMode: 'contain',
  },
  getImage: {
    position: 'absolute',
    resizeMode: 'contain',
    width: 180,
    top: -180,
    left: 120,
    right: -100,
    bottom: -100,
    marginBottom: 200,
  },
  description: {
    fontSize: 20,
    textAlign: 'center',
    width: 340,
    top: 80,
    marginBottom: 200,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#e8e8e9',
    
  },
  textBold: {
    fontWeight: 'bold',
  },
  color: {
    color: '#58d0e0',
  },
  txtBttn: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
