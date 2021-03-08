import React from 'react';
import { View, StyleSheet, Text, ImageBackground, ScrollView, OpaqueColorValue } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import ListComponent from '../components/ListComponent';

const LandingScreen = ({ navigation }) => {
    return (
        <ImageBackground style={styles.container} source={{ uri: "https://gogocdn.net/cover/dr-stone-stone-wars.png" }}>
                <ScrollView>
                    <View style={styles.cover}></View>
                    <ImageBackground style={{ width: '100%', height: '100%' }} source={{ uri: 'https://pngtree.com/so/black'}}>
                    <View style={styles.intro}>
                        <Text style={styles.introHeading}>DOCTOR STONE</Text>
                        <Text numberOfLines={3} style={styles.introText}>
                            In a world where demons feed on unsuspecting humans,
                            fragments of the legendary and feared demon Ryoumen 
                            Sukuna were lost and scattered about. Should any demon consume Sukuna's 
                            body parts, the power they gain could destroy the world as we know it. 
                            Fortunately, there exists a mysterious school of Jujutsu Sorcerers who exist to protect the precarious existence of the living from the undead!\n\nYuuji Itadori is high schooler who spends his days visiting his bedridden grandfather. Although he looks like your average teenager, his immense physical strength is something to behold! Every sports club wants him to join, but Itadori would rather hang out with the school outcasts in the Occult Club. One day, the club manages to get their hands on a sealed cursed object, but little do they know the terror they'll unleash when they break the seal
                        </Text>
                    </View>
                    <View style={styles.list} needsOffscreenAlphaCompositing={false}>
                        <ListComponent navigation={navigation} />
                    </View>
                    </ImageBackground>
                </ScrollView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    cover: {
        height: 350
    },
    intro: {
        width: '100%',
        paddingHorizontal: 15,
        marginBottom: 50
    },  
    introHeading: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    },
    introText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#fff'
    },
    list: {
        // masked view or opacity here
        // backgroundColor: '#000',
    },
    text: {
        color: '#fff',
        fontSize: 16,
    }
})

export default LandingScreen;