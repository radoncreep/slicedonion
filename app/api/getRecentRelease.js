import { api } from './client';

export const getRecents = () => {
    const response = api.get('/');
    console.log(response.data)
    return response;
};

