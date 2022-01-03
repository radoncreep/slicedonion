import { api } from './client';

export const getEpisodesApi = async (name, queryno) => {
    const response = await api.get(`/episodes/${name}/?page=${queryno}`);
    console.log('LIST OF EPISODES ', response.data)
    return response
};