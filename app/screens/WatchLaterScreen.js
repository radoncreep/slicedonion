import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const WatchLaterScreen = () => {
    return (
        <View style={styles.container}>
            <Text>No watch list available</Text>
        </View>
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