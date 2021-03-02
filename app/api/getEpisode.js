import { api } from './client';

export const getStreamUrl = async (url) => {
    const response = api.get(`/video${url}`);

    return response;
};