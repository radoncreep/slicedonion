import { api } from './client';

export const getEpisodesApi = async (name) => {
    const response = await api.get(`/episodes/${name}`);
    return response
};