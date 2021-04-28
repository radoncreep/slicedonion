import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableHighlight } from 'react-native'

const GenreCard = ({ genreImageUrl, genreName, icon, onPress }) => {
    
    return (
        <TouchableHighlight style={styles.container} onPress={onPress}>
            <View style={styles.bgimg}>
                <Text style={styles.genretitle}>{genreName}</Text>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    bgimg: {
        width: 180,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5,
        backgroundColor: '#646c87'
    },
    genretitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default GenreCard;