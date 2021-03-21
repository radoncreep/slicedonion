import React from 'react';
import { StyleSheet } from 'react-native';

import HistoryOff from '../components/Offline/HistoryOff';
import HistoryOn from '../components/Online/HistoryOn';

export default function HistoryScreen() {
    let auth =  true;

    return auth ? <HistoryOn /> : <HistoryOff />;
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});