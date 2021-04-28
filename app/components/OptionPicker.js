import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const OptionPicker = () => {
    return (
        <View style={styles.container}>
            <Text style={{ color: '#fff' }}>HI</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 70
    },
});