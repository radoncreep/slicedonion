import { api } from './client';

export const getAllPopularPage = async (param) => {
    console.log('popular api');
    const response = await api.get(`/popular-shows/${param}`);
    return response;
};