import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Button, Modal, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

import EpisodesTrayVertical from '../components/VerticalTrays/EpisodesTrayVertical';
import StatusBarComp from '../components/StatusBarComp';
import { getEpisodesApi } from '../api/getEpisodes';
import { getDetailApi } from '../api/getDetailApi';
import { useDetail } from '../hooks/useDetailApi';
import { usePagination } from '../hooks/usePagination';
import ActivityIndicator from '../components/ActivityIndicator';
import GradientView from '../components/GradientView';
import { useDispatch } from 'react-redux';
import { removeEpisodesFromShow } from '../store/actions';


const { height } = Dimensions.get("window");

let statusColor = {
    ongoing: '#7CFC00',
    completed: 'red' ,
    upcoming: 'yellow',
};

const AnimeDetails = ({ navigation, route }) => {
    const [ showModal, setShowModal ] = useState(false);

    const detail = route.params;
    console.log('detail ', detail)

    const { info, showLoader } = useDetail(detail, getDetailApi);

    const { showSpinner } = usePagination(detail, getEpisodesApi);
    
    return (
        <>
            <ActivityIndicator visible={showLoader} style={styles.loader}/>
            {info && (
                <StatusBarComp style={{ paddingTop: 0 }}>
                    <ImageBackground style={styles.bg} source={{ uri: info.thumbnail }}>
                            <Animated.ScrollView
                                showsVerticalScrollIndicator={false}
                                scrollEventThrottle={1}
                            >
                                <Animated.View style={{ height: height - 180 }}>
                                    <GradientView>
                                        <View style={styles.bgContent}>
                                            <Text style={styles.bgTitle}>{info.title}</Text>
                                            <View style={styles.status}>
                                                <Text style={{ color: '#fff', marginRight: 10 }}>Series</Text> 
                                                <Text style={{ color: '#fff', marginRight: 10 }}>{info.status}</Text>
                                                <View 
                                                    style={{ 
                                                        backgroundColor: statusColor[info.status.toLowerCase()],
                                                        width: 10,
                                                        height: 10,
                                                        borderRadius: 10
                                                    }}>
                                                </View>
                                            </View>
                                            <Text numberOfLines={2} style={styles.bgDesc}>{info.summary}</Text>
                                            <Button onPress={() => setShowModal(true)} style={styles.btnLink} title="DETAILS" />
                                        </View>
                                    </GradientView>
                                </Animated.View>

                                <View style={{ backgroundColor: 'black', paddingTop: 7 }}>
                                    <ActivityIndicator visible={showSpinner} style={styles.loadEpisode}/>
                                    <Modal style={styles.modal} visible={showModal} animationType="slide">
                                        <StatusBarComp>
                                            <Button style={styles.modalBtn} onPress={() => setShowModal(false)} title="Close" />
                                            <Text style={styles.genre} >Genres: {info.genre.join(", ").toString()}</Text>
                                            <ScrollView style={styles.modalTextContainer}>
                                                <Text style={styles.modalText}>{info.summary}</Text>
                                            </ScrollView>
                                        </StatusBarComp>
                                    </Modal>

                                    <EpisodesTrayVertical towhere="Player"/>

                                </View>
                            </Animated.ScrollView>
                    </ImageBackground>
                </StatusBarComp>

            )}
        </>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        flex: 1,
        resizeMode: 'center',
    },
    bgContent: {
        width: '100%',
        paddingHorizontal: 20,
        position: 'absolute',
        top: height - 400
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
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadEpisode: {
        backgroundColor: 'transparent',
        height: 100,
        justifyContent: 'flex-start',
        alignContent: 'center',
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

// the async function is being pushed to the web api
// before the call stack takes in the function to execute the retunr promise value
// the call stack first handles the cleanup function only if the component unmounts 
// and then the mounted variable is set to false after the cleanup is executed 
// then the prmoise value to be executed in the call stack executes the rest of the function
// and at this point mounted is already false