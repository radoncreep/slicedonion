import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToWatchLater } from '../../store/actions';

import SmallCard from '../Cards/SmallCard';

const SmallCardTray = ({ data, navigation, towhere, heading }) => {
    const dispatch = useDispatch();

    const handleCardFunctionality = (anime) => {
        navigation.navigate(towhere, anime);
    };

    const addAnimeCardToWatchLater = (anime) => dispatch(addToWatchLater(anime));

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{heading}</Text>
                <ScrollView
                    horizontal
                >   
                    {data && data.map((anime, index) => (
                        <SmallCard 
                            key={anime.id || index} 
                            title={anime.title} 
                            subtitle={anime.released}
                            episodeNumber={anime.episode}
                            imageUrl={anime.thumbnail}
                            onPress={() => handleCardFunctionality(anime)}
                        />
                    ))}
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        height: 300,
        paddingLeft: 5, 
    },
    header: {
        color: '#fff',
        fontWeight: 'bold',
    }
})

export default SmallCardTray;