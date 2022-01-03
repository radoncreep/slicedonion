import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';

import HistoryOff from '../components/Offline/HistoryOff';
import HistoryOn from '../components/Online/HistoryOn';

export default function HistoryScreen() {
    const { email, password } = useSelector(state => state.register.user);
    const [ loader, setLoader ] = useState(true);

    useEffect(() => {
        let mounted = true;

        if (mounted && email) setLoader(false);

        return () => mounted = false;
    })

    return (
        <View style={styles.container}>
            {
                email ? <HistoryOn loader={loader}/> : <HistoryOff />
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