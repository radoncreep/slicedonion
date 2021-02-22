import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import StatusBarComp from './StatusBarComp';

const Spinner = (props) => {
    return (
        <StatusBarComp>
            <View style={styles.container}>
                <Text>Loading...</Text>
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.4
    },
})

export default Spinner;