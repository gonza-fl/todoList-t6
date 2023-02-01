import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import TaskButton from '@components/Tasks/TaskButton';
import Task from '@components/Tasks/Task';
import { LogOutComponent } from '../components/LogOutComponent';
import CreateTaskModal from '../components/Tasks/CreateTaskModal';
import { showMessage } from 'react-native-flash-message';
import localStorage from '../helpers/localStorage';

const ToDoListScreen = ({ navigation }) => {
  const [tasks, setTasks] = useState(null);
  const [targetTask, setTargetTask] = useState({ id: '', title: '', description: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    checkToken();
    renderAllTasks();
  }, []);

  const checkToken = async () => {
    const token = await localStorage.getItem('token');
    if (!token) {
      navigation.navigate('GetStarted');
    }
  };
  const changeTaskState = async (id, completed) => {
    try {
      await clientAxios.put(`${BASE_PATH.TASK}/${id}`, { completed: !completed });
      renderAllTasks();
      showMessage({
        message: 'Actualizacion de estado',
        description: !completed ? 'Tarea completada' : 'Tarea pendiente',
        type: 'info',
        icon: 'info',
      });
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  const handleEdit = (id, title, description) => {
    setIsEdit(true);
    setTargetTask({
      id,
      title,
      description,
    });
    setIsModalVisible(true);
  };

  const renderAllTasks = async () => {
    try {
      const {
        data: { data },
      } = await clientAxios(`${BASE_PATH.TASK}`);
      setTasks(data.reverse());
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
        icon: 'danger',
      });
    }
  };
  const handleDelete = async id => {
    try {
      await clientAxios.delete(`${BASE_PATH.TASK}/${id}`);
      renderAllTasks();
    } catch (error) {
      showMessage({
        message: 'Error',
        description: error.message,
        type: 'danger',
        icon: 'danger',
      });
    }
  };

  return (
    <SafeAreaView
      style={[styles.container, { justifyContent: !tasks?.length ? 'space-around' : 'center' }]}>
      <LogOutComponent />
      {tasks?.length ? (
        <FlatList
          style={styles.flatListContainer}
          data={tasks}
          renderItem={({ item }) => (
            <Task
              // key={i}
              title={item?.title}
              description={item?.description}
              handleDelete={() => handleDelete(item?._id)}
              handleEdit={() => handleEdit(item?._id, item?.title, item?.description)}
              changeTaskState={() => changeTaskState(item?._id, item?.completed)}
              isCompleted={item?.completed}
            />
          )}
          keyExtractor={(_item, i) => i}
        />
      ) : (
        <View>
          <Text style={styles.titulo}>
            No tienes tareas creadas 🤡...
            {'\n'}
            Prueba presionando el boton para crear una nueva tarea 🤠
          </Text>
        </View>
      )}
      <View>
        <TaskButton setIsModalVisible={setIsModalVisible} setIsEdit={setIsEdit} />
      </View>
      <CreateTaskModal
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        renderAllTasks={renderAllTasks}
        targetTask={targetTask}
        setTargetTask={setTargetTask}
        isEdit={isEdit}
        setIsEdit={setIsEdit}
      />
    </SafeAreaView>
  );
};

export default ToDoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161819',
    flex: 1,
  },
  flatListContainer: {
    marginTop: 80,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    top: 50,
    color: '#fff',
  },
});
