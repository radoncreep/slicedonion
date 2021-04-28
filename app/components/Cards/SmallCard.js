import React from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native'

const SmallCard = ({ episodeNumber, title, subtitle, imageUrl, onPress }) => {
    return (
        <TouchableHighlight style={styles.container} onPress={onPress} underlayColor="#000" activeOpacity={0.95}>
            <View>
                <View style={styles.favourite}>
                    {/* Favourrite Icon here instead of text */}
                    <Text style={{ color: 'red' }}>Like</Text>
                </View>

                <Image style={styles.image} source={{ uri: imageUrl }}/>

                <Text numberOfLines={1} style={styles.text}>{title}</Text>

                { episodeNumber && <Text style={styles.text}>{episodeNumber}</Text> }

                <View style={styles.subTitle}>
                    <Text style={{ color: '#fff', fontWeight: '500' }}>SUB</Text>
                    {/* Share going to be an icon to share */}
                    <Text style={{ color: '#fff', fontWeight: '500' }}>Share</Text>
                </View>
            </View>
        </TouchableHighlight>
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
        marginVertical: 3,
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