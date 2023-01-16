import { Modal, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import InputForm from './InputForm';

const TaskButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.taskButton}>
      <LinearGradient colors={['#ffe100', '#ff4d00', '#ff0000']} style={styles.gradient}>
        <TouchableOpacity style={styles.touchableOpacity} onPress={() => setIsModalVisible(true)}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </LinearGradient>
      <Modal
        animationType='slide'
        transparent={true}
        visible={isModalVisible}
        onRequestClose={() => setIsModalVisible(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Tarea</Text>

            <InputForm style={styles.input} Placeholder='Task name' />
            <InputForm style={styles.input} Placeholder='Task Description' />
            <View style={styles.buttonsContainer}>
              <LinearGradient colors={['#ffe100', '#ff4d00', '#ff0000']} style={styles.gradient1}>
                <TouchableOpacity
                  style={styles.touchableOpacity1}
                  onPress={() => setIsModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Cerrar</Text>
                </TouchableOpacity>
              </LinearGradient>
              <LinearGradient colors={['#ffe100', '#ff4d00', '#ff0000']} style={styles.gradient1}>
                <TouchableOpacity
                  style={styles.touchableOpacity1}
                  onPress={() => setIsModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Guardar</Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </Modal>
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
