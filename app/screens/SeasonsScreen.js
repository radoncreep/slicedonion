import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Season } from '../components/SeasonComponents/Season';

const SeasonsScreen = (props) => {
    return (
        <Season />
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