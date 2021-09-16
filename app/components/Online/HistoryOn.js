import React, {  useCallback, useEffect, useState } from 'react';
import {  FlatList, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import ActivityIndicator from '../ActivityIndicator';
import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';
import { addToHistory, addToHistoryFromCache } from '../../store/actions';
import { useHistoryCache } from '../../hooks/useHistoryCache';

export default HistoryOn = ({ loader }) => {
    const { 
        history: { current },
        register: { user: { email }}
    } = useSelector(state => state);

    const { getHistoryFromCache } = useHistoryCache(email);
    const [ loading, setLoading ] = useState(true);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                let cacheData = await getHistoryFromCache();

                if (cacheData) {
                    setLoading(true);
                    let { history } = cacheData;

                    dispatch(addToHistoryFromCache(history))

                } else {
                    dispatch(addToHistoryFromCache([]));
                }
                setLoading(false);

            })();    
        }, [ email ])
    )

    const historyList = () => (
        <FlatList 
            data={current}
            keyExtractor={(item) => item.id}
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
    )

    const emptyHistoryText = () => (
        <>
            { !loading && <Text style={styles.empty}>You haven't viewed any show yet.</Text> }
        </>
    )

    return (
        <View style={styles.history}>
            <ActivityIndicator style={{ alignSelf: 'center' }} visible={loading} />
            { current && current.length && !loading ? historyList() : emptyHistoryText() }
        </View>
    )
}

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