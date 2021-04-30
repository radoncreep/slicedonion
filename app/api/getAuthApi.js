import cache from '../utility/cache';
import { api } from './client';

const registerUserRoute = '/api/auth/signup/newuser';
const loginUserRRoute = '/api/auth/signin/user';

const registerUser = async (userData) => {
    const response = await api.post(registerUserRoute, userData);
    return response;
    // const customPost = api.post;

    // api.post = async () => {
    //     const response = await customPost(registerUserRoute, userData);

    //     if (response.ok) {
    //         cache.addToCache('registerUser', response.data);
    //         return response;
    //     };

    //     const data = await cache.getFromCache('registerUser');

    //     return data ? { ok: true, data } : response;
    // }
}


const loginUser = async (userData) => {
    const response = await api.post(loginUserRRoute, userData);
    // console.log('res ', response.data);
    
    return response;
}

export default {
    registerUser,
    loginUser
};