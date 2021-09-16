import React from 'react';
import { StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default GradinetView = ({ children }) => {
    return (
        <LinearGradient
            style={StyleSheet.absoluteFill}
            start={[0, 0.3]}
            end={[0, 1]}
            colors={["transparent", "rgba(0, 0, 0, 0.5)", "black"]}
        >
            {children}
        </LinearGradient>
    )
}