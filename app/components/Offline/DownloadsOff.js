import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';

import { colorPallete } from '../../utils/colors';
import { RegisterModal } from '../AuthModals/RegisterModal';
import { LoginModal } from '../AuthModals/LoginModal';


export default DownloadsOff = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    const [ showSignUpModal, setShowSignUpModal ] = useState(false);

    const handleLoginPress = () => setIsVisible(true);

    const handleSignUpPress = () => setShowSignUpModal(true);

    return (
        <>
            <LoginModal isVisible={isVisible} setIsVisible={setIsVisible}/>
            <RegisterModal show={showSignUpModal} setModal={setShowSignUpModal} />
            <View style={styles.container}> 
                <View style={styles.display}>
                    <LottieView 
                        autoPlay
                        loop
                        style={styles.animation}
                        source={require("../../assets/animations/34128-naruto-animated-at-cocopry-sticker-0.json")}
                    />
                    <Text style={styles.statement}>No downloads yet?!?!😲</Text>
                    <Text style={styles.statement2}>Streams come and go but your downloads are always here for you</Text>
                </View>

                <TouchableOpacity style={styles.login} onPress={handleLoginPress} >
                    <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', textTransform: 'uppercase' }}>Login</Text>
                </TouchableOpacity>

                <View style={styles.lastContent}> 
                    <Text style={{ color: '#fff', fontSize: 13, fontWeight: '500'}}>Don't have an account?</Text>
                    <TouchableHighlight onPress={handleSignUpPress}>
                        <Text style={{ color: colorPallete.textPurple, fontWeight: 'bold', fontSize: 14 }}> Sign up</Text>
                    </TouchableHighlight>
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
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#000',
    },
    display: {
        alignItems: 'center',
        width: 300
    },
    lastContent: {
        width: 300,
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    login: {
        backgroundColor: colorPallete.textPurple,
        width: 150,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20
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