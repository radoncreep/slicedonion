import { 
    ADD_TO_HISTORY, 
    ADD_TO_WATCHLATER, 
    REMOVE_FROM_WATCHLATER }
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