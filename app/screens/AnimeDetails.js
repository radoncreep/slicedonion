import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Modal, ScrollView, TouchableOpacity } from 'react-native';

import EpisodesTrayVertical from '../components/VerticalTrays/EpisodesTrayVertical';
import StatusBarComp from '../components/StatusBarComp';
import { getEpisodesApi } from '../api/getEpisodes';


const AnimeDetails = ({ route }) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ episodes, setEpisodes ] = useState([]);
    const [ disableNext, setDisableNext ] = useState(true);
    const detail = route.params;
    
    const getEpisodes = async (detail) => {
        // console.log('Details ', detail)
        let name = detail.category;

        const response = await getEpisodesApi(name);
        // console.log(response.data.totalEpisodes);
        if (!response.ok) return setDisableNext(true);

        setDisableNext(false)
        return setEpisodes(response.data.totalEpisodes);
    };

    useEffect(() => {
        getEpisodes(detail);
    }, []);

    return (
        <StatusBarComp style={{ paddingTop: 0 }}>
            <ImageBackground style={styles.bg} source={{ uri: detail.thumbnail }}>
                <View style={styles.container}>
                        <ScrollView> 
                            <View style={{ height: 500 }}></View>
                            <View style={styles.bgContent}>
                                <Text style={styles.bgTitle}>{detail.title}</Text>
                                <View style={styles.status}>
                                    <Text style={{ color: '#fff', marginRight: 10 }}>Series</Text> 
                                    <Text style={{ color: '#fff', marginRight: 10 }}>{detail.status}</Text>
                                    <View 
                                        style={{ 
                                            backgroundColor: detail.status.toLowerCase() === "ongoing" ? 'green' : 'red',
                                            width: 10,
                                            height: 10,
                                            borderRadius: 5
                                        }}>
                                    </View>
                                </View>
                                <Text numberOfLines={2} style={styles.bgDesc}>{detail.summary}</Text>
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
                            {episodes ? (
                                <>
                                    <EpisodesTrayVertical 
                                        episodes={episodes}
                                        subimage={detail.thumbnail}
                                        title={detail.category}
                                    />
                                </>
                            ) : null
                            }
                            <TouchableOpacity disabled={disableNext} onPress={() => console.log('hola')}>
                                <View style={styles.nextBtn}>
                                    <Text style={styles.nextBtnText}>Next</Text>
                                </View>
                            </TouchableOpacity>

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
        fontWeight: '400',
        marginVertical: 20
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
    },
    nextBtn: {
        width: 100,
        height: 50,
        backgroundColor: 'orange',
        borderRadius: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center'
    },
    nextBtnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'capitalize'
    },
    status: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});

export default AnimeDetails;