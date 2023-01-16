import { useEffect, useState } from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { BASE_PATH } from '../configs/api-url';
import Tasks from '../components/Tasks';
import TaskButton from '../components/TaskButton';

const Authorization =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2JjN2M5Y2I3NjZjMTE0NTRmOGJkMDYiLCJpYXQiOjE2NzM1MjYxMjR9.uUb95MM18GMCa-SEdSMS4WNZ-118PtmKg2wghWSh-Wg';

const ToDoListScreen = () => {
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    fetch(`${BASE_PATH.TASK}/`, {
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
    <View style={styles.container}>
      {tasks &&
        tasks.map((task, i) => (
          <TouchableOpacity key={i}>
            <Text>{task.description}</Text>
          </TouchableOpacity>
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
