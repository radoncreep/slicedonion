import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Button, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { getStreamUrl } from '../api/getEpisode';
import ErrorMessage from './ErrorMessage';

const VideoPlayer = ({ videodata }) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});
    const [ stream, setStream ] = useState('');
    const [ error, setError ] = useState('');

    console.log('hiiiiiiiiiiiiiii');

    const getStreamUrlApi = async (url) => {
        setError(null);
        const { data, ok } = await getStreamUrl(url);

        if (!ok) return setError(data.message);
        console.log('link ', data.remote);

        setStream(data.remote);
    };

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            getStreamUrlApi(videodata);
        } else {
            return
        };

        return () => mounted = false;
    }, [])

    return (
        <View style={styles.container}>
            { error ? <ErrorMessage message={error} /> : null }
            <Video 
                ref={video}
                style={styles.video}
                source={{


                    uri: stream,
                    // uri: "https://cdn6.cloud9xx.com/user1342/fabe3e2f394bbe8bd7868634e5e0e98d/EP.20.360p.mp4?token=6-shnqCqWs3PXTP5ZWuccA&expires=1614491146&id=153380",
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