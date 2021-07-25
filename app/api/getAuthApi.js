import { api } from './client';

const registerUserRoute = '/api/auth/signup/newuser';
const loginUserRoute = '/api/auth/signin/user';
const updateEmailRoute = '/api/auth/user/update-email'
const updatePwdRoute = '/api/auth/user/update-pwd'


const registerUser = async (userData) => {
    const response = await api.post(registerUserRoute, userData);
    return response;
}

const loginUser = async (userData) => {
    const response = await api.post(loginUserRoute, userData);
    
    return response;
}

const updateUserEmail = async (userData) => {
    const response = await api.put(updateEmailRoute, userData);
    
    return response;
}

const updateUserPwd = async (userData) => {
    const response = await api.put(updatePwdRoute, userData);
    
    return response;
}

export default {
    registerUser,
    loginUser,
    updateUserEmail,
    updateUserPwd
};