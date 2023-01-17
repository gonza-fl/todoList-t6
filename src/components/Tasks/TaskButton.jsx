import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const TaskButton = ({ setIsModalVisible, setIsEdit }) => {
  return (
    <View style={styles.taskButton}>
      <LinearGradient colors={['#a00498', '#f7bd56']} style={styles.gradient}>
        <TouchableOpacity
          style={styles.touchableOpacity}
          onPress={() => {
            setIsEdit(false);
            setIsModalVisible(true);
          }}>
          <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};

export default TaskButton;

const styles = StyleSheet.create({
  taskButton: {
    flexBasis: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  gradient: {
    width: 85,
    height: 85,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  touchableOpacity: {
    width: 70,
    height: 70,
    borderRadius: 50,
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
});
