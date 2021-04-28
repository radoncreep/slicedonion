import { ADD_TO_HISTORY } from "./types";

export const addToHistory = (animedata) => (
    {
        type: ADD_TO_HISTORY,
        payload: animedata
    }
);