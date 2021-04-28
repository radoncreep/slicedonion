import React, { useContext, useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, TouchableHighlight } from 'react-native';


const NextEpisodeCard = (props) => {
    return (
        <TouchableHighlight onPress={() => console.log('clicked me')}>
            <View style={styles.container}>
                
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'orange',
        marginBottom: 7,
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

export default NextEpisodeCard;