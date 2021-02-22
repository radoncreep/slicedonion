import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { create } from 'apisauce';

import { SmallCardTray } from '../HorizontalTrays';

const api = create({
    baseURL: 'http://192.168.43.211:3300'

});

const PopularAnimeComponent = ({ navigation }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ showSpinner, setShowSpinner ] = useState(true);

    const getPopularAnime = async () => {
        try {
            const response = await api.get('/popular-shows');
            
            if (!response.ok) return setShowSpinner(true);

            console.log('DATA ', response.data.list.length);
            setPopularShows(response.data.list);
            setShowSpinner(false);

            return response;
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getPopularAnime()
    }, []);

    return (
        <SmallCardTray 
            data={popularShows} 
            navigation={navigation}
        />
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default PopularAnimeComponent;