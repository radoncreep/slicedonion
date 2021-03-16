import { api } from './client';

export const getGenres = async (param) => {
    const response = await api.get(`/genres`);
    return response;
};