import React, { useState, useEffect } from 'react';
import { Linking, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import Constants from 'expo-constants';

import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

WebBrowser.maybeCompleteAuthSession();

export const LoginModal = ({ isVisible=false, setIsVisible }) => {
    const [ request, response, promptAsync ] = Google.useAuthRequest({
        expoClientId: '1006744523670-14s4t2ar69bfun6flgn1fhqbmpnvviad.apps.googleusercontent.com'
    })

    useEffect(() => {
        if (response?.type === 'success' ) {
            const { authentication } = response;
            console.log(authentication);
        }
    }, [ response ]);


    return (
        <Modal 
            visible={isVisible}
            animationType="slide"
            onRequestClose={() => setIsVisible(false)}
            presentationStyle="fullScreen"
        >
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableWithoutFeedback style={styles.close} onPress={() => setIsVisible(false)}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff'}}>X</Text>
                    </TouchableWithoutFeedback>
                    <Text style={{ fontWeight: 'bold', fontSize: 18, color: '#fff', marginLeft: 50 }}>Log Into Your Account</Text>
                </View>

                <View style={styles.body}>
                    <Text style={{ color: '#ce6dcf', fontSize: 20, fontWeight: 'bold' }}>SLICEDONION</Text>
                    
                    <View style={styles.authOptions}>
                        <TouchableOpacity style={styles.googleStyle} onPress={() => promptAsync()}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Login With Google
                            </Text>
                        </TouchableOpacity>

                        {/* <TouchableOpacity style={styles.twitterStyle} onPress={handelOpenWithBrowser}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Login With Twitter
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.discordStyle} onPress={handelOpenWithBrowser}>
                            <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold', textTransform: 'uppercase' }}>
                                Login With Discord
                            </Text>
                        </TouchableOpacity> */}
                    </View>
                    
                    <Text numberOfLines={2} style={{ color: '#fff', fontSize: 13, fontWeight: '500', width: '75.7%', textAlign: 'center' }}>
                        Information you provide is guaranteed safe and will not be shared or used elsewhere.
                    </Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    authOptions: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center'
    },
    body: {
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'red',
    },
    close: {
        // marginLeft: 20
    },
    container: {
        backgroundColor: '#000',
        flex: 1
    },
    discordStyle: {
        backgroundColor: '#7289da',
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    googleStyle: {
        backgroundColor: '#ea4335',
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        flex: 1,
        paddingTop: 20
    },
    twitterStyle: {
        backgroundColor: 'rgba(29,161,242,1.00)',
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5
    },

})