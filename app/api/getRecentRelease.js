import { api } from './client';

export const getRecents = () => {
    const response = api.get('/');
    return response;
};

