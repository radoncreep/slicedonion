import { api } from './client';

export const playlistApi = (current, next) => {

    const getCurrentEpisodeUrl = async (current) => {
        const response = api.get(`/episode${current}`);
    
        return response;
    };

    const getNextEpisodeUrl = (next) => {
        const response = api.get(`/episode/${next}`);

        return response;
    };
    
    return {
        getCurrentEpisodeUrl,
        getNextEpisodeUrl
    }
};
