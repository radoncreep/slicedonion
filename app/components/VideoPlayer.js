import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions, TouchableHighlight, Text } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

import { getStreamUrl } from '../api/getEpisode';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

const VideoPlayer = ({ videodata }) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState('');
    const [ error, setError ] = useState('');
    const [ buffer, setBuffer ] = useState(false);

    // const { episodeUrl } = videodata.params;
    
    useEffect(() => {
        let mounted = true;
    
        const getStreamUrlApi = async (url) => {
            if (mounted) {
                setBuffer(true);
                setError(null);
            }
            const { data, ok } = await getStreamUrl(url);
    
            if (!ok && mounted) return setError(data.message);
            console.log('stream link ', data.remote);
    
            if (mounted) {
                setStream(data.remote);
                setBuffer(false);
            };
        };
        
        getStreamUrlApi(videodata);

        return () => mounted= false;
    }, []);

    // const handlePlayAndPause = () => {
        
    // }

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
                // shouldPlay={true}
            />
            <View style={styles.buttons}>
                <TouchableHighlight
                    style={{ width: 150, height: 50, backgroundColor: 'red', marginTop: 70 }}
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
                >
                    <Text>
                        {status.isPlaying ? 'Pause' :  'Play'}
                    </Text>
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
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: '#ecf0f1',
        // paddingTop: 50
    },
    video: {
        width: Dimensions.get('window').width,
        height: 250, 
        backgroundColor: '#000'
    },
})

export default VideoPlayer;