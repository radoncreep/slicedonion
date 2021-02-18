import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const LibraryScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Your Library</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
})

export default LibraryScreen;