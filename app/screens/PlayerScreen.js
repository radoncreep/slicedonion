import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EpisodeCardHorizontal from '../components/Cards/EpisodeCardHorizontal';

import VideoPlayer from '../components/VideoPlayer';
import { useVideoContext } from '../hooks/useVideoContext';
import { setCurrentEpisode, setNextEpisode, setPreviousEpisode } from '../store/actions';
import { colorPallete } from '../utils/colors';

const PlayerScreen = ({ navigation, route }) => {
    const { episodes } = useSelector(state => state.playlist);
    console.log('player screen ', episodes);
    // const dispatch = useDispatch();

    let { currentEpisode, nextEpisode } = episodes;
    let { episodeNumber, episodeUrl } = currentEpisode;

    // console.log('video current ', currentEpisode);
    // console.log('video next ', nextEpisode);
    // console.log('player2 ', playlist);


    // useEffect(() => {

    //     const { episodeIndex } = route.params; 
    //     const index = episodeIndex;
    //     console.log('index ', index);


    //     const handlePlaylist = async (episodes, index) => {
    //         console.log('use episodes ', episodes);
    //         console.log('index ', index);
    //         let current = episodes.data[index];
    //         console.log('data passed ', current);
            
    //         // dispatch(setCurrentEpisode(current));
    //         // console.log('after dispatch ', episodes);
            
    //         // if (index !== episodesLen - 1) {
    //         //     let next = index + 1;
    //         //     dispatch(setNextEpisode(next));
    //         // }
    //         // if (index !== 1)  dispatch(setPreviousEpisode(episodes[index - 1]));
    //     }

    //     handlePlaylist(episodes, index);

    //     // console.log('player ', playlist);
    // }, []);
    // console.log('player ', state);
    // console.log('player next ', nextEpisode);

    // let [ episodes, setEpisodes ] = useState();

    // let { updateNextVideo, nextEpisode } = useVideoContext(route.params);
    // let { episodeNumber, episodeUrl, id, index, subimage , title } = nextEpisode;

    // console.log('next context', nextEpisode);

    // const handleEpisodeChange = () => {
    //     let videobj = { title, subimage}
    //     updateNextVideo(index, videobj);
    //     navigation.navigate('Player', episodeUrl)
    // };

    return (
        <View style={styles.container}>
            <View style={styles.videoStyle}>
                <VideoPlayer videodata={episodeUrl}/>
            </View>
            {/* <View style={{ position: 'absolute', top: 400 }}>
                <EpisodeCardHorizontal 
                    // episodeTitle={title}
                    episodeNumber={episodeNumber} 
                    // imageurl={subimage}
                    // onPress={handleEpisodeChange}
                />
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    videoStyle: {
        flex: 1,
        width: '100%',
    },
    nextEpisodeStyle: {
        flex: 1,
        width: '100%'
    }
});

export default PlayerScreen;