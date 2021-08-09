import NetInfo from '@react-native-community/netinfo';

import cache from '../utility/cache';

export const useAppControls = () => {
    const { addToCache, getFromCache, mergeToCache, clearCache } = cache; 

    // persist data
    const cacheMediaOptions = async (key, value) => {
        const option = await getFromCache(key);

        if (!option) {
            addToCache(key, value);
        } else {
            mergeToCache(key, value);
        }
    }

    const getMediaOptions = async(key) => {
        return getFromCache(key);
    }



    return {
        cacheMediaOptions,
        getMediaOptions
    }
}