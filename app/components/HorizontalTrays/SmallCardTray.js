import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import SmallCard from '../Cards/SmallCard';

const SmallCardTray = ({ data, navigation, towhere, isFromHome }) => {

    const handleCardPress = (anime) => {
        navigation.navigate(towhere, anime);
    };

    return (
        <View style={styles.container}>
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
                        released={anime.released}
                        currentanime={anime}
                        onPress={() => handleCardPress(anime)}
                        navigation={navigation}
                        isFromHome={isFromHome}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        height: 330,
        paddingLeft: 5, 
    },
    heading: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    }
});

export default SmallCardTray;