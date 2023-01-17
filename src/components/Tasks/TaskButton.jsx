import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import CreateTaskModal from './CreateTaskModal';

const TaskButton = ({ renderAllTasks }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.taskButton}>
      <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </LinearGradient>
      <CreateTaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        renderAllTasks={renderAllTasks}
      />
    </View>
  );
};

export default TaskButton;

const styles = StyleSheet.create({
  // container global

  taskButton: {
    flexBasis: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },

  // estilos boton

  gradient: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  gradient1: {
    width: 70,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    // marginBottom: 20,
  },
  touchableOpacity: {
    width: 70,
    height: 70,
    borderRadius: 50,
    backgroundColor: '#161819',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity1: {
    width: 60,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#161819',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 50,
    marginBottom: 6,
  },
});
