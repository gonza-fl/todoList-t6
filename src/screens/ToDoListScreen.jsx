import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';
import TaskButton from '@components/Tasks/TaskButton';
import Task from '../components/Tasks/Task';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  const changeTaskState = async (id, completed) => {
    await clientAxios.put(`${BASE_PATH.TASK}/${id}`, { completed: !completed });
    getAllTasks();
  };

  const getAllTasks = async () => {
    try {
      const {
        data: { data },
      } = await clientAxios(`${BASE_PATH.TASK}`);
      setTasks(data);
    } catch (error) {
      console.log('🚀 ~ file: ToDoListScreen.jsx:18 ~ getAllTasks ~ error', error);
    }
  };
  const handleDelete = async id => {
    try {
      await clientAxios.delete(`${BASE_PATH.TASK}/${id}`);
      getAllTasks();
    } catch (error) {
      console.log('🚀 ~ file: ToDoListScreen.jsx:31 ~ handlePress ~ error', error);
    }
  };

  return (
    <View style={styles.container}>
      {tasks &&
        tasks.map((task, i) => (
          <Task
            key={i}
            title={task.title}
            description={task.description}
            handleDelete={() => handleDelete(task._id)}
            changeTaskState={() => changeTaskState(task._id, task.completed)}
            isCompleted={task.completed}
          />
        ))}
      <View>
        <TaskButton />
      </View>
    </View>
  );
};

export default ToDoListScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#161819',
    flex: 1,
    justifyContent: 'center',
  },
});
