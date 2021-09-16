import cache from '../utility/cache';

const { addToCache, getFromCache, mergeToCache, clearCache, removeFromCache } = cache;

export const addSearchToHistory = async (prefix, searchedShow) => {

    try {
        let searchResults = await getFromCache(prefix);
        console.log('search results', searchResults);
                
        if (!searchResults) {
            let searchResults = {
                allSearch: []
            };
            console.log('NO SEARCH RESULT');
            searchResults.allSearch.push(searchedShow)
            addToCache(prefix, searchResults);
        } else {
            console.log('SEARCH RESULTs FOUND', searchResults);
            const filterResult = searchResults.allSearch.filter((res) => res.title !== searchedShow.title);
            console.log('filteredResult ', filterResult);
            let mergeSearch = {
                ...searchResults,
                allSearch: [
                    searchedShow,
                    ...filterResult
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

export const clearSearchCache = async (prefix) => {
    console.log(prefix)
    await removeFromCache(prefix);
}