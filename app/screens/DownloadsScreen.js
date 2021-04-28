import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import DownloadsOff from '../components/Offline/DownloadsOff';
import DownloadOn from '../components/Online/DownloadOn';

export const DownloadsScreen = () => {
    const { email } = useSelector(state => state.register.user);

    return (
        <>
            { email ? <DownloadOn /> : <DownloadsOff /> } 
        </>
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