import cache from '../utility/cache';

export const persistSettingsControls = () => {
    
    const persistAllNotifications = async (label, notificationsObj) => {
        const prefix = label;
        const notificationSettings = {
            values: {
                ...notificationsObj
            }
        };

        cache.addToCache(prefix, notificationSettings);
    }

    return {
        persistAllNotifications
    }
}