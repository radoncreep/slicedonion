import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { controlsReducer } from './controlsReducer';
import { episodesReducer } from './episodesReducer';
import { historyReducer } from './historyReducer';
import { notificationReducer } from './notifReducer';
import { watchLaterReducer } from './watchLaterReducer';


export default combineReducers({
    history: historyReducer,
    watchLater: watchLaterReducer,
    register: authReducer,
    playlist: episodesReducer,
    notificationsState: notificationReducer,
    mediaControlsState: controlsReducer
});