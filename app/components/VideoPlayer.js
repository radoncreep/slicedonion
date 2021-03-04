import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { getStreamUrl } from '../api/getEpisode';
import ErrorMessage from './ErrorMessage';

const VideoPlayer = ({ route }) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState('');
    const [ error, setError ] = useState('');
    let mounted = useRef(false);

    const { episode, title, id, episodeUrl} = route.params;

    const getStreamUrlApi = async (url) => {
        if (mounted.current) setError(null);
        const { data, ok } = await getStreamUrl(url);

        if (!ok && mounted.current) return setError(data.message);
        console.log(data.remote);

        if (mounted.current) setStream(data.remote);
    };

    useEffect(() => {
        mounted.current = true;
        
        getStreamUrlApi(episodeUrl);

        return () => mounted.current = false;
    }, [])

    return (
        <View style={styles.container}>
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
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default VideoPlayer;