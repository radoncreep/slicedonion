import React from 'react';
import { StyleSheet } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { GenreListComponent } from '../components/GenreListComponent';

const GenreScreen = ({ navigation, route }) => {
    let { genreName, genreUrl, id } = route.params;

    return (
        <ScrollView style={styles.container}>
            <GenreListComponent genrename={genreName} param={1} navigation={navigation}/>
            <GenreListComponent genrename={genreName} param={2} navigation={navigation}/>
            <GenreListComponent genrename={genreName} param={3} navigation={navigation}/>
            <GenreListComponent genrename={genreName} param={4} navigation={navigation}/>
            <GenreListComponent genrename={genreName} param={5} navigation={navigation}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
})

export default GenreScreen;