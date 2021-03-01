import React, { useEffect, useReducer, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Modal, ScrollView, TouchableOpacity } from 'react-native';

import EpisodesTrayVertical from '../components/VerticalTrays/EpisodesTrayVertical';
import StatusBarComp from '../components/StatusBarComp';
import { getEpisodesApi } from '../api/getEpisodes';


const AnimeDetails = ({ route }) => {
    const [ showModal, setShowModal ] = useState(false);
    const [ episodes, setEpisodes ] = useState([]);
    const [ disableNext, setDisableNext ] = useState(true);
    const [ queryNumber, setQueryNumber ] = useState([]);

    const detail = route.params;
    
    const updatePageQuery = (state, action) => {
        switch (action.type) {
            case 'ADD':
                console.log(state);
                if (state < queryNumber.length) {
                    state = state + action.payload
                    console.log(state);
                    return state;
                } else if (state >= queryNumber.length) {
                    return setDisableNext(true)
                };
            case 'RETAIN':
                return state = action.payload;     
            default:
                break;
        };
    };
   
    const [ pagequery, dispatch ] = useReducer(updatePageQuery, 0);

    
    
    
    useEffect(() => {
        let mounted = true;
        
        const getEpisodes = async (detail) => {
            console.log(detail)
            let name = detail.category;
    
            const response = await getEpisodesApi(name, pagequery);
            console.log(response.data.totalEpisodes);

            if (!response.ok) {
                dispatch({ type: 'RETAIN', payload: pagequery })
            }
            
            // the async function is being pushed to the web api
            // before the call stack takes in the function to execute the retunr promise value
            // the call stack first handles the cleanup function only if the component unmounts 
            // and then the mounted variable is set to false after the cleanup is executed 
            // then the prmoise value to be executed in the call stack executes the rest of the function
            // and at this point mounted is already false
            if (mounted) {
                let temp = episodes;
                setEpisodes(temp.concat(response.data.totalEpisodes));
                setQueryNumber(response.data.milestoneEpisodes);
                // dispatch({ type: 'DEFAULT_INCREMENT', payload: 1 });
                if (pagequery < response.data.totalEpisodes) {
                    setDisableNext(false);
                };
            };
        };
        
        getEpisodes(detail);
        
        return () => {
            mounted = false;
        }
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
                            <TouchableOpacity disabled={disableNext} onPress={() => dispatch({ type: 'ADD', payload: 1 })}>
                                <View style={[styles.nextBtn, { backgroundColor: disableNext ? 'grey' : 'orange' }]}>
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