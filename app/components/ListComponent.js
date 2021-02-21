import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import LargeTrayItems from './HorizontalTrays/LargeCardTray';
import { LargeCardTray, SmallCardTray } from './HorizontalTrays/index';
import { PopularAnimeComponent } from './Categories';


const ListComponent = ({ navigation }) => {
    // console.log('list component ', navigation)
    return (
        <View style={styles.container}>
            <ScrollView
            >
                <PopularAnimeComponent navigation={navigation}/>
                <PopularAnimeComponent navigation={navigation}/>
                <LargeCardTray navigation={navigation}/>
                <PopularAnimeComponent navigation={navigation}/>
                <PopularAnimeComponent navigation={navigation}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default ListComponent;