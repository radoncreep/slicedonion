import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const BrowseScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Browse screen</Text>
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

export default BrowseScreen;