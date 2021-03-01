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

    const { episode, title, id, episodeUrl} = route.params;
    // let studd = episodeUrl.split('/');
    // let ep = episode.split(' ');
    // let num = ep[ep.length - 1]
    // console.log(num)
    // let op = studd[studd.length - 1].replace("-episode-1", "");
    // // console.log('name ', studd);
    // console.log(op)
    // console.log(videoprops);

    const getStreamUrlApi = async (url) => {
        setError(null);
        const { data, ok } = await getStreamUrl(url);

        if (!ok) return setError(data.message);
        console.log(data.remote);

        setStream(data.remote);
    };

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            getStreamUrlApi(episodeUrl);
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
                    // uri: 'https://storage.googleapis.com/lexical-bit-302900/VNP9SJU3ZAWB/22a_1614281429151721.mp4',
                    // uri: 'https://storage.googleapis.com/decisive-bazaar-303901/HUMI76QET9H5/22a_1614421796_149757.mp4',
                    // uri: 'https://storage.googleapis.com/cohesive-apogee-306113/HUONO36FL13M/22a_1614493171153380',
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