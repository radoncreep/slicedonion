import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import { create } from 'apisauce';


import SmallCard from '../Cards/SmallCard';

const api = create({
    baseURL: 'http://192.168.43.211:3300'
});

const SmallCardTray = ({ data, navigation }) => {
    const getAnimeDescription = async (title) => {
        try {
            const { data : { animeDetail } } = await api.get(`/anime-detail/${title}`);
            navigation.navigate("Details", animeDetail);
            return animeDetail;
        } catch (error) {    
            console.log(error);
        }
    }

    return (
        <View style={styles.container}>
        <Text style={styles.heeader}>POPULAR EPISODES</Text>
            <ScrollView
                horizontal
            >   
                {data && data.map((anime, index) => (
                    <SmallCard 
                        key={anime.id} 
                        title={anime.title} 
                        subtitle={anime.released} 
                        imageUrl={anime.thumbnail}
                        onPress={() => getAnimeDescription(anime.category)}
                    />
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#020202',
        marginHorizontal: 10,
        height: 300,
        paddingLeft: 5,
        marginBottom: 10
    },
    heeader: {
        marginVertical: 5,
        color: '#fff',
        fontWeight: '600'
    }
})

export default SmallCardTray;