import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import {onboarding, elipse} from '../data/media-url';
import images from '../data/media-url'

import ToDoButton from '../components/TODoButton';




const GetStartedScreen =() =>{

    const navigation= useNavigation();


    return(
        <View style={styles.container}>
             <Image source={{ uri: images.elipse }} style={styles.bgImage} />
             <Image source={{uri: images.onboarding}} style={styles.getImage}/>
            <View style={styles.content}>
           
             <Text style={[styles.textBold, styles.titulo]}>Hacé tus cosas con ToDo</Text>
             <Text style={styles.description}>Comienza a crear tus listas de tareas para mantenerte organizado.{'\n'}Si estás listo presiona el siguiente botón... </Text>
            
             <ToDoButton text='Comenzar' onPress={() => navigation.navigate('Login')} />
            </View>
             
        </View>
    )

}
export default GetStartedScreen;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    content: {
      flexDirection: 'column',
      justifyContent: 'space-evenly',
      marginTop: 30,
    },
    titulo: {
      fontSize: 28,
      top:90,
      marginTop: 80,
      marginBottom: 20,
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
    getImage:{
      width:50,
      position:'absolute',
      resizeMode: 'contain',
      width:180,
      top: -180,
      left: 120,
      right: -100,
      bottom: -100,
      marginBottom: 200,
    },
    description: { 
     textAlign: 'center',
     width:340,
     top:80,
     marginBottom: 200,
     justifyContent: 'center',
     alignItems:'center',
     
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