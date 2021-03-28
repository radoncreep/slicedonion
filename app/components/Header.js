import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { HEADER_DELTA, MIN_HEADER_HEIGHT } from './Model';
import Animated, { Extrapolate, interpolate } from 'react-native-reanimated';

const Header = ({ title, yval }) => {
    const opacity = interpolate(yval, {
        inputRange: [HEADER_DELTA - 16, HEADER_DELTA],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
    });

    const textOpacity = interpolate(yval, {
        inputRange: [HEADER_DELTA - 8, HEADER_DELTA  - 4],
        outputRange: [0, 1],
        extrapolate: Extrapolate.CLAMP
    });


    return (
        <Animated.View style={[styles.container, { opacity }]}>
            <Animated.Text style={[styles.title, { textOpacity }]}>{title}</Animated.Text>
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: MIN_HEADER_HEIGHT,
        backgroundColor: "black",
        paddingTop: Constants.statusBarHeight
    },
    title: {
        color: 'white',
        fontSize: 16
    },
});

export default Header;