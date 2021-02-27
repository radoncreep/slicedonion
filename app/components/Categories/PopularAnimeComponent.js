import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getAllPopularPage } from '../../api/getPopular';

import { SmallCardTray } from '../HorizontalTrays';
import Spinner from '../Spinner';


const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ showSpinner, setShowSpinner ] = useState(true);

    const getPopularAnime = async () => {
        try {
            const response = await getAllPopularPage(param);
            
            if (response.data.list) {
                console.log('DATA ', response.data.list.length);
                setPopularShows(response.data.list);
    
                return response;
            }
        } catch (error) {
            console.log(error);
        };
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