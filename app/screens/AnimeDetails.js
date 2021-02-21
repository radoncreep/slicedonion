import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Modal, ScrollView } from 'react-native';

import EpisodesTrayVertical from '../components/VerticalTrays/EpisodesTrayVertical';
import StatusBarComp from '../components/StatusBarComp';


const AnimeDetails = ({ route }) => {
    const [ showModal, setShowModal ] = useState(false);

    const detail = route.params;
    // console.log('DETAIIIIIIIIILLLLLS ', detail);

    return (
        <StatusBarComp style={{ paddingTop: 0 }}>
            <ImageBackground style={styles.bg} source={{ uri: detail.thumbnail }}>
                <View style={styles.container}>
                        <ScrollView> 
                            <View style={{ height: 450 }}></View>
                            <View style={styles.bgContent}>
                                <Text style={styles.bgTitle}>{detail.title}</Text>
                                <Text>Series</Text>
                                <Text numberOfLines={5} style={styles.bgDesc}>{detail.summary}</Text>
                                <Button onPress={() => setShowModal(true)} style={styles.btnLink} title="DETAILS" />
                                <Modal style={styles.modal} visible={showModal} animationType="slide">
                                    <StatusBarComp>
                                        <Button style={styles.modalBtn} onPress={() => setShowModal(false)} title="Close" />
                                        <Text style={styles.genre} >Genres: {detail.genre.join(", ").toString()}</Text>
                                        <ScrollView style={styles.modalTextContainer}>
                                            <Text style={styles.modalText}>{detail.summary}</Text>
                                        </ScrollView>
                                    </StatusBarComp>
                                </Modal>
                            </View>
                            <EpisodesTrayVertical />
                        </ScrollView>
                </View> 
            </ImageBackground>
        </StatusBarComp>
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

export default AnimeDetails;