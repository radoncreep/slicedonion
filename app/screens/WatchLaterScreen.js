import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WatchLaterOff from '../components/Offline/WatchLaterOff';
import WatchLaterOn from '../components/Online/WatchLaterOn';

export const WatchLaterScreen = () => {
    // const [ isAuth, setIsAuth ] = useState(false);
    let isAuth = true
    return (
        !isAuth ? <WatchLaterOff /> : <WatchLaterOn />
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