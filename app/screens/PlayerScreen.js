import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import EpisodeCardHorizontal from '../components/Cards/EpisodeCardHorizontal';

import VideoPlayer from '../components/VideoPlayer';
import { updateCurrentEpisode, updateNextVideo } from '../store/actions';

let { height, width } = Dimensions.get('window');

const PlayerScreen = ({ navigation, route }) => {
    // let [ episodes, setEpisodes ] = useState();
    const { allEpisodes, current, next } = useSelector((state) => state.nextEpisode);
    let currentEpisode = allEpisodes[current]
    const nextEpisode = allEpisodes[next];
    console.log(current, next);
    const dispatch = useDispatch();

    const handleEpisodeChange = () => {
        // update video with next episode
        let nextNext = next + 1;
        dispatch(updateCurrentEpisode(next))
        dispatch(updateNextVideo(nextNext))
    };

    return (
        <View style={styles.container}>
            {/* <VideoPlayer videodata={currentEpisode.episodeUrl}/> */}
            <EpisodeCardHorizontal 
                style={{ position: 'absolute', top: 400, width: width - 20 }}
                episodeTitle={nextEpisode.title}
                episodeNumber={nextEpisode.episodeNumber} 
                imageurl={nextEpisode.thumbnail}
                onPress={() => console.log('ji')}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal:
        alignItems: 'center',
        width: width,
        // justifyContent: 'center',
        backgroundColor: '#000'
    },
});

export default PlayerScreen;