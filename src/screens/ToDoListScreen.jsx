import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getAllTasks();
  }, []);

  const handleDelete = async id => {
    try {
      await clientAxios.delete(`${BASE_PATH.TASK}/${id}`);
      getAllTasks();
    } catch (error) {
      console.log('🚀 ~ file: ToDoListScreen.jsx:31 ~ handlePress ~ error', error);
    }
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

  return (
    <View style={styles.container}>
      {tasks &&
        tasks.map((task, i) => (
          <View key={task._id}>
            <Text>{task.description}</Text>
            <Button title='delete' onPress={() => handleDelete(task._id)} />
          </View>
        ))}
      <Tasks />
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
