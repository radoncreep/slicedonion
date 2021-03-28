import { api } from './client';

export const getMoviesApi = async (queryno) => {
    console.log('here ', queryno)
    const response = api.get(`/movies?number=${queryno}`);
    return response
};