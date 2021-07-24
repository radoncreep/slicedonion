import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { AccountOnline } from '../components/Online/AccountOnline';
import { AccountOffline } from '../components/Offline/AccountOffline';

export const AccountScreen = () => {
    const { email } = useSelector(state => state.register.user);

    return (
        <>
            { email ? <AccountOnline /> : <AccountOffline /> } 
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