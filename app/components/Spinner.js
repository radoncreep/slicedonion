import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

const Spinner = ({ style }) => {
    return (
        <View style={[ styles.container, style ]}>
            <Text style={{ color: '#fff', fontSize: 20 }}>Loading...</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.4,
        margin: 10
    },
})

export default Spinner;