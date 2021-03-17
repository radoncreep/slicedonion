import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HistoryOff from '../components/Offline/HistoryOff';

export default function HistoryScreen() {
    return (
        <HistoryOff />
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