import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import SmallCard from '../Cards/SmallCard';

export default WatchLaterOn = () => {
    const state = useSelector(state => state.watchLater.list);
    const { width } = Dimensions.get("window");
    // console.log('state', state);

    const WatchLaterList = () => (
        <FlatList 
            data={state}
            keyExtractor={(item, index) => item.id.toString()}
            renderItem={({ item, index })   => {
                console.log('item', item);

                return (
                    <SmallCard 
                        style={{ width: width / 2.2 }}
                        key={index} 
                        title={item.title} 
                        subtitle={item.released}
                        imageUrl={item.thumbnail}
                    />
                )
            }}
            numColumns={2}
        />
    );

    const emptyWatchLaterText = () => (
        <Text style={styles.empty}>You haven't added any show to WatchLater.</Text>
    );

    return (
        <View style={styles.watchlater}>
            { state && state.length ? WatchLaterList() : emptyWatchLaterText() }
        </View>
    );
};

const styles = StyleSheet.create({
    empty: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    },
    watchlater: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 7,
        paddingVertical: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
});