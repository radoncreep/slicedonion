import React, { useCallback, useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import ListItemSeparator from '../ListItemSeparator';
import SmallCard from '../Cards/SmallCard';
import { useWatchListStore } from '../../hooks/useWatchListCache';
import { addToWatchLater, addToWatchLaterFromCache } from '../../store/actions';
import TraySkeleton from '../TraySkeleton.js';

const screenWidth = Dimensions.get("screen").width;

export default WatchLaterOn = () => {
    const { width } = Dimensions.get("window");
    
    const navigation = useNavigation();
    
    const { 
        register: { user: { email }},
        watchLater: { list }
    } = useSelector((state) => state);
    
    
    const { getWatchListFromCache } = useWatchListStore(email);
    const [ loading, setLoading ] = useState(true);

    const dispatch = useDispatch();

    const handleCardPress = (anime) => {
        navigation.navigate('Details', anime);
    };

    useFocusEffect(
        useCallback(() => {
            (async () => {
                setLoading(true);
                
                let cacheData = await getWatchListFromCache();
                
                if (cacheData) {
                    let { watchList } = cacheData;

                    dispatch(addToWatchLaterFromCache(watchList));         
                } else {
                    dispatch(addToWatchLaterFromCache([]));
                }
                setLoading(false);
            })()    
        }, [ email ])
    )
  

    const WatchLaterList = () => (
        <View>
            { list.length > 0 && 
                <FlatList
                    data={list}
                    keyExtractor={(item, index) => item.id}
                    ItemSeparatorComponent={ListItemSeparator}
                    renderItem={({ item, index })   => 
                        (
                            <View>
                                <SmallCard
                                    currentanime={item}
                                    style={{ width: width / 3.5 }}
                                    key={index} 
                                    title={item.title} 
                                    subtitle={item.released}
                                    imageUrl={item.thumbnail}
                                    onPress={() => handleCardPress(item)}
                                />
                                <ListItemSeparator />
                            </View>
                        )
                    }
                    numColumns={3}
                    contentContainerStyle={styles.containerStyle}
                />
            }
        </View>
    );

    const emptyWatchLaterText = () => (
        <>
            { !loading &&
                <Text style={styles.empty}>You haven't added any show to WatchLater.</Text>
            }
        </>
    );
    
    const renderSkeleton = () => {
        return (
            <TraySkeleton 
                containerStyle={{ flex: 1 }}
                scrollViewStyle={{
                    paddingHorizontal: 0,
                    marginTop: 10,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center'
                }}
                contentWidth={width / 3.5}
                contentHeight={300}
                isHorizontal={false}
                leftMargin={true}
                topMargin={false}
                numberOfBones={9}
                rectWidth={width / 3.5}
                rectHeight={270}
            />
        )
    }

    return (
        <View style={styles.watchlater}>
            {loading && renderSkeleton()}

            { list && list.length && !loading ? WatchLaterList() : emptyWatchLaterText() }
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        width: screenWidth - 43,
    },
    empty: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    watchlater: {
        flex: 1,
        backgroundColor: '#000',
        paddingVertical: 10,
        alignItems: 'center',
        width: screenWidth,
        justifyContent:  'center'
    },
});