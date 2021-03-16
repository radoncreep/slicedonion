import React from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';

import { LargeCardTray } from './HorizontalTrays/index';
import { PopularAnimeComponent } from './Categories';
import Recents from './Categories/Recents';


const ListComponent = ({ navigation }) => {
    // console.log('list component ', navigation)
    return (
        <View style={styles.container} >
            <Recents navigation={navigation} towhere="Player"/>
            <LargeCardTray navigation={navigation}/>
            <PopularAnimeComponent navigation={navigation} param={1} towhere="Details"/>
            <PopularAnimeComponent navigation={navigation} param={2} towhere="Details"/>
            <PopularAnimeComponent navigation={navigation} param={3} towhere="Details"/>
            <PopularAnimeComponent navigation={navigation} param={4} towhere="Details"/>
            <PopularAnimeComponent navigation={navigation} param={5} towhere="Details"/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
})

export default ListComponent;