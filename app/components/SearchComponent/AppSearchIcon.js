import React from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


export const AppSearchIcon = () => {
    const navigation = useNavigation();

    return (
        <Pressable 
            onPress={() => navigation.navigate('SearchScreen')}
            style={{ 
                alignItems: 'center',
                justifyContent: 'center', 
                height: '100%', 
                width: 60,  
            }}
        >
            <EvilIcons name="search" size={30} color="white" />
        </Pressable> 
    )
};

const styles = StyleSheet.create({
    container: {

    }
})