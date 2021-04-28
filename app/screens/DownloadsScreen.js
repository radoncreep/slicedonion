import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DownloadsOff from '../components/Offline/DownloadsOff';

export const DownloadsScreen = () => {
    return (
        <DownloadsOff />
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