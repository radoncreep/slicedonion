import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const CustomTextInput = ({ placeholder }) => (
    <View  style={styles.container}>
        <TextInput 
            placeholderTextColor="#523d57"
            placeholder={placeholder}
            style={{ color: 'white', fontWeight: '500', fontSize: 14, textDecorationLine: "none" }}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {

    },
})