import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { create } from 'apisauce';


import SmallCard from '../Cards/SmallCard';

const api = create({
    baseURL: 'http://192.168.43.211:3300'
});

const SmallCardTray = ({ data, navigation, towhere, heading }) => {
    const getAnimeEpisodes = async (anime) => {
        console.log('hih')
        navigation.navigate(towhere, anime);
        try {
            const response = await api.get(`/episodes/${anime.category}`);
        } catch (error) {    
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>{heading}</Text>
                <ScrollView
                    horizontal
                >   
                    {data && data.map((anime, index) => (
                        <SmallCard 
                            key={anime.id} 
                            title={anime.title} 
                            subtitle={anime.released}
                            episodeNumber={anime.episode}
                            imageUrl={anime.thumbnail}
                            onPress={() => getAnimeEpisodes(anime)}
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
        fontWeight: '600',
    }
})

export default SmallCardTray;