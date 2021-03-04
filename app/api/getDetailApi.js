import { api } from './client';

export const getDetailApi = (animeName) =>  api.get(`/anime-detail/${animeName}`);
