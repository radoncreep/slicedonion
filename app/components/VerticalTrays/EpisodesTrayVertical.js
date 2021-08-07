import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';


import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';
import { usePlaylist } from '../../hooks/usePlaylist';
import { addToHistory } from '../../store/actions';

const EpisodesTrayVertical = ({ towhere }) => {
    const { handleEpisodeFunctionality } = usePlaylist();

    const playlist = useSelector(state => state.playlist);
    const { episodes } = playlist;
    const { data } = episodes;

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const handleEpisodeAddHistory = (anime) =>  dispatch(addToHistory(anime));   

    const handleEpisodePress = (anime) => {
        handleEpisodeFunctionality(anime);
        handleEpisodeAddHistory(anime);
        navigation.navigate(towhere);
    };
    
    return (
        <View style={styles.container}>
            {data && data.map((anime, index, elems) => (
                <EpisodeCardHorizontal 
                    key={anime.id + '' + index}
                    episodeNumber={anime.episodeNumber}
                    episodeTitle={anime.title}
                    othername={anime.othername}
                    releaseed={anime.releaseed}
                    status={anime.status}
                    streamUrl={anime.epiosdeUrl}
                    thumbnail={anime.thumbnail}
                    version={anime.version}
                    onPress={() => handleEpisodePress(anime)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
   container: {
       paddingHorizontal: 10
   }
});

export default EpisodesTrayVertical;