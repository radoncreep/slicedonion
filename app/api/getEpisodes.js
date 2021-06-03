import { api } from './client';

export const getEpisodesApi = async (name, queryno) => {
    const response = await api.get(`/episodes/${name}/?page=${queryno}`);
    return response
};