import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { URL } from '../data/urls';

const Authorization =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JjN2M5Y2I3NjZjMTE0NTRmOGJkMDYiLCJpYXQiOjE2NzM1MjYxMjR9.uUb95MM18GMCa-SEdSMS4WNZ-118PtmKg2wghWSh-Wg';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`${URL.TASK}/`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization,
      },
    })
      .then(response => response.json())
      .then(({ data }) => setTasks(data))
      .catch(err => console.log(err));
  }, []);

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