import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default ({ children }) => <View style={{ backgroundColor: 'transparent', flex: 1, }}>
    <LinearGradient 
        colors={["black", "#00000033", '#00000033']}
        start={{ x: 0, y: 1 }}
        end={{ x: 0, y: 0 }}
        style={styles.linearGradient}
        >
            {children}
    </LinearGradient>
</View>

const styles = StyleSheet.create({
 linearGradient: {
//   flex: 1,
  width: '100%',
  borderRadius: 5,
  opacity: 0.9
 }
});