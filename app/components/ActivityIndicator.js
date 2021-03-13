import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ style, visible = false }) {
    if (!visible) return null;
    return (
        <View style={[styles.overlay, style ]}>
            <LottieView 
                style={styles.animation}
                autoPlay
                loop
                source={require("../assets/animations/9619-loading-dots-in-yellow.json")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    },
    overlay: {
        backgroundColor: '#000',
        height: '100%',
        width: '100%',
        zIndex: 1,
        alignItems: 'center'
    },
})

export default ActivityIndicator;