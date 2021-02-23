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
                <PopularAnimeComponent navigation={navigation} param={1}/>
                <PopularAnimeComponent navigation={navigation} param={2}/>
                <LargeCardTray navigation={navigation}/>
                <PopularAnimeComponent navigation={navigation} param={3}/>
                <PopularAnimeComponent navigation={navigation} param={4}/>
                <PopularAnimeComponent navigation={navigation} param={5}/>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default ListComponent;