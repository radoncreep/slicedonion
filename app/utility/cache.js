import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';

const prefix = 'cache';

const addToCache = async (key, value) => {
    const item = {
        value: value,
        timestamp: Date.now()
    };

    try {
        await AsyncStorage.setItem(key, JSON.stringify(item));
    } catch (error) {
        console.log(error);
    };
};

const isExpired = (value) => {
    // item exist but expired
    const now = moment(Date.now());
    const storedTime = moment(value.timestamp);
    return now.diff(storedTime, 'minutes') > 7;
};

const getFromCache = async(key) => {
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

export default {
    addToCache,
    getFromCache
};