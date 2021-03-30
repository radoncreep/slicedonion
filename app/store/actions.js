import { 
    ADD_TO_HISTORY, 
    ADD_TO_WATCHLATER, 
    REMOVE_FROM_WATCHLATER,
    UPDATE_NEXT_EPISODE,
    UPDATE_CURRENT_EPISODE,
    UPDATE_ALL_EPISODES,
    REMOVE_ALL_EPISODES
}
from "./types";

export const addToHistory = (animedata) => (
    {
        type: ADD_TO_HISTORY,
        payload: animedata
    }
);

export const addToWatchLater = (animedata) => (
    {
        type: ADD_TO_WATCHLATER,
        payload: animedata
    }
);

export const removeFromWatchLater = (animedata) => (
    {
        type: REMOVE_FROM_WATCHLATER,
        payload: animedata
    }
);

export const updateNextVideo = (nextEpisodeIndex) => (
    {
        type: UPDATE_NEXT_EPISODE,
        payload: nextEpisodeIndex
    }
);

export const updateCurrentEpisode = (nextEpisode) => (
    {
        type: UPDATE_CURRENT_EPISODE,
        payload: nextEpisode
    }
);

export const updateAllEpisodes = (allepisodes) => (
    {
        type: UPDATE_ALL_EPISODES,
        payload: allepisodes
    }
);

export const removeAllEpisodes = () => (
    {
        type: REMOVE_ALL_EPISODES,
    }
);

