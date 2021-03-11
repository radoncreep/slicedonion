import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated from 'react-native-reanimated';
import { onScroll } from 'react-native-redash';
import { MAX_HEADER_HEIGHT } from './Model';
import ListComponent from './ListComponent'

const { interpolate, Extrapolate } = Animated;

const Content = ({ description, navigation, title, yval }) => {
    // const scroller = onScroll;
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
                    <View style={[styles.intro, { position: 'absolute', top: 300 }]}>
                        <Animated.Text style={[styles.introHeading, { opacity }]}>
                            {title}
                        </Animated.Text>
                        <Text numberOfLines={4} style={styles.introText}>
                            {description}
                        </Text>
                    </View>
                    </LinearGradient>
                </Animated.View>

                <View style={[styles.list, { backgroundColor: 'black' }]} needsOffscreenAlphaCompositing={false}>
                    <ListComponent navigation={navigation} />
                </View>

            </View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {

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
    }
});

export default Content;