import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import EpisodeCardHorizontal from '../components/Cards/EpisodeCardHorizontal';
import CurrentPlayer from '../components/CurrentPlayer';

import VideoPlayer from '../components/VideoPlayer';
import { usePlaylist } from '../hooks/usePlaylist';
import { colorPallete } from '../utils/colors';
import { addToHistory } from '../store/actions';
import { useHistoryCache } from '../hooks/useHistoryCache';


const PlayerScreen = () => {
    const navigation = useNavigation();
    const { handleEpisodeFunctionality } = usePlaylist();

    const { 
        playlist: { episodes },
        register: { user: { email  }}
    } = useSelector(state => state);

    const { currentEpisode, nextEpisode } = episodes;

    const dispatch = useDispatch();

    const handleEpisodeAddHistory = (nextEpisode) => {
        const { addShowToCache } = useHistoryCache(email);
        dispatch(addToHistory(nextEpisode));
        addShowToCache(nextEpisode);

        return;
    }   

    const handlePlayerEpisodePress = (nextEpisode) => {
        handleEpisodeFunctionality(nextEpisode);
        handleEpisodeAddHistory(nextEpisode);
        navigation.replace('Player');
    };

    return (
        <View style={styles.container}>
            <View style={styles.videoStyle}>
                <VideoPlayer videodata={currentEpisode} />
            </View>
            <CurrentPlayer                
                episodeNumber={currentEpisode.episodeNumber}
                description={currentEpisode.description}
                title={currentEpisode.title}
                version={currentEpisode.version}
            >
                { nextEpisode &&
                    <EpisodeCardHorizontal 
                        episodeNumber={nextEpisode.episodeNumber} 
                        thumbnail={nextEpisode.thumbnail}
                        episodeTitle={nextEpisode.title}
                        version={nextEpisode.version}
                        onPress={() => handlePlayerEpisodePress(nextEpisode)}
                    />
                }
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
    },
    nextEpisodeStyle: {
        flex: 1,
        width: '100%'
    }
});

export default PlayerScreen;