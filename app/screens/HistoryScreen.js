import React from 'react';
import { StyleSheet, View } from 'react-native';

import HistoryOff from '../components/Offline/HistoryOff';
import HistoryOn from '../components/Online/HistoryOn';

export default function HistoryScreen() {
    let auth =  false;

    return (
        <View style={styles.container}>
            {
                auth ? <HistoryOn /> : <HistoryOff />
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
});