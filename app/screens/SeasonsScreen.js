import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { SeasonHeader } from '../components/SeasonComponents/SeasonHeader';

const SeasonsScreen = (props) => {
    return (
        <SeasonHeader />
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#000'
    },
})

export default SeasonsScreen;