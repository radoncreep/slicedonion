import React from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import cache from '../utility/cache';

const prefix = 'searchHistory';

export const addSearchToHistory = async (searchedShow) => {
    try {
        let searchResults = await cache.getFromCache(prefix);
        
        searchResults = !searchResults ? [] :[...searchResults, {...searchedShow}];
        // searchResults.push(searchedShow);
        
        cache.addToCache(prefix, searchResults);
    } catch (error) {
        console.log(error);
    };
};

export const getSearchHistory = async () => {
    try {
        return await cache.getFromCache(prefix);
    } catch (error) {
        console.log(error)
    }
}

// const getHistoryFroMcH

// const deleteSearchHistory = () => {
//     cache.re
// }

// const deleteAllSearchFromHistory = () => {

// }
