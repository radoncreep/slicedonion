import cache from '../utility/cache';

export const useHistoryCache = (email) => {

    const prefix = `@${email}_history`;

    const { 
        addToCache, 
        getFromCache, 
        mergeToCache, 
        clearCache 
    } = cache;

    const addShowToCache = async (show) => {
        // clearCache();
        const initialValue = {
            history: []
        }

        try {
            let res = await getFromCache(prefix);

            console.log('res ', res);
    
            if (!res) {
                initialValue.history.push(show);
                addToCache(prefix, initialValue);
            } else {
                let mergeShowList = {
                    ...res,
                    history: [
                        show,
                        ...res.history
                    ]
                }
    
                mergeToCache(prefix, mergeShowList);
            }
        } catch (error) {
            console.log(error)
        }
    }

    const getHistoryFromCache = async() => await getFromCache(prefix); 

    const removeShowFromCache = async (show) => {
        try {
            let showsHolder = await getFromCache(prefix);

            if (showsHolder) {
                let { history } = showsHolder;
                let list = [...history];
                let filterShowFromList = list.filter((item) => item.title !== show.title );
                let mergeResult = {
                    ...showsHolder,
                    history: [
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
        getHistoryFromCache,
        removeShowFromCache
    }
}