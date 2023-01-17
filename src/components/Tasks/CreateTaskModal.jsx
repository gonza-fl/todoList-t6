import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import clientAxios from '@configs/clientAxios';
import { BASE_PATH } from '@configs/api-url';
import InputForm from '../InputForm';
import { showMessage } from 'react-native-flash-message';

const INITIAL_DATA = {
  title: '',
  description: '',
};

export default function CreateTaskModal({
  setIsModalVisible,
  renderAllTasks,
  isModalVisible,
  targetTask,
  setTargetTask,
  isEdit,
}) {
  const [taskData, setTaskData] = useState(INITIAL_DATA);
  const handleOnChange = (key, text) => {
    setTargetTask({ ...targetTask, [key]: text });
    setTaskData({ ...taskData, [key]: text });
  };

  const handlePress = async () => {
    try {
      if (targetTask.title.length) {
        if (!isEdit) {
          await create(taskData);
          showMessage({
            message: 'Genial',
            description: 'Tarea creada con exito',
            type: 'success',
            icon: 'sucess',
          });
        }
        if (isEdit) {
          await edit(targetTask);
          showMessage({
            message: 'Genial',
            description: 'Tarea actualizada con exito',
            type: 'success',
            icon: 'sucess',
          });
        }
        renderAllTasks();
      } else {
        showMessage({
          message: 'Error',
          description: 'El nombre de la task no puede estar vacio',
          type: 'danger',
          icon: 'danger',
        });
      }
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
        icon: 'danger',
      });
    } finally {
      closeModal();
    }
  };
  const create = data => clientAxios.post(BASE_PATH.TASK, data);
  const edit = data => clientAxios.put(`${BASE_PATH.TASK}/${targetTask.id}`, data);
  const closeModal = () => {
    setTaskData(INITIAL_DATA);
    setTargetTask({ ...INITIAL_DATA, id: '' });
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
            value={isEdit ? targetTask.title : taskData.title}
          />
          <InputForm
            style={styles.input}
            Placeholder='Descripcion de la tarea'
            handleChangeText={text => handleOnChange('description', text)}
            value={isEdit ? targetTask.description : taskData.description}
          />
          <View style={styles.buttonsContainer}>
            <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={closeModal}>
                <Text style={styles.closeButtonText}>Cerrar</Text>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient1}>
              <TouchableOpacity style={styles.touchableOpacity1} onPress={handlePress}>
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
  gradient1: {
    width: 70,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  touchableOpacity1: {
    width: 60,
    height: 30,
    borderRadius: 6,
    backgroundColor: '#161819',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
