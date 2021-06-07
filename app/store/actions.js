import { 
    ADD_EPISODES,
    ADD_TO_HISTORY, 
    ADD_TO_WATCHLATER, 
    AUTH_REGISTER, 
    LOGOUT, 
    REMOVE_FROM_WATCHLATER, 
    SET_AS_CURRENT_EPISODE,
    SET_AS_NEXT_EPISODE,
    SET_AS_PREVIOUS_EPISODE,
    REMOVE_EPISODES
}
from "./types";

export const registerUserAuth = (user) => (
    {
        type: AUTH_REGISTER,
        payload: user
    }
);

export const logoutUser = () => (
    {
        type: LOGOUT,
        payload: null
    }
)

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

export const addEpisodesFromShow = (episodes) => (
    {
        type: ADD_EPISODES,
        payload: episodes
    }
);

export const removeEpisodesFromShow = () => (
    {
        type: REMOVE_EPISODES,
        payload: null
    }
);

export const setCurrentEpisode = (currentEpisodeData) => (
    {
        type: SET_AS_CURRENT_EPISODE,
        payload: currentEpisodeData
    }
);

export const setPreviousEpisode = (previousEpisodeData) => (
    {
        type: SET_AS_PREVIOUS_EPISODE,
        payload: previousEpisodeData
    }
);

export const setNextEpisode = (nextEpisodeData) => (
    {
        type: SET_AS_NEXT_EPISODE,
        payload: nextEpisodeData
    }
);