import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

const ErrorMessage = ({ message }) => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#000' }}>{message}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'red'
    },
});

export default ErrorMessage;