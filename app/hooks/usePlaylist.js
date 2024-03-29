import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEpisode, setNextEpisode } from '../store/actions';

export const usePlaylist = ( anime ) => {
    const playlist = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    const { episodes } = playlist;
    const { data } = episodes;


    const handleEpisodeFunctionality = async (anime) => {
        let index = 0;
        
        for (let i=0; i < data.length; i++) {
            if (anime.episodeNumber === data[i].episodeNumber) {
                index = i;
                break;
            };
        };

        handlePlaylist(index);
        // handleEpisodeAddHistory(episodes, index);

        // navigation.navigate(towhere, { episodeIndex: index });
        return;
    };

    const handlePlaylist = async (index) => {

        let current = data[index];
        dispatch(setCurrentEpisode(current));
        
        let episodesLen = data.length -1;

        if (index !== episodesLen) {
            let next = index + 1;
            let nextEpisode = data[next];
            dispatch(setNextEpisode(nextEpisode));

        } else if (index === episodesLen) {
            dispatch(setNextEpisode(null))
        }
    };

    return {
        handleEpisodeFunctionality
    }
};