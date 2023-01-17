import React from 'react'
import { StyleSheet, Text, View, Image} from 'react-native';
import TODoButton from '../components/TODoButton';



const GetStartedScreen = ({ navigation }) => {

    return(
        <View style={styles.container}>
            
             <Image source={require('../components/imgs-nuevas/get-started.png')} style={styles.getImage}/>
            <View style={styles.content}>
           
             <Text style={[styles.textBold, styles.titulo]}>ToDo LIST</Text>
             <Text style={styles.description}>Comienza a crear tus listas de tareas para mantenerte organizado.{'\n'}Si estás listo presiona el siguiente botón... </Text>
            
             <TODoButton text='Comenzar' handleOnpress={() => navigation.navigate('Login')} />
            </View>
             
        </View>
    )

}
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
   
    getImage:{
      position:'absolute',
      resizeMode: 'contain',
      justifyContent: 'center',
      width:420,
      top: -535,
      left: 10,
      right: -100,
      bottom: 0,
      marginBottom: 200,
    },
    titulo: {
      textAlign:"center",
      fontSize: 50,
      top:170,
      marginTop: 80,
      marginBottom: 20,
      color: '#e8e8e9',
    },
  
    description: { 
     textAlign: 'center',
     width:340,
     top:160,
     marginBottom: 200,
     justifyContent: 'center',
     alignItems:'center',
     color:'#e8e8e9', 
     
    },
    textBold: {
      fontWeight: 'bold',
    },
    color: {
      color: '#a00498',
    },
    txtBttn: {
      color: '#fff',
      fontWeight: 'bold',
      },
  });
