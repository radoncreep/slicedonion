import { api } from './client';

export const getGenreApi = (genrename, param = 1) => api.get(`/genre/${genrename}?page=${param}`);