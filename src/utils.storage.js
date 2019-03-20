
import { AsyncStorage } from 'react-native'; // dependency
import { logger } from './utils.logger';

// Util for react-native async stroage logging
export async function logFromAsyncStorage() {
  const keys = await AsyncStorage.getAllKeys();
  const items = await AsyncStorage.multiGet(keys);

  logger(`Found ${keys.length || 0} items!`, 'Async Storage');
  console.table(items);
}
