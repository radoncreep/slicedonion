import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getGenreApi } from '../api/getGenre';
import ActivityIndicator from './ActivityIndicator';
import SmallCardTray from './HorizontalTrays/SmallCardTray';
import HorizontalTraySkeleton from './HorizontalTraySkeleton.js';

export const GenreListComponent = ({ genrename, navigation, param }) => {
    const [ currentGenres, setCurrentGenres ] = useState();
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        let mounted = true;
        
        const handleGenreApiCall = async (name, param) => {
            const { data, ok } = await getGenreApi(name, param);

            if (mounted && ok) {
                setVisible(false);
                setCurrentGenres(data);
            }
            return;
        };

        handleGenreApiCall(genrename, param)

        return () => mounted = false;
    }, []);

    return (
        <View>
            <HorizontalTraySkeleton />
            <SmallCardTray 
                data={currentGenres} 
                navigation={navigation}
                towhere="Details"
                heading={genrename}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    indicator: {
        // justifyContent: 'center',
    }
});