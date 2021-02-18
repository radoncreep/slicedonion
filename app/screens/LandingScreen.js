import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import Screen from '../components/Screen';

const LandingScreen = (props) => {
    return (
        <Screen>
            <View style={styles.container}>
                <Text style={styles.text}>Welcome to the home screen!</Text>
            </View>
        </Screen>
     
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#6E0DD0',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
})

export default LandingScreen;