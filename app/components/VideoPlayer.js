import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions, TouchableHighlight, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { AntDesign } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import { playlistApi } from '../api/getPlaylist';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

const { width } = Dimensions.get("screen");



const VideoPlayer = ({ videodata }) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState('');
    const [ error, setError ] = useState('');
    const [ buffer, setBuffer ] = useState(false);

   
    const { getCurrentEpisodeUrl } = playlistApi();
    const { episodeUrl } = videodata;
    
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

    const renderPlayIcon = () => <AntDesign style={{ borderRadius: 0, backgroundColor: 'transparent', borderColor: 'transparent' }} name="caretright" size={60} color="red" />;

    const renderPauseIcon = () => <Feather style={{ borderRadius: 0, backgroundColor: 'transparent', borderColor: 'transparent' }} name="pause" size={60} color="red" />

    return (
        <View style={styles.container}>
            <ActivityIndicator visible={buffer} style={styles.buffer}/>
            { error ? <ErrorMessage message={error} /> : null }
            <Video 
                ref={video}
                style={styles.video}
                source={{
                    uri: stream,
                    overrideFileExtensionAndroid: "mu38"
                }}
                useNativeControls
                resizeMode="cover"
                isLooping
                onPlaybackStatusUpdate={(status) => setStatus(() => status)}
            />
            <View style={styles.buttons}>
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
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    buffer: {
        backgroundColor: 'transparent',
        height: 0,
        position: 'absolute',
        top: 90
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 150,
        left: '40%'
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        width: '100%'
    },
    video: {
        width: Dimensions.get('window').width,
        flex: 1, 
        // backgroundColor: '#000'
    },
})

export default VideoPlayer;