import React from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import SmallCard from '../Cards/SmallCard';
import ListItemSeparator from '../ListItemSeparator';

export default WatchLaterOn = () => {
    const state = useSelector(state => state.watchLater.list);
    const { width } = Dimensions.get("window");
    // console.log('state', state);

    const WatchLaterList = () => (
        <FlatList 
            data={state}
            keyExtractor={(item, index) => item.id.toString()}
            ItemSeparatorComponent={ListItemSeparator}
            renderItem={({ item, index })   => {
                console.log('item', item);

                return (
                    <View>
                        <SmallCard 
                            style={{ width: width / 2.5 }}
                            key={index} 
                            title={item.title} 
                            subtitle={item.released}
                            imageUrl={item.thumbnail}
                        />
                        <ListItemSeparator />
                    </View>
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