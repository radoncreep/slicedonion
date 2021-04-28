import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import ActivityIndicator from '../ActivityIndicator';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';

export default HistoryOn = ({ loader }) => {
    const state = useSelector(state => state.history.current);
    console.log('history state ', state);

    const historyList = () => (
        <ScrollView>
            { state.map((anime, index) => (
                    <EpisodeCardHorizontal
                        key={anime.id + '' + index}
                        episodeNumber={anime.episodeNumber}
                        episodeTitle={anime.title}
                        imageurl={anime.imageurl}
                        onPress={() => console.log(anime)}
                    />
                ))
            }
        </ScrollView>
    );

    const emptyHistoryText = () => (
        <Text style={styles.empty}>You haven't viewed any show yet.</Text>
    );

    return (
        <View style={styles.history}>
            <ActivityIndicator visible={loader} />
            { state && state.length ? historyList() : emptyHistoryText() }
        </View>
    );
};

const styles = StyleSheet.create({
    empty: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    history: {
        flex: 1,
        backgroundColor: 'transparent',
        paddingHorizontal: 7,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});