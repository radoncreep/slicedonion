import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';

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

const styles = StyleSheet.create({
 linearGradient: {
//   flex: 1,
  width: '100%',
  borderRadius: 5,
  opacity: 0.9
 }
});