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
    REMOVE_EPISODES,
    PERSIST_APPUPDATE_NOTIF,
    PERSIST_NEW_CONTENT_NOTIF,
    PERSIST_NEW_FEATURE_NOTIF,
    STREAMING_OPT,
    PARENTAL_CONTROL_OPT,
    ADD_TO_WATCHLATER_FROM_CACHE,
    ADD_TO_HISTORY_FROM_CACHE
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
);

export const addToHistory = (animedata) => (
    {
        type: ADD_TO_HISTORY,
        payload: animedata
    }
);

export const addToHistoryFromCache = (animeListFromCache) => (
    {
        type: ADD_TO_HISTORY_FROM_CACHE,
        payload: animeListFromCache
    }
);

export const addToWatchLater = (animedata) => (
    {
        type: ADD_TO_WATCHLATER,
        payload: animedata
    }
);

export const addToWatchLaterFromCache = (animeListFromCache) => (
    {
        type: ADD_TO_WATCHLATER_FROM_CACHE,
        payload: animeListFromCache
    }
)

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

export const persistAppUpdateNotificaton = (appUpdateValue) => (
    {
        type: PERSIST_APPUPDATE_NOTIF,
        payload: appUpdateValue
    }
);

export const persistNewContentNotificaton = (newContentValue) => (
    {
        type: PERSIST_NEW_CONTENT_NOTIF,
        payload: newContentValue
    }
);

export const persistNewFeatureNotificaton = (newContentValue) => (
    {
        type: PERSIST_NEW_FEATURE_NOTIF,
        payload: newContentValue
    }
);

export const persistStreamingOpt = (optionValue) => (
    {
        type: STREAMING_OPT,
        payload: optionValue
    }
);

export const persistParentalControl = (optValue) => (
    {
        type: PARENTAL_CONTROL_OPT,
        payload: optValue
    }
) 