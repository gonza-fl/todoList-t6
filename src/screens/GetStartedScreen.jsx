import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
//import {onboarding, elipse} from '../data/media-url';
import images from '../data/media-url'
import {Dimensions} from 'react-native';
//import ToDoButton from './components/TODoButton';
import ToDoButton from '../components/TODoButton';

//<ToDoButton text='Comenzar' />


const GetStartedScreen =() =>{

    const navigation= useNavigation();


    return(
        <View style={styles.container}>
             <Image source={{ uri: images.elipse }} style={styles.bgImage} />
             <Image source={{uri: images.onboarding}}/>
            <View style={styles.content}>
           
             <Text style={[styles.textBold, styles.titulo]}>Hacé tus cosas con ToDo</Text>
             <Text style={styles.description}>Comienza a crear tus listas de tarea presionando el siguiente botón </Text>
            
             <ToDoButton text="Comenzar" onPress={() => navigation.navigate("Login")} />
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
      fontSize: 20,
      marginTop: 120,
      marginBottom: 20,
    },
    bgImage: {
      width: 200,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 700,
      resizeMode: 'contain',
    },
    description: {
     marginBottom: 20,
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