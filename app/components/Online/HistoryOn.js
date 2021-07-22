import React from 'react';
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import ActivityIndicator from '../ActivityIndicator';
import ListItemSeparator from '../ListItemSeparator';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';

export default HistoryOn = ({ loader }) => {
    const state = useSelector(state => state.history.current);

    const navigation = useNavigation();

    const historyList = () => (
        <FlatList 
            data={state}
            keyExtractor={(item) => item.id}
            // ItemSeparatorComponent={() => <ListItemSeperator />}
            renderItem={({ item } , index) => (
                <EpisodeCardHorizontal
                    key={item.id + '' + index}
                    episodeNumber={item.episodeNumber}
                    episodeTitle={item.title}
                    thumbnail={item.thumbnail}
                    version={item.version}
                    onPress={() => navigation.navigate('Details', item)}
                />
            )}
        />
    );

    const emptyHistoryText = () => <Text style={styles.empty}>You haven't viewed any show yet.</Text>

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