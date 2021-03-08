import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

import SmallCard from '../Cards/SmallCard';

const SmallCardTray = ({ data, navigation, towhere, heading }) => {
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
                            onPress={() => navigation.navigate(towhere, anime)}
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