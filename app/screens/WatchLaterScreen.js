import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import WatchLaterOff from '../components/Offline/WatchLaterOff';
import WatchLaterOn from '../components/Online/WatchLaterOn';

export const WatchLaterScreen = () => {
    const { email } = useSelector(state => state.register.user);

    return (
        !email ? <WatchLaterOff /> : <WatchLaterOn />
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