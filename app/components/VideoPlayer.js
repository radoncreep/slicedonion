import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { getStreamUrl } from '../api/getEpisode';
import ErrorMessage from './ErrorMessage';
import ActivityIndicator from './ActivityIndicator';

const VideoPlayer = ({ route }) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState('');
    const [ error, setError ] = useState('');
    const [ buffer, setBuffer ] = useState(false);

    const { episodeUrl } = route.params;
    
    useEffect(() => {
        let mounted = true;
    
        const getStreamUrlApi = async (url) => {
            if (mounted) {
                setBuffer(true);
                setError(null);
            }
            const { data, ok } = await getStreamUrl(url);
    
            if (!ok && mounted) return setError(data.message);
            console.log(data.remote);
    
            if (mounted) {
                setStream(data.remote);
                setBuffer(false);
            };
        };
        
        getStreamUrlApi(episodeUrl);

        return () => mounted= false;
    }, [])

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
                <Button 
                    title={status.isPlaying ? 'Pause' : 'Play'}
                    onPress={() => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync() }
                />
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