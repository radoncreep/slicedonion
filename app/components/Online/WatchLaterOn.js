import React from 'react';
import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';


import SmallCard from '../Cards/SmallCard';
import ListItemSeparator from '../ListItemSeparator';

const screenWidth = Dimensions.get("screen").width;

export default WatchLaterOn = () => {
    const state = useSelector(state => state.watchLater.list);
    const { width } = Dimensions.get("window");
    const navigation = useNavigation();

    const handleCardPress = (anime) => {
        navigation.navigate('Details', anime);
    };
  

    const WatchLaterList = () => (
        <FlatList
            data={state}
            keyExtractor={(item, index) => item.id.toString()}
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