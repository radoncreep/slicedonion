import React, { useState } from 'react';
import { Dimensions, FlatList, StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SeasonHeader } from './SeasonHeader';
import SmallCard from '../Cards/SmallCard';

const screenWidth = Dimensions.get("screen").width;

export const Season = () => {
    const [ shows, setShows ] = useState([]);

    const navigation = useNavigation();

    const handleNavigationPress = (item) => navigation.navigate("Details", item);
    
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
                        onPress={() => handleNavigationPress(item)}
                        style={{ width: 180, margin: 10 }}
                    />
                )}
                contentContainerStyle={styles.contentContainer}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    card: {
        width: (screenWidth / 2) - 20,
        height: 150
    },  
    container: {
        flex: 1,
        width: screenWidth
    },
    contentContainer: {
        width: screenWidth,
        alignItems: 'center',
        backgroundColor: '#0f010f'
    }
})