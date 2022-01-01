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
            
            const { 
                data: { message, streamLink },
                ok 
            } = await getCurrentEpisodeUrl(url);
    
            if (!ok && mounted) return setError(message);
            console.log('server link ', streamLink);
    
            if (mounted) {
                setStream(streamLink);
                setBuffer(false);
            };
        };
        
        getStreamUrlApi(episodeUrl);

        return () => mounted= false;
    }, []);

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
                    uri: stream
                    // uri: 'https://pr30.sbcdnvideo.com/tysxfmmge666j6cdabnrltk2fijvbundfxl3quo4bjrrdwmoif4mwt5jw6ja/kimetsu-no-yaiba-yuukaku-hen-episode-11638721562.0.mp4'
                }}
                useNativeControls
                resizeMode="contain"
                isLooping
                shouldPlay={true}
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