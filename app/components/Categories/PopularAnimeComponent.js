import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { getAllPopularPage } from '../../api/getPopular';

import { SmallCardTray } from '../HorizontalTrays';


const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ showSpinner, setShowSpinner ] = useState(true);

    const getPopularAnime = async () => {
        try {
            const response = await getAllPopularPage(param);
            
            if (!response.ok) return setShowSpinner(true);

            console.log('DATA ', response.data.list.length);
            setPopularShows(response.data.list);
            setShowSpinner(false);

            return response;
        } catch (error) {
            console.log(error);
        };
    };

    useEffect(() => {
        getPopularAnime()
    }, []);

    return (
        <SmallCardTray 
            data={popularShows} 
            navigation={navigation}
            towhere={towhere}
            heading="MOST POPULAR SERIES"
        />
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default PopularAnimeComponent;