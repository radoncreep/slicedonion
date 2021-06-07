import { api } from './client';

export const getSeasonNamesApi = () =>  api.get(`/seasons`);

export const getSeasonAnimeShows = (url) => api.get(`/season-episodes/${url}`);