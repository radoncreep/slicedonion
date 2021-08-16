import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import ActivityIndicator from '../ActivityIndicator';
import ListItemSeparator from '../ListItemSeparator';
import SmallCard from '../Cards/SmallCard';
import { useWatchListStore } from '../../hooks/useWatchListCache';
import { addToWatchLater } from '../../store/actions';

const screenWidth = Dimensions.get("screen").width;

export default WatchLaterOn = () => {
    const state = useSelector(state => state.watchLater.list);
    const [ loading, setLoading ] = useState(true);

    const { email } = useSelector((state) => state.register.user);

    const { width } = Dimensions.get("window");
    const navigation = useNavigation();
    const { getWatchListFromCache } = useWatchListStore(email);

    const dispatch = useDispatch();

    const handleCardPress = (anime) => {
        navigation.navigate('Details', anime);
    };

    useEffect(() => {
        if (state.length === 0) {
            (async () => {
                let cacheData = await getWatchListFromCache();
                if (cacheData) {
                    setLoading(true);
                    let { watchList } = cacheData;
                    
                    for (let data = 0; data < watchList.length; data++) {
                        dispatch(addToWatchLater(watchList[data]));
                    };
                }
                setLoading(false);
            })()    
        }
    }, [ ]);
  

    const WatchLaterList = () => (
        <View>
            { state.length > 0 && 
                <FlatList
                    data={state}
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
        <View>
            { loading ? (<ActivityIndicator style={{ alignSelf: 'center' }} visible={loading} />) :
                <Text style={styles.empty}>You haven't added any show to WatchLater.</Text>
            }
        </View>
    );

    return (
        <View style={styles.watchlater}>
            { state && state.length > 0 ? WatchLaterList() : emptyWatchLaterText() }
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