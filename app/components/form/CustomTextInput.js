import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const CustomTextInput = ({ icon, ...otherProps }) => {
    return (
        <View  style={styles.container}>
            <AntDesign 
                name={icon}
                size={22}
                color="white"
                style={styles.icon}
            />
            <TextInput 
                placeholderTextColor="#523d57"
                style={{ color: 'white', fontWeight: '500', fontSize: 14, textDecorationLine: "none" }}
                {...otherProps}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%'
    },
    icon: {
        marginRight: 10,
    }
})