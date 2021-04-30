import React, { useContext } from 'react';
import { NextEpisodeContext } from '../utility/nextContext';

export const useVideoContext = (playlist) => {
    const { nextEpisode, setNextEpisode } = useContext(NextEpisodeContext);
    let mergedata;

    const handleCurrentVideoIndex = (index, addToIndex = 0) => {
        return index + addToIndex;
    };

    const updateNextVideo = (index, videoObj) => {
        let currentVideo = playlist[handleCurrentVideoIndex(index)];
        mergedata = { ...currentVideo, index, ...videoObj }
        setNextEpisode(mergedata);
    };

    return { 
        handleCurrentVideoIndex, 
        updateNextVideo, 
        nextEpisode, 
        setNextEpisode
    };
};