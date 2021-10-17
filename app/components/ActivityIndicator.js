import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';

function ActivityIndicator({ style, visible = false }) {
    if (!visible) return null;

    return (
        <View style={[ style ]}>
            <LottieView 
                style={[styles.animation, style ]}
                autoPlay
                loop
                source={require("../assets/animations/lf30_editor_tz7s1ndi.json")}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    animation: {
        width: 100,
        height: 100,
    }
})

export default ActivityIndicator;