import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'

const SmallCard = ({ title, subtitle, imageUrl,onPress }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor="#000" activeOpacity={0.95}>
            <View >
                <View style={styles.favourite}>
                    {/* Favourrite Icon here instead of text */}
                    <Text style={{ color: 'red' }}>Like</Text>
                </View>
                <Image style={styles.image} source={{ uri: imageUrl }}/>
                <Text numberOfLines={1} style={styles.text}>{title}</Text>
                <View style={styles.subTitle}>
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>SUB</Text>
                    {/* Share going to be an icon to share */}
                    <Text style={{ color: '#fff', fontWeight: 'bold' }}>Share</Text>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#660000',
        width: 150,
        alignSelf: 'center',
        marginRight: 8 
    },
    image: {
        width: 150,
        height: 170,
    },
    favourite: {
        position: 'absolute',
        color: 'red',
        top: 120,
        right: 10,
        borderColor: 'green',
        zIndex: 1
    },
    subTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
        marginVertical: 5,
        marginHorizontal: 10
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