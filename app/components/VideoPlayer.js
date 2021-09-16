import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions, TouchableHighlight, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useDeviceOrientation } from '@react-native-community/hooks'

import { playlistApi } from '../api/getPlaylist';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

const VideoPlayer = ({ videodata }) => {
    const { landscape } = useDeviceOrientation();

    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState(null);
    const [ error, setError ] = useState('');
    const [ buffer, setBuffer ] = useState(false);

   
    const { getCurrentEpisodeUrl } = playlistApi();
    const { episodeUrl, thumbnail } = videodata;
    
    useEffect(() => {
        let mounted = true;
    
        const getStreamUrlApi = async (url) => {
            if (mounted) {
                setBuffer(true);
                setError(null);
            };
            
            const { data, ok } = await getCurrentEpisodeUrl(url);
    
            if (!ok && mounted) return setError(data.message);
            console.log('stream link ', data.remote);
    
            if (mounted) {
                setStream(data.remote);
                setBuffer(false);
            };
        };
        
        getStreamUrlApi(episodeUrl);

        return () => mounted= false;
    }, []);

    // const renderPlayIcon = () => <AntDesign style={{ borderRadius: 0, backgroundColor: 'transparent', borderColor: 'transparent' }} name="caretright" size={60} color="red" />;

    // const renderPauseIcon = () => <Feather style={{ borderRadius: 0, backgroundColor: 'transparent', borderColor: 'transparent' }} name="pause" size={60} color="red" />

    return (
        <View style={styles.container}>
            <ActivityIndicator visible={buffer} style={styles.buffer}/>
            { error ? <ErrorMessage message={error} /> : null }
            <Video 
                ref={video}
                style={[styles.video, { aspectRatio: landscape ? 9/4.2 : 16/9 }]}
                posterSource={{
                    uri: thumbnail
                }}
                posterStyle={{
                    resizeMode: "cover"
                }}
                usePoster={stream ? false : true}
                source={{
                    // uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    // uri: "http://streamani.net/streaming.php?id=MTY2MTQ4&title=Higurashi+no+Naku+Koro+ni+Sotsu+Episode+5",
                    // uri: 'https://storage.googleapis.com/buoyant-set-320416/WJGRGS6AYSZX/22adesc22_1627501204.22.0_166616.mp4',
                    uri: 'https://streamtape.com/e/zGJg22rMq1tXmm/night-head-2041-episode-31627497601.0.mp4'
                    // uri: stream,
                    // overrideFileExtensionAndroid: "mp4"
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            {/* <View style={styles.buttons}>
                <TouchableHighlight
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
                >
                    <View
                        style={{ 
                            outline: 'none',
                            borderColor: 'transparent',
                            borderRadius: 0,
                            backgroundColor: 'transparent'
                        }}
                    >
                        {status.isPlaying ? renderPauseIcon() :  renderPlayIcon()}
                    </View>
                </TouchableHighlight>
            </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    buffer: {
        backgroundColor: 'transparent',
        height: 0,
        position: 'absolute',
        // top: 90
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // position: 'absolute',
        // top: 150,
        // left: '40%',
        // backgroundColor: 'orange'
    },
    container: {
        width: '100%',
    },
    video: {
        width: '100%',
        aspectRatio: 16/9, 
    },
})

export default VideoPlayer;