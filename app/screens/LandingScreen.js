import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, OpaqueColorValue } from 'react-native';
import Animated from 'react-native-reanimated';

import Content from '../components/Content';
import Cover from '../components/Cover';
import Header from '../components/Header';

const { Value } = Animated;

const LandingScreen = ({ navigation }) => {
    const y = new Value(0);

    return (
        <View style={styles.container}>
            <Cover navigation={navigation} yval={y} />
            <Content yval={y}/>
            <Header title="SHINGEKI" yval={y}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    }
});

export default LandingScreen;