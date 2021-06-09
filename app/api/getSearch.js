import { api } from './client';

export const getSearch = async (query, page=1) => {
    const response = await api.get(`/search-shows-data/${query}/${page}`);
    return response
};