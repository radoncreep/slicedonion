import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToHistory, updateCurrentEpisode, updateNextVideo } from '../../store/actions';

import { useVideoContext } from '../../hooks/useVideoContext';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';

const EpisodesTrayVertical = ({ episodes, navigation, subimage, title, towhere }) => {
    const dispatch = useDispatch();
    const state = useSelector(state => state.nextEpisode.allEpisodes);
    // console.log('state ', state)

    // let { updateNextVideo } = useVideoContext(episodes);
    
    const handleEpisodeFunctionality = (elems, index) => {
        let next = index + 1;
        dispatch(updateCurrentEpisode(index));
        dispatch(updateNextVideo(next));

        handleEpisodeAddHistory(elems, index);

        // this goes to video player
            navigation.navigate(towhere, elems);
        
        return;
    };
    
    const handleEpisodeAddHistory = (elems, index) => {
        // add to history context array
        let newInsertion = elems[index];
        newInsertion['title'] = title;
        newInsertion['imageurl'] = subimage;

        dispatch(addToHistory(newInsertion));
    };   

    return (
        <View style={{ paddingHorizontal: 10 }}>
            {episodes.map((anime, index, elems) => (
                <EpisodeCardHorizontal 
                    key={anime.id + '' + index}
                    episodeNumber={anime.episodeNumber}
                    episodeTitle={title}
                    imageurl={subimage}
                    onPress={() => handleEpisodeFunctionality(elems, index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default EpisodesTrayVertical;