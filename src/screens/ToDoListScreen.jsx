import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import TaskButton from '@components/Tasks/TaskButton';
import Task from '@components/Tasks/Task';
import { LogOutComponent } from '../components/LogOutComponent';
import CreateTaskModal from '../components/Tasks/CreateTaskModal';
import { showMessage } from 'react-native-flash-message';

const ToDoListScreen = ({ navigation, isLoggedIn }) => {
  const [tasks, setTasks] = useState(null);
  const [targetTask, setTargetTask] = useState({ id: '', title: '', description: '' });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    checkToken();
    renderAllTasks();
  }, []);

  const checkToken = async () => {
    if (!isLoggedIn) navigation.navigate('GetStarted');
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
    <View
      style={[styles.container, { justifyContent: !tasks?.length ? 'space-around' : 'center' }]}>
      <LogOutComponent />
      {tasks?.length ? (
        <ScrollView style={styles.containerScrollView}>
          {tasks &&
            tasks.map((task, i) => (
              <Task
                key={i}
                title={task.title}
                description={task.description}
                handleDelete={() => handleDelete(task._id)}
                handleEdit={() => handleEdit(task._id, task.title, task.description)}
                changeTaskState={() => changeTaskState(task._id, task.completed)}
                isCompleted={task.completed}
              />
            ))}
        </ScrollView>
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
      />
    </View>
  );
};

export default ToDoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161819',
    flex: 1,
  },
  containerScrollView: {
    marginTop: 80,
  },
  titulo: {
    textAlign: 'center',
    fontSize: 25,
    top: 50,
    color: '#fff',
  },
});
