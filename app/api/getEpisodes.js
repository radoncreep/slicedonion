import { api } from './client';

export const getEpisodesApi = async (name, queryno) => {
    console.log('here ', queryno)
    const response = await api.get(`/episodes/${name}/?page=${queryno}`);
    return response
};