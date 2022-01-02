import React, {  useCallback, useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';
import { addToHistory, addToHistoryFromCache } from '../../store/actions';
import { useHistoryCache } from '../../hooks/useHistoryCache';
import TraySkeleton from '../TraySkeleton';

export default HistoryOn = () => {
    const { width } = Dimensions.get("window");

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
                setLoading(true);
                let cacheData = await getHistoryFromCache();

                if (cacheData && current.length === 0) {
                    let { history } = cacheData;

                    dispatch(addToHistoryFromCache(history))

                } else {
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

    const emptyHistoryText = () => (
        <>
            <Text style={styles.empty}>You haven't viewed any show yet.</Text>
        </>
    )

    const renderSkeleton = () => (
        <TraySkeleton
            containerStyle={{ flex: 1, paddingHorizontal: 10 }}
            scrollViewStyle={{
                paddingHorizontal: 0,
                flexDirection: 'column',
                height: '100%'
            }}
            contentWidth={width}
            contentHeight={100}
            isHorizontal={false}
            numberOfBones={5}
            rectWidth={width}
            rectHeight={100}
            leftMargin={false}
            topMargin={true}
        />
    )

    return (
        <View style={styles.history}>
            {loading && renderSkeleton()}
            {/* { current && current.length && !loading ? historyList() : emptyHistoryText() } */}
            { current && current.length === 0 && !loading ? emptyHistoryText() : historyList() }
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