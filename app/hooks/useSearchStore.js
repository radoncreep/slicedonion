import cache from '../utility/cache';


export const addSearchToHistory = async (prefix, searchedShow) => {
    const { addToCache, getFromCache, mergeToCache, clearCache } = cache;
    
    let searchData = {
        allSearch: []
    };

    try {
        let searchResults = await getFromCache(prefix);
                
        if (!searchResults) {
            searchData.allSearch.push(searchedShow)
            addToCache(prefix, searchData);
        } else {
            let mergeSearch = {
                ...searchResults,
                allSearch: [
                    searchedShow,
                    ...searchResults.allSearch
                ]
            }

            mergeToCache(prefix, mergeSearch);
        }        
    } catch (error) {
        console.log(error);
    };
};

export const getSearchHistory = async (prefix) => {
    try {
        const results = await cache.getFromCache(prefix);
        return results;
    } catch (error) {
        console.log(error)
    }
}