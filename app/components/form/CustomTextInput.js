import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

export const CustomTextInput = ({ placeholder }) => (
    <View  style={styles.container}>
        <TextInput 
            placeholderTextColor="#523d57"
            placeholder={placeholder}
        />
    </View>
);

const styles = StyleSheet.create({
    container: {

    },
})