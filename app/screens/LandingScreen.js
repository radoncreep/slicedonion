import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native'

import ListComponent from '../components/ListComponent';
import StatusBarComp from '../components/StatusBarComp';

const LandingScreen = ({ navigation }) => {
    return (
        <StatusBarComp>
            <View style={styles.container}>
                <ListComponent navigation={navigation} />
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000',
        // remind me to remove flex
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
})

export default LandingScreen;