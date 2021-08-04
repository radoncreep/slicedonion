import { PERSIST_APPUPDATE_NOTIF, PERSIST_NEW_CONTENT_NOTIF, PERSIST_NEW_FEATURE_NOTIF } from "../types";

const INITIAL_STATE = {
    notifications: {
        appUpdates: false,
        newContent: false,
        newFeature: false
    }
};

export const notificationReducer = (state=INITIAL_STATE, action) => {
    switch(action.type) {
        case PERSIST_APPUPDATE_NOTIF:
            return {
                notifications: {
                    ...state.notifications,
                    appUpdates: action.payload
                }
            };
        case PERSIST_NEW_CONTENT_NOTIF:
            return {
                notifications: {
                    ...state.notifications,
                    newContent: action.payload
                }
            }
        case PERSIST_NEW_FEATURE_NOTIF:
            return {
                notifications: {
                    ...state.notifications,
                    newFeature: action.payload
                }
            }
        default: 
            return state;
    };
};