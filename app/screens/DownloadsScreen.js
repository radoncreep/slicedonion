import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const DownloadsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>You currently have no downloads</Text>
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