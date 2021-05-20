import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { addToHistory, setCurrentEpisode, setNextEpisode, setPreviousEpisode } from '../../store/actions';

import { useVideoContext } from '../../hooks/useVideoContext';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';

const EpisodesTrayVertical = ({ navigation, subimage, title, towhere }) => {
    const playlist = useSelector(state => state.playlist);
    const dispatch = useDispatch();

    const { episodes } = playlist;

    // console.log('playlist ', playlist);
    // let videoObj = { subimage, title };
    // let { updateNextVideo } = useVideoContext(episodes);

    const handleEpisodeFunctionality = async (index) => {
        // console.log('gotten ', episodes);

        handlePlaylist(episodes, index);
        // handleEpisodeAddHistory(episodes, index);


        // this goes to video player
        console.log(2)
        navigation.navigate(towhere, { episodeIndex: index });
        return;
    };

    const handlePlaylist = async (episodes, index) => {
        // console.log('use episodes ', episodes);
        let episodesLen = episodes.data.length;

        console.log('index ', index);
        let current = episodes.data[index];
        console.log('data passed ', current);
        
        dispatch(setCurrentEpisode(current));
        
        if (index !== episodesLen - 1) {
            console.log('hi')
            let next = index + 1;
            let nextEpisode = episodes.data[next];

            dispatch(setNextEpisode(nextEpisode));
        };

        if (index !== 1)  {
            let previous = index - 1;
            console.log('previous ', previous);
            let previousEpisode = episodes.data[previous];

            dispatch(setPreviousEpisode(previousEpisode));
        }
    }

    
    // const handleEpisodeAddHistory = (elems, index) => {
    //     // add to history context array
    //     let newInsertion = elems[index];
    //     newInsertion['title'] = title;
    //     newInsertion['imageurl'] = subimage;

    //     dispatch(addToHistory(newInsertion));
    // };   
    

    return (
        <View style={{ paddingHorizontal: 10 }}>
            {episodes.data.map((anime, index, elems) => (
                <EpisodeCardHorizontal 
                    key={anime.id + '' + index}
                    episodeNumber={anime.episodeNumber}
                    episodeTitle={title}
                    imageurl={subimage}
                    version={anime.version}
                    onPress={() => handleEpisodeFunctionality(index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
   
});

export default EpisodesTrayVertical;