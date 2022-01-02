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
    const [ loading, setLoading ] = useState(false);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    useFocusEffect(
        useCallback(() => {
            (async () => {
                let cacheData = await getHistoryFromCache();

                if (cacheData && current.length === 0) {
                    console.log('IN THE IF');
                    setLoading(true);
                    let { history } = cacheData;

                    dispatch(addToHistoryFromCache(history))

                } else {
                    console.log('IN THE ELSE')
                    dispatch(addToHistoryFromCache([]));
                }
                setLoading(false);

            })();    
        }, [ email ])
    )

    const handleGetDetails = (item) => {
        let title = item?.category;
        let episodeNumber = title.split("-").pop();

        if (!episodeNumber) {
            episodeNumber = item?.episodeNumber.toString();
        }
        title = title.replace(`-episode-${episodeNumber}`, "");

        let payload = {...item};
        payload.category = title;

        navigation.navigate('Details', payload);
    }

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
                    onPress={() => handleGetDetails(item)}
                />
            )}
        />
    )

    console.log('current ', current)

    const emptyHistoryText = () => (
        <>
            <Text style={styles.empty}>You haven't viewed any show yet.</Text>
        </>
    )

    return (
        <View style={styles.history}>
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