import React from 'react';
import { ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { Feather } from '@expo/vector-icons';

import { MAX_HEADER_HEIGHT } from './Model';
import ListComponent from './ListComponent'


const { interpolate, Extrapolate } = Animated;

const Content = ({ description, imagebgUrl, navigation, title, yval }) => {
    const height = interpolate(yval,{
        inputRange: [-MAX_HEADER_HEIGHT, 0],
        outputRange: [0, MAX_HEADER_HEIGHT],
        extrapolate: Extrapolate.CLAMP
    });

    const opacity = interpolate(yval, {
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0 , MAX_HEADER_HEIGHT /2],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP
    })

    return (
        <ImageBackground 
            style={styles.container} 
            source={{ uri: imagebgUrl }}
            resizeMode="cover"
        >
            <Animated.ScrollView
                style={styles.container}
                showsVerticalScrollIndicator={false}
                scrollEventThrottle={1}
            >
                <View style={styles.header}>
                    <Animated.View 
                        style={[styles.gradient, { height: 450, marginBottom: 0 }]}
                    >
                        <LinearGradient 
                            style={StyleSheet.absoluteFill}
                            start={[0, 0.3]}
                            end={[0, 1]}
                            colors={["transparent", "rgba(0, 0, 0, 0.5)", "black"]}
                        >
                            <View style={[styles.intro, { position: 'absolute', top: 200, left: 10 }]}>
                                <Animated.Text style={[styles.introHeading, { opacity }]}>
                                    {title}
                                </Animated.Text>
                                <Text numberOfLines={2} style={styles.introText}>
                                    {description}
                                </Text>
                                <Pressable underlayColor="gray" style={styles.playview} onPress={() => console.log('re')} >
                                    <Feather name="play" size={24} color="#bd44c9" />
                                    <Text style={{ color: '#bd44c9', fontSize: 14, fontWeight: 'bold' }}>Play Now</Text>
                                </Pressable >
                            </View>
                        </LinearGradient>
                    </Animated.View>

                    <View style={[styles.list, { backgroundColor: 'black' }]} needsOffscreenAlphaCompositing={false}>
                        <ListComponent navigation={navigation} />
                    </View>

                </View>
            </Animated.ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: 'red'
    },
    header: {

    },
    gradient: {

    },
    intro: {
        width: '100%',
        paddingHorizontal: 15
    },  
    introHeading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },
    introText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#fff'
    },
    list: {
        paddingHorizontal: 8.5
    },
    playview: {
        flexDirection: 'row',
        backgroundColor: '#0f011f',
        justifyContent: 'space-around',
        width: 135,
        borderRadius: 40,
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        alignSelf: 'center'
    },
});

export default Content;