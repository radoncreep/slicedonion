import { api } from './client';

export const getSeasonNamesApi = () =>  api.get(`/seasons`);