import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet } from 'react-native';
import { getAllPopularPage } from '../../api/getPopular';

import { SmallCardTray } from '../HorizontalTrays';


const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ fetched, setFetched ] = useState(false);

    const getPopularAnime = async () => {
        let mounted = true;

        try {
            const { data, ok } = await getAllPopularPage(param);
            
            if (mounted && ok) {
                console.log('popular loaded');
                setFetched(true)
                setPopularShows(data.list);
            };
        } catch (error) {
            console.log(error);
        };

        return () => mounted = false;
    };

    useEffect(() => {
        getPopularAnime();
    }, []);

    return (
        <>
            <ActivityIndicator visible={fetched} />
            { fetched && (
                <SmallCardTray 
                    data={popularShows} 
                    navigation={navigation}
                    towhere={towhere}
                    heading="Popular Series"
                    fetched={fetched}
                    isFromHome={true}
                />  
            )}
        </>
    );
};

const styles = StyleSheet.create({
    container: {},
    spinner: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.4,
        margin: 10
    }
})

export default PopularAnimeComponent;