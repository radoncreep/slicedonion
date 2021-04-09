import { api } from './client';

const registerUserRoute = '/api/auth/signup/newuser';

export const registerUser = (userData) => api.post(registerUserRoute, userData); 