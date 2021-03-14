import { api } from './client';

export const getGenreApi = (genrename) => api.get(`/genre/${genrename}`);