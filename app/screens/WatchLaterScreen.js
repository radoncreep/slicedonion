import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SavedVideos from '../components/Offline/SavedVideos';

export const WatchLaterScreen = () => {
    // const [ isAuth, setIsAuth ] = useState(false);
    let isAuth = false;
    return (
        !isAuth ? <SavedVideos /> : <Text>You're in!</Text>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});