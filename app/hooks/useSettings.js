import cache from '../utility/cache';

export const persistSettingsControls = () => {
    
    const persistAllNotifications = async (label, notificationsObj) => {
        const { addToCache, getFromCache, mergeToCache, clearCache } = cache;
        const notificationSettings = {
            values: {
                ...notificationsObj
            }
        };

        let settings = getFromCache(label);
        if (!settings) {
            console.log('add')
            addToCache(label, notificationSettings);
        } else {
            console.log('merge')
            mergeToCache(label, notificationSettings);
        }
    }

    return {
        persistAllNotifications
    }
}