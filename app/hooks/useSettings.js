import cache from '../utility/cache';

export const persistSettingsControls = () => {
    
    const persistAllNotifications = async (label, notificationsObj) => {
        const { addToCache, getFromCache, mergeToCache } = cache;
        const notificationSettings = {
            values: {
                ...notificationsObj
            }
        };

        let settings = getFromCache(label);
        if (!settings) {
            addToCache(label, notificationSettings);
        } else {
            mergeToCache(label, notificationSettings);
        }
    }

    return {
        persistAllNotifications
    }
}