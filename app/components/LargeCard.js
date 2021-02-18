import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight } from 'react-native'
import Screen from './Screen';

function LargeCard(props) {
    const imageurl = 'http://cdn.epicstream.com/assets/uploads/ckeditor/images/1612903048_AoT%201.jpg'

    return (
        <TouchableHighlight >
            <View style={styles.container}>
                <ImageBackground style={styles.imagebg} source={{ uri: imageurl }}>
                    <View style={styles.topContent}>
                        <Text style={styles.topTitle}>Title</Text>
                        <Text style={styles.topDesc}>S1 E5 - Beautiful Day At The Beach</Text>
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
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '98%',
        height: 210,
        backgroundColor: '#fff',
        marginRight: 10
    },
    imagebg: {
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