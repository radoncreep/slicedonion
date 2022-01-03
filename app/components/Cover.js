import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import { HEADER_DELTA, MAX_HEADER_HEIGHT } from './Model';

const { interpolate, Extrapolate } = Animated;

const Cover = ({ yval }) => {
    const scale = interpolate(yval, {
        inputRange: [-MAX_HEADER_HEIGHT, 0],
        outputRange: [4, 1],
        extrapolateRight: Extrapolate.CLAMP
    });

    const opacity = interpolate(yval, {
        inputRange: [-64, 0, HEADER_DELTA],
        // once at headerdelta the mask has full opcity
        outputRange: [0, 0.2, 1],
        extrapolate: Extrapolate.CLAMP
    });

    return (
        <Animated.View tyle={[ styles.container, { transform: [{ scale }]}]}>
            <Image style={styles.image} source={{ uri: 'https://gogocdn.net/cover/dr-stone-stone-wars.png' }} />
            <Animated.View 
                style={{ ...StyleSheet.absoluteFillObject, backgroundColor: "black", opacity }}
            />

        </Animated.View>
    )
};

const styles = StyleSheet.create({
    container: {

    },
    image: {}
});

export default Cover;