import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { BASE_PATH } from '@configs/api-url';
import clientAxios from '@configs/clientAxios';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    getAllTasks();
  }, []);

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
    <View>
      {tasks &&
        tasks.map((task, i) => (
          <TouchableOpacity key={i}>
            <Text>{task.description}</Text>
          </TouchableOpacity>
        ))}
    </View>
  );
};

export default ToDoListScreen;
