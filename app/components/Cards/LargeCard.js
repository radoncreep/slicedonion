import React from 'react';
import { View, StyleSheet, Text, ImageBackground, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Pressable } from 'react-native'
import { Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const LargeCard = ({ released, thumbnail, onPress, title }) => {
    return (
        <TouchableHighlight onPress={onPress} style={styles.container} activeOpacity={0.6} underlayColor="#020202">
            <ImageBackground style={styles.imagebg} source={{ uri: thumbnail }} resizeMode="cover">
                <LinearGradient
                    style={StyleSheet.absoluteFill}
                    start={[1, 4]}
                    end={[0, 2.5]}
                    colors={["transparent", "rgba(0, 0, 0, 1)", "rgba(0, 0, 0, 0.6)"]}
                >
                    <View style={styles.topContent}>
                        <Text style={styles.topTitle} numberOfLines={1}>{title}</Text>
                        <Text style={styles.topDesc}>{released}</Text>
                    </View>

                    <View style={styles.lowerContent}>
                        <Pressable underlayColor="gray" style={styles.playview} onPress={() => console.log('re')} >
                            <Feather name="play" size={24} color="#bd44c9" />
                            <Text style={{ color: '#bd44c9', fontSize: 14, fontWeight: 'bold' }}>Play Now</Text>
                        </Pressable >
                        {/* <Text style={{ color: '#fff', fontSize: 14 }}>23m</Text> */}
                    </View>
                </LinearGradient>
            </ImageBackground>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 340,
        marginRight: 10,
        height: 220,
        marginTop: 25
    },
    imagebg: {
        flex: 1,
    },
    lowerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    playview: {
        flexDirection: 'row',
        backgroundColor: '#0f011f',
        justifyContent: 'space-around',
        width: 135,
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    topContent: {
        alignSelf: 'flex-start',
        paddingLeft: 15,
        marginBottom: 100,
        paddingRight: 30,
        paddingTop: 10
    },
    topDesc: {
        color: '#F8F8FF',
        fontWeight: '500',
        fontSize: 13,
    },
    topTitle: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '500'
    }
})

export default LargeCard;