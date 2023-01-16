import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import clientAxios from '@configs/clientAxios';
import { BASE_PATH } from '@configs/api-url';
import InputForm from '../InputForm';

const INITIAL_DATA = {
  title: '',
  description: '',
};

export default function CreateTaskModal({ isModalVisible, setIsModalVisible, renderAllTasks }) {
  const [taskData, setTaskData] = useState({
    title: '',
    description: '',
  });

  const handleOnChange = (key, text) => {
    setTaskData({ ...taskData, [key]: text });
  };

  const createTask = async () => {
    setIsModalVisible(false);
    if (taskData.title.length) {
      await clientAxios.post(`${BASE_PATH.TASK}`, taskData);
      renderAllTasks();
    }
  };
  const createTaskCanceled = () => {
    setTaskData(INITIAL_DATA);
    setIsModalVisible(false);
  };
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={isModalVisible}
      onRequestClose={() => setIsModalVisible(false)}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.modalTitle}>Tarea</Text>
          <InputForm
            style={styles.input}
            Placeholder='Titulo'
            handleChangeText={text => handleOnChange('title', text)}
          />
          <InputForm
            style={styles.input}
            Placeholder='Descripcion de la tarea'
            handleChangeText={text => handleOnChange('description', text)}
          />
          <View style={styles.buttonsContainer}>
            <LinearGradient colors={['#ffe100', '#ff4d00', '#ff0000']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={createTaskCanceled}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['#ffe100', '#ff4d00', '#ff0000']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={createTask}>
                <Text style={styles.closeButtonText}>Guardar</Text>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  // modal pop-up
  text: {
    color: '#fff',
    fontSize: 30,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  modalContent: {
    width: '75%',
    backgroundColor: '#161819',
    padding: 20,
    borderRadius: 20,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 1.22,
    shadowRadius: 4.22,
    elevation: 2,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  buttonsContainer: {
    // flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 'auto',
  },
  closeButton: {
    backgroundColor: '#161819',
    padding: 10,
    borderRadius: 5,
    margin: 20,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
});
