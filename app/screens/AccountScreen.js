import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import { AccountOnline } from '../components/Online/AccountOnline';
import { AccountOffline } from '../components/Offline/AccountOffline';
import { colorPallete } from '../utils/colors';

export const AccountScreen = () => {
    const { email } = useSelector(state => state.register.user);

    return (
        <View style={styles.container}>
            { email ? <AccountOnline /> : <AccountOffline /> } 
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colorPallete.smallBgPurple,
    },
});