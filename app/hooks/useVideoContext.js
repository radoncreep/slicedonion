import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentEpisode, setNextEpisode } from '../store/actions';
import { NextEpisodeContext } from '../utility/nextContext';

export const useVideoContext = (episodes, index) => {
    // const { nextEpisode, setNextEpisode } = useContext(NextEpisodeContext);

    // const episodesState = useSelector(state => state.episodes.data);
    // console.log(episodesState);

    // const dispatch = useDispatch();

    let mergedata;

    useEffect(() => {
        const handleCurrentVideoIndex = (index, addToIndex = 0) => {
            let current = episodes[index];
            // dispatch(setCurrentEpisode(current));
        };
    
        const updateNextVideo = (index, videoObj) => {
            let nextIndex = index + 1;
            let nextEpisode = episodes[nextIndex];
    
            // dispatch(setNextEpisode(nextEpisode));
    
            // let currentVideo = playlist[handleCurrentVideoIndex(index)];
            // mergedata = { ...currentVideo, index, ...videoObj }
            // setNextEpisode(mergedata);
        };

        handleCurrentVideoIndex(episodes, index);
        updateNextVideo(episodes, index);
    }, []);
};