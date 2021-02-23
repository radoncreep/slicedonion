import { api } from './client';

export const getAllPopularPage = async (param) => {
    const response = await api.get(`/popular-shows/${param}`);
    return response;
};