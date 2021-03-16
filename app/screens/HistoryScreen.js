import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HistoryScreen() {
    return (
        <View style={styles.container}>
            <Text>Your history could as empty if you make nothing of it</Text>
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