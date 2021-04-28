import React, { useState } from 'react';
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';
import LottieView from 'lottie-react-native';
import { LoginModal } from './LoginModal';


export default WathcLaterOff = () => {
    const [ isVisible, setIsVisible ] = useState(false);
    
    const handleLoginPress = () => {
        setIsVisible(true);
    };

    return (
        <>
            <LoginModal isVisible={isVisible} setIsVisible={setIsVisible}/>
            <View style={styles.container}> 
                <View style={styles.display}>
                    <LottieView 
                        autoPlay
                        loop
                        style={styles.animation}
                        source={require("../../assets/animations/24206-menhera-chan-at-cocopry-sticker-8.json")}
                    />
                    <Text style={styles.statement}>You have no watch list available</Text>
                    <Text style={styles.statement2}>Create an Onion account to create teary watchlist</Text>
                </View>

                <TouchableOpacity style={styles.login} onPress={handleLoginPress} >
                    <Text style={{ color: '#000', fontSize: 16, fontWeight: '500', textTransform: 'uppercase' }}>Login</Text>
                </TouchableOpacity>

                <View style={styles.lastContent}> 
                    <Text style={{ color: '#fff', fontSize: 13, fontWeight: '500'}}>Don't have an account?</Text>
                    <TouchableHighlight>
                        <Text style={{ color: '#ce6dcf', fontWeight: 'bold', fontSize: 12 }}> Sign up</Text>
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
        // borderWidth: 2,
        // borderColor: 'red',
        backgroundColor: '#ce6dcf',
        width: 300,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
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