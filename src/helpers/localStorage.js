import AsyncStorage from '@react-native-async-storage/async-storage';

class LocalStorage {
  static getItem(key) {
    return AsyncStorage.getItem(key);
  }

  static setItem(key, value) {
    let jsonValue = value;
    if (typeof value !== 'string') {
      jsonValue = JSON.stringify(value);
    }
    return AsyncStorage.setItem(key, jsonValue);
  }

  static removeItem(key) {
    AsyncStorage.removeItem(key);
  }
}

export default LocalStorage;
