import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import EpisodeCardHorizontal from '../components/Cards/EpisodeCardHorizontal';
import CurrentPlayer from '../components/CurrentPlayer';

import VideoPlayer from '../components/VideoPlayer';
import { usePlaylist } from '../hooks/usePlaylist';
import { colorPallete } from '../utils/colors';


const PlayerScreen = () => {
    const navigation = useNavigation();
    const { handleEpisodeFunctionality } = usePlaylist();

    const { episodes } = useSelector(state => state.playlist);
    const { currentEpisode, nextEpisode } = episodes;

    console.log('current episode ', currentEpisode);
    console.log('next episode ', nextEpisode);

    const handlePlayerEpisodePress = (nextEpisode) => {
        handleEpisodeFunctionality(nextEpisode)
        navigation.navigate('Player');
    };

    return (
        <View style={styles.container}>
            <View style={styles.videoStyle}>
                <VideoPlayer videodata={currentEpisode} />
            </View>
            <CurrentPlayer                
                episodeNumber={currentEpisode.episodeNumber}
                title={currentEpisode.title}
                version={currentEpisode.version}
            >
                <View>
                    <EpisodeCardHorizontal 
                        episodeNumber={nextEpisode.episodeNumber} 
                        thumbnail={nextEpisode.thumbnail}
                        episodeTitle={nextEpisode.title}
                        onPress={() => handlePlayerEpisodePress(nextEpisode)}
                    />
                </View>
            </CurrentPlayer>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPallete.smallBgPurple
    },
    videoStyle: {
        width: '100%',
        flex: 1
    },
    nextEpisodeStyle: {
        flex: 1,
        width: '100%'
    }
});

export default PlayerScreen;