import React from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableHighlight } from 'react-native'

const EpisodeCardHorizontal = ({ episodeTitle, episodeNumber, imageurl, onPress }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground style={styles.imagebg} source={{ uri: imageurl }}>
                    <View style={styles.lengthContainer}>
                        <Text style={styles.length}>23.04</Text>
                    </View>
                </ImageBackground>
                <View style={styles.minicard}>
                    <Text style={styles.minicardText}>{episodeNumber} - {episodeTitle}</Text>
                    {/* button is going to be an icon */}
                    <Text style={styles.minicardIconBtn}>Donwload</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        marginBottom: 10,
        height: 110,
        width: '100%'
    },
    imagebg: {
        width: 170,
        height: '100%'
    },
    length: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 1
    },
    lengthContainer: {
        position: 'absolute',
        top: 80,
        right: 15,
        backgroundColor: '#000',
        padding: 3,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    minicard: {
        // flexGrow: 1,
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: 250,
    },
    minicardText: {},
    minicardIconBtn: {
        position: 'absolute',
        top: 90,
        right: 15,
    }
})

export default EpisodeCardHorizontal;