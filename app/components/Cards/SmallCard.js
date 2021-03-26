import React, { useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

import { useDispatch } from 'react-redux';
import { OptionPicker } from '../OptionPicker';

const SmallCard = ({ contentType, episodeNumber, style, title, subtitle, imageUrl, onPress }) => {
    const [ selectedOption, setSelectedOption ] = useState();

    return (
        <View style={[styles.container, style]} >
            <TouchableHighlight onPress={onPress} underlayColor="#000" activeOpacity={0.95}>
                <Image style={styles.image} source={{ uri: imageUrl }}/>    
            </TouchableHighlight>

            <Text numberOfLines={1} style={styles.text}>{title}</Text>

            { episodeNumber && <Text style={styles.text}>{episodeNumber}</Text> }

            <View style={styles.subContent}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>SUB</Text>
                <TouchableHighlight 
                    style={styles.options} 
                    onPress={() => {
                        <OptionPicker />
                        console.log('hi');
                    }
                }z
                >
                    <SimpleLineIcons name="options-vertical" size={20} color="white" />
                </TouchableHighlight>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f011f',
        width: 150,
        alignSelf: 'center',
        marginRight: 8 
    },
    image: {
        width: '100%',
        height: 170,
    },
    options: {
        width: 30
    },
    subContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingLeft: 10
    },
    text: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        marginHorizontal: 10
    }
});

export default SmallCard;