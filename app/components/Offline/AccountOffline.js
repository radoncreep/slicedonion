import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { colorPallete } from '../../utils/colors';
import { RegisterModal } from '../AuthModals/RegisterModal';
import { LoginModal } from '../AuthModals/LoginModal';


export const AccountOffline = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    const [ showSignUpModal, setShowSignUpModal ] = useState(false);

    const handleLoginPress = () => setIsVisible(true);

    const handleSignUpPress = () => setShowSignUpModal(true);

    return (
        <>
            <LoginModal 
                isVisible={isVisible} 
                setIsVisible={setIsVisible}
                showRegisterModal={showSignUpModal}
                setShowRegisterModal={setShowSignUpModal}
            />
            <RegisterModal 
                showRegisterModal={showSignUpModal} 
                setShowRegisterModal={setShowSignUpModal} 
                isVisible={isVisible} 
                setIsVisible={setIsVisible}
            />
            <View style={styles.container}> 
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20}}>
                    <Text style={{ 
                        color: '#fff', 
                        fontSize: 24, 
                        fontWeight: '500',
                        textTransform: 'uppercase'
                        }}>
                            Welcome To
                    </Text>
                    <Text style={{ 
                        color: colorPallete.textPurple, 
                        fontSize: 20, 
                        fontWeight: 'bold',
                        }}> SLICEDONION
                    </Text>
                </View>
                <View style={{ width: '75%', marginBottom: 20 }}>
                    <Text style={{ color: 'grey', textAlign: 'center', fontSize: 12, fontWeight: 'bold' }}>
                        Log into your ONION account or Create one to use slicedonion effectively.
                    </Text>
                </View>

                <TouchableOpacity style={styles.login} onPress={handleSignUpPress} >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>Create Account</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.login} onPress={handleLoginPress} >
                   <Text style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', textTransform: 'uppercase' }}>Login</Text>
                </TouchableOpacity>

                <View style={styles.lastContent}> 
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.footerText, { color: '#523d57', fontSize: 14 }]}>Version 1.0.0</Text>
                        <Text style={styles.footerText}>radoncrxxp@ent</Text>
                        <Text style={styles.footerText}>Copyright 2021</Text>
                    </View>
                </View>
            </View>
        </>
    )
};

const styles = StyleSheet.create({
    animation: {
        width: 250,
        height: 150,
        marginBottom: 10
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    display: {
        alignItems: 'center',
        width: 300
    },
    footerText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 12
    },
    lastContent: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
    },
    login: {
        backgroundColor: colorPallete.textPurple,
        width: '75%',
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 5
    },
    statement: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    statement2: {
        color: 'grey',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center'
    },
})