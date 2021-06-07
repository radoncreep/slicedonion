import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import SmallCard from '../Cards/SmallCard';
import { SeasonHeader } from './SeasonHeader';

export const Season = () => {
    const [ shows, setShows ] = useState([]);

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <FlatList 
                data={shows}
                ListHeaderComponent={<SeasonHeader setShows={setShows} />}
                numColumns={2}
                keyExtractor={(item ) => item && item.id}
                renderItem={({ item }, index) => (
                    <SmallCard 
                        key={item.id && (item.id)}
                        currentanime={item}
                        navigation={navigation}
                        title={item && item.title} 
                        released={item &&  item.released}
                        imageUrl={item &&  item.thumbnail}
                        onPress={() => console.log(item)}
                        style={{ width: 180, margin: 10 }}
                    />
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: (Dimensions.get("screen").width / 2) - 20,
        height: 150
    },  
    container: {
        backgroundColor: '#000',
        flex: 1,
        width: '100%'
    },
})