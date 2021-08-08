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

// export const addSearchToHistory = async (searchedShow) => {
//     try {
//         let searchResults = await cache.getFromCache(prefix);
        
//         searchResults = !searchResults ? [] :[...searchResults, {...searchedShow}];
//         // searchResults.push(searchedShow);
        
//         cache.addToCache(prefix, searchResults);
//     } catch (error) {
//         console.log(error);
//     };
// };

// export const getSearchHistory = async () => {
//     try {
//         return await cache.getFromCache(prefix);
//     } catch (error) {
//         console.log(error)
//     }
// }