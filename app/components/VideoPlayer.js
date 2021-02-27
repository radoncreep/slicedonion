import React, { useRef, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const VideoPlayer = (props) => {
    const video = useRef(null);
    const [ status, setStatus ] = useState({});

    return (
        <View style={styles.container}>
            <Video 
                ref={video}
                style={styles.video}
                source={{
                    uri: 'https://storage.googleapis.com/lexical-bit-302900/VNP9SJU3ZAWB/22a_1614281429151721.mp4',
                    // uri: "https://gogo-play.net/?id=MTE2MTkz&title=Boruto%3A+Naruto+Next+Generations+Episode+100.mp4"
                }}
                useNativeControls
                resizeMode="contain"
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
        paddingTop: 50
    },
    video: {
        width: '100%',
        height: 200
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default VideoPlayer;