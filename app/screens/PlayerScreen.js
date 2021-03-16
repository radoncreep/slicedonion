import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import EpisodeCardHorizontal from '../components/Cards/EpisodeCardHorizontal';

import VideoPlayer from '../components/VideoPlayer';
import { useVideoContext } from '../hooks/useVideoContext';

const PlayerScreen = ({ navigation, route }) => {
    let [ episodes, setEpisodes ] = useState();

    let { updateNextVideo, nextEpisode } = useVideoContext(route.params);
    let { episodeNumber, episodeUrl, id, index, subimage , title } = nextEpisode;

    console.log('next context', nextEpisode);

    const handleEpisodeChange = () => {
        let videobj = { title, subimage}
        updateNextVideo(index, videobj);
        navigation.navigate('Player', episodeUrl)
    };

    return (
        <View style={styles.container}>
            <VideoPlayer videodata={episodeUrl}/>
            <EpisodeCardHorizontal 
                style={{ position: 'absolute', top: 400 }}
                episodeTitle={title}
                episodeNumber={episodeNumber} 
                imageurl={subimage}
                onPress={handleEpisodeChange}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default PlayerScreen;