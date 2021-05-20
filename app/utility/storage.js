import * as SecureStore from 'expo-secure-store';

const key = 'userToken';

// store auth token
const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log('unable to store token ', error);
    };
};

// get token 
const getToken = async () => {
    try {
        const token = await SecureStore.getItemAsync(key);
        return token;
    } catch (error) {
        console.log('unable to retrieve token ', error);
    };
};

// remove token
const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log('Unable to delete token ', error);
    };
};

export default {
    storeToken, getToken, removeToken
}