import React from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native'

const GenreCard = ({ genreImageUrl, genreName, icon }) => {
    
    return (
        <View style={styles.container}>
            <ImageBackground style={styles.bgimg} source={{ uri: 'https://gogocdn.net/cover/dr-stone-stone-wars.png' }}>
                <Text style={styles.genretitle}>{genreName}</Text>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    bgimg: {
        width: 180,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
        marginVertical: 5
    },
    genretitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    }
})

export default GenreCard;