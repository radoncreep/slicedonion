import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getAllPopularPage } from '../../api/getPopular';

import { SmallCardTray } from '../HorizontalTrays';
import Spinner from '../Spinner';


const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);

    const getPopularAnime = async () => {
        let mounted = true;

        try {
            const response = await getAllPopularPage(param);
            
            if (mounted) {
                console.log('popular loaded');
                setPopularShows(response.data.list);
            };
            return response;
        } catch (error) {
            console.log(error);
        };

        return () => mounted = false;
    };

    useEffect(() => {
        getPopularAnime()
    }, []);

    return (
        <>
            { popularShows.length > 0 ? (
                <SmallCardTray 
                    data={popularShows} 
                    navigation={navigation}
                    towhere={towhere}
                    heading="MOST POPULAR SERIES"
                />  
            ) : <Spinner style={styles.spinner} />}
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