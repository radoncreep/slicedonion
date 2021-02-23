import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import Screen from '../Screen';

const LargeCard = ({ imageurl, description, onPress, title }) => {
    return (
            <TouchableHighlight onPress={onPress} style={styles.container} activeOpacity={0.6} underlayColor="#020202">
                    <ImageBackground style={styles.imagebg} source={{ uri: imageurl }}>
                        <View style={styles.topContent}>
                            <Text style={styles.topTitle}>{title}</Text>
                            <Text style={styles.topDesc}>{description}</Text>
                        </View>

                        <View style={styles.lowerContent}>
                            <View style={styles.playview}>
                                {/* Play text will be replaced by play icon */}
                                <Text style={{ color: '#fff', fontSize: 14 }}>Play</Text>
                                <Text style={{ color: '#fff', fontSize: 14 }}>Watch Now</Text>
                            </View>
                            <Text style={{ color: '#fff', fontSize: 14 }}>23m</Text>
                        </View>
                    </ImageBackground>
            </TouchableHighlight>

    );
};

const styles = StyleSheet.create({
    container: {
        width: 380,
        marginRight: 10,
        backgroundColor: 'red',
        height: 220
    },
    imagebg: {
        // width: '100%',
        flex: 1,
        resizeMode: 'cover',
    },
    lowerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    playview: {
        flexDirection: 'row',
    },
    topContent: {
        alignSelf: 'flex-start',
        paddingLeft: 15,
        marginBottom: 100
    },
    topDesc: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
    topTitle: {
        color: '#F8F8FF',
        fontWeight: '500',
        fontSize: 20
    }
})

export default LargeCard;