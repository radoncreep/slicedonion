import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { getRecents } from '../../api/getRecentRelease';
import { SmallCardTray } from '../HorizontalTrays';

const Recents = ({ navigation, towhere }) => {
    const [ recents, setRecents ] = useState([]);

    const getRecentAnimeShows = async () => {
        try {
            const response = await getRecents();

            setRecents(response.data.list);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getRecentAnimeShows();
    }, [])

    return <SmallCardTray data={recents} heading="RECENTS" towhere={towhere} navigation={navigation}/>
};

const styles = StyleSheet.create({
    container: {},
})

export default Recents;