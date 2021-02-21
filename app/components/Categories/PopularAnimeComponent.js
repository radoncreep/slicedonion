import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { create } from 'apisauce';

import { SmallCardTray } from '../HorizontalTrays';



const api = create({
    baseURL: 'http://192.168.43.211:3300'

});

const PopularAnimeComponent = ({ navigation }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ detail, setDetail ] = useState();

    const getPopularAnime = async () => {
        try {
            const response = await api.get('/popular-shows');
            if (response.ok) { 
                // console.log('DATA ', response.data.list);
                setPopularShows(response.data.list);
                // console.log('console.log ', popularShows)
                return response;
            }
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
    )
};

const styles = StyleSheet.create({
    container: {},
})

export default PopularAnimeComponent;