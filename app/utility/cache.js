import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';

const addToCache = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    };
};

const mergeToCache = async (key, value) => {
    try {
        await AsyncStorage.mergeItem(key, JSON.stringify(value));
    } catch (error) {
        console.log(error);
    }
}

const isExpired = (value) => {
    // item exist but expired
    const now = moment(Date.now());
    const storedTime = moment(value.timestamp);
    return now.diff(storedTime, 'minutes') > 7;
};

const getFromCache = async(key) => {
    if (!key) return;
    try {
        const item = await AsyncStorage.getItem(key);
        const value = JSON.parse(item);

        // item doesnt exist
        if (!value) return null;

        if (isExpired(value)) {
            AsyncStorage.removeItem(key);
            return null;
        };

        return value;
    } catch (error) {
        console.log(error);
    }
};

const removeFromCache = async(key) => {
    if (!key) return;
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log(error);
    }

}

const clearCache = async () => {
    try {
        await AsyncStorage.clear()
      } catch(e) {
        // clear error
      }
    
    console.log('Cache cleard.')
};

export default {
    addToCache,
    getFromCache,
    clearCache,
    mergeToCache,
    removeFromCache
};