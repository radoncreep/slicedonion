import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Modal, ScrollViewComponent } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { LandingScreen } from '../../screens';
import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';
import ListItemSeparator from '../ListItemSeparator';
import StatusBarComp from '../StatusBarComp';

const episodesList = [
    {
        id: 1,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 2,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 3,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 4,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 5,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 6,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 7,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    },
    {
        id: 8,
        season: 1,
        episodeno: 1,
        time: 23,
        theme: 'Unqualified heroes',
        imageurl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    }
];

const EpisodesTrayVertical = (props) => {
    return (
        <ScrollView>
            {episodesList.map((anime) => (
                <EpisodeCardHorizontal 
                    key={anime.id}
                    episodeLength={anime.time}
                    episodeNumber={anime.episodeno}
                    episodeTitle={anime.theme}
                    imageurl={anime.imageurl}
                    season={anime.season}
                />
            ))}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'flex-end',
    },
    bgContent: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 40,
    }, 
    bgDesc: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },
    bgTitle: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    btnLink: { 
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        backgroundColor: 'transparent'
    },
    container: {
        // flex: 1
        zIndex: 1
    },
    genre: {
        marginVertical: 20,
        textAlign:'center',
        fontSize: 14, 
        fontWeight: '500', 
        color: '#fff',
        paddingHorizontal: 30
    },
    listContainer: {
        zIndex: 1,
        shadowOpacity: 0.5
       
    },
    modal: { 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20
    },
    modalBtn: { 
        position: 'absolute', 
        top: 10,
    },
    modalText: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    modalTextContainer: {
        width: '100%',
        padding: 20,
    }
});

export default EpisodesTrayVertical;