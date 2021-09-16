import cache from '../utility/cache';

export const useWatchListStore = (email) => {

    const prefix = `@${email}_watchlist`;

    const { addToCache, getFromCache, mergeToCache, clearCache } = cache;

    const addShowToCache = async (show) => {
        const initialValue = {
            watchList: []
        }

        try {
            let res = await getFromCache(prefix);
    
            if (!res) {
                initialValue.watchList.push(show);
                addToCache(prefix, initialValue);
            } else {
                let mergeShowList = {
                    ...res,
                    watchList: [
                        show,
                        ...res.watchList
                    ]
                }
    
                mergeToCache(prefix, mergeShowList);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getWatchListFromCache = async() => await getFromCache(prefix); 

    const removeShowFromCache = async (show) => {
        try {
            let showsHolder = await getFromCache(prefix);

            if (showsHolder) {
                let { watchList } = showsHolder;
                let list = [...watchList];
                let filterShowFromList = list.filter((item) => item.title !== show.title );
                let mergeResult = {
                    ...showsHolder,
                    watchList: [
                        ...filterShowFromList
                    ]
                }
                mergeToCache(prefix, mergeResult);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return {
        addShowToCache,
        getWatchListFromCache,
        removeShowFromCache
    }
}