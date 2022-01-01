import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Text, Modal, ScrollView, Dimensions, Pressable } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { EvilIcons } from '@expo/vector-icons';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import EpisodesTrayVertical from '../components/VerticalTrays/EpisodesTrayVertical';
import StatusBarComp from '../components/StatusBarComp';
import { getEpisodesApi } from '../api/getEpisodes';
import { getDetailApi } from '../api/getDetailApi';
import { useDetail } from '../hooks/useDetailApi';
import { usePagination } from '../hooks/usePagination';
import ActivityIndicator from '../components/ActivityIndicator';

const { height } = Dimensions.get("window");

let statusColor = {
    ongoing: '#7CFC00',
    completed: 'red' ,
    upcoming: 'yellow',
};

const AnimeDetails = ({ navigation, route }) => {
    const [ showModal, setShowModal ] = useState(false);

    const detail = route.params;

    const { info, showLoader } = useDetail(detail, getDetailApi);

    const { showSpinner } = usePagination(detail, getEpisodesApi);

    function renderHeaderSkeleton() {
        return (
            <View style={{ flex: 1, paddingHorizontal: 5 }}>
                <ContentLoader 
                    speed={1}
                    width="100%"
                    height="700px"
                    backgroundColor="#0f011f"
                    foregroundColor="#330a21"
                >
                    <Rect x="0" y="0" rx="4" ry="4" width="100%" height="400" />
                    <Rect x="10" y="410" rx="3" ry="3" width="50%" height="30" /> 
                    <Rect x="10" y="450" rx="3" ry="3" width="50%" height="20" /> 
                    <Rect x="10" y="480" rx="3" ry="3" width="80%" height="100" /> 
                </ContentLoader>
            </View>
        )
    }
    
    return (
        <View>
            {renderHeaderSkeleton()}   
            {info && (
                <View>
                    <ImageBackground 
                        style={styles.bg} 
                        source={{ uri: info.thumbnail }}
                        resizeMode="cover"
                    >
                            <Animated.ScrollView
                                showsVerticalScrollIndicator={false}
                                scrollEventThrottle={1}
                            >
                                <View>
                                    <Animated.View style={{ height: 600, marginBottom: 0} }>
                                        <LinearGradient
                                            style={StyleSheet.absoluteFill}
                                            start={[0, 0.3]}
                                            end={[0, 1]}
                                            colors={["transparent", "rgba(0, 0, 0, 0.5)", "black"]}
                                        >
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
                                                
                                                <Pressable onPress={() => setShowModal(true)} style={styles.detailsBtn}>
                                                    <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>
                                                        MORE DETAILS
                                                    </Text>
                                                </Pressable>
                                            </View>
                                        </LinearGradient>
                                    </Animated.View>
                                </View>

                                <View style={{ backgroundColor: 'black', paddingTop: 7 }}>
                                    <Modal 
                                        animationType="slide"
                                        onRequestClose={() => setShowModal(false)}
                                        style={styles.modal} 
                                        visible={showModal} 
                                        >
                                        <StatusBarComp>
                                            <Pressable style={styles.modalBtn} onPress={() => setShowModal(false)} title="Close">
                                                <EvilIcons style={styles.close} name="close" size={26} color="white" />
                                            </Pressable>
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
                </View>
                )}
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
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
    close: {
        padding: 10,
        marginLeft: 10,
        marginTop: 5
    },
    bgTitle: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    detailsBtn: { 
        backgroundColor: 'red',
        width: '80%',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5
    },
    genre: {
        marginTop: 50,
        marginBottom: 20,
        textAlign:'center',
        fontSize: 14, 
        fontWeight: '500', 
        color: '#fff',
        paddingHorizontal: 20
    },
    loader: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadEpisode: {
        backgroundColor: 'white',
        height: 100,
        justifyContent: 'center',
        alignContent: 'center',
    },
    modal: { 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 30
    },
    modalBtn: { 
        position: 'absolute', 
        top: 10,
    },
    modalText: { 
        fontSize: 14, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    modalTextContainer: {
        width: '100%',
        padding: 30,
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