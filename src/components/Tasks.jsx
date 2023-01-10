import { StyleSheet, Text, View, TouchableOpacity, Switch } from 'react-native';

export default function Tasks() {
  return (
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <View style={styles.incompleteBar}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Tarea incompleta</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum voluptate placeat
            tenetur vel mollitia possimus, vero ipsam cum voluptates incidunt quidem laborum tempore
            molestiae necessitatibus dolorum repudiandae vitae! Voluptatum.
          </Text>
        </View>
        <View style={styles.margin}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text>Borrar</Text>
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
        <View style={styles.completeBar}></View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Tarea completa</Text>
          <Text style={styles.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum voluptate placeat
            tenetur vel mollitia possimus, vero ipsam. or sit amet consectetur adipisicing elit.
            Fugit nostrum voluptate placeat tenetur vel moll
          </Text>
        </View>
        <View style={styles.margin}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button1}>
              <Text>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
              <Text>Borrar</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.switchContainer}>
            <Switch
              style={styles.switch}
              trackColor={{ true: '#00bfff', false: '#ccc' }}
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
    backgroundColor: '#00bfff',
    borderBottomStartRadius: 10,
    borderTopStartRadius: 10,
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
    backgroundColor: '#fff',
    margin: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
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
  },
  description: {
    fontSize: 16,
    marginBottom: 53,
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
    backgroundColor: '#bdbdbd',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  button2: {
    margin: 10,
    position: 'absolute',
    top: 0,
    right: -15,
    backgroundColor: '#de0000be',
    paddingHorizontal: 10,
    padding: 5,
    borderRadius: 10,
  },
  switch: {
    position: 'absolute',
    bottom: 0,
  },
  margin: {
    marginRight: 10,
  },
});
