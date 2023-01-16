import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.incompleteBar}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Título</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum voluptate placeat
            tenetur vel mollitia possimus, vero ipsam cum voluptates incidunt quidem laborum tempore
            molestiae necessitatibus dolorum repudiandae vitae! Voluptatum.
          </Text>
        </View>
        <View style={styles.margin}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.white}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.white}>Borrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              style={styles.switch}
              trackColor={{ true: '#00bfff', false: '#ccc' }}
              thumbColor='#fff'
            />
          </View>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <LinearGradient
          // Button Linear Gradient
          colors={['#ffe100', '#ff4d00', '#ff0000']}
          style={styles.completeBar}></LinearGradient>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Título</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum voluptate placeat
            tenetur vel mollitia possimus, vero ipsam.
          </Text>
        </View>
        <View style={styles.margin}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text style={styles.white}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text style={styles.white}>Borrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              style={styles.switch}
              trackColor={{ true: '#fd3333', false: '#ccc' }}
              thumbColor='#fff'
              value={true}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundImage: 'linear-gradient(#fff, #ccc)',
    justifyContent: 'center',
  },
  completeBar: {
    height: '100%',
    width: 10,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  incompleteBar: {
    height: 'auto',
    width: 10,
    backgroundColor: '#ccc',
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
  },
  cardContainer: {
    flexDirection: 'row',
    backgroundColor: '#161819',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1.22,
    shadowRadius: 4.22,
    elevation: 2,
  },
  textContainer: {
    flex: 1,
    marginLeft: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 15,
    color: 'white',
  },
  description: {
    fontSize: 16,
    marginBottom: 53,
    color: 'white',
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 3,
  },
  switchContainer: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10,
  },
  button1: {
    margin: 10,
    position: 'absolute',
    top: 0,
    right: 50,
    backgroundColor: '#4a4a4a',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  button2: {
    margin: 10,
    position: 'absolute',
    top: 0,
    right: -15,
    backgroundColor: '#fd3333',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  switch: {
    position: 'absolute',
    bottom: 0,
  },
  white: {
    color: 'white',
  },
  margin: {
    marginRight: 10,
  },
});
