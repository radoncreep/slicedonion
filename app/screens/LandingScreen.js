import React from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import LargeCard from '../components/LargeCard';
import LargeTrayItems from '../components/LargeTrayItems';
import ListComponent from '../components/ListComponent';
import ListTrayItems from '../components/ListTrayItems';
import Screen from '../components/Screen';

const LandingScreen = (props) => {
    return (
        <Screen>
            <View style={styles.container}>
                {/* <ListTrayItems />
                <ListTrayItems />
                <LargeTrayItems />
                <ListTrayItems /> */}
                <ListComponent />
            </View>
        </Screen>
     
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