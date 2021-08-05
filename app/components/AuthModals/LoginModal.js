import React, { useEffect, useState } from 'react';
import { Dimensions, Modal, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Yup from 'yup';
import { EvilIcons } from '@expo/vector-icons';
import jwtDecode from 'jwt-decode';
import { useDispatch } from 'react-redux';

import { AppForm } from '../form/AppForm';
import { CustomFormField } from '../form/CustomFormField';
import { SubmitFormButton } from '../form/SubmitFormButton';
import authApi from '../../api/getAuthApi';
import { registerUserAuth } from '../../store/actions';
import AppErrorMessage from '../form/AppErrorMessage';
import authStorage from '../../utility/storage';


const validationSchema = Yup.object().shape({
    email: Yup.string().trim().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password")
});

const { width} = Dimensions.get("window");

export const LoginModal = ({ isVisible, setIsVisible, showRegisterModal, setShowRegisterModal }) => {
    const [ loginFailed, setLoginFailed ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState();
    const dispatch = useDispatch();

    let mounted = true;

    useEffect(() => {
        
        return () => mounted = false;
    })

    const handleAuthNavigation = () => {
        setIsVisible((prevState) => !prevState);
        setShowRegisterModal((prevState) => !prevState);
    }

    const handleSubmit = async (userData) => {
        const { data, ok } = await authApi.loginUser(userData);
        
        if (!ok && mounted) {
            setLoginFailed(true);
            if (data.message) setErrorMsg(data.message);
            return;
        };

        if (mounted) setLoginFailed(false);
        const user = jwtDecode(data.token);
        dispatch(registerUserAuth(user));
        authStorage.storeToken(data.token);
        return;
    };  

    return (
        <View>
            <Modal 
                visible={isVisible}
                animationType="slide"
                onRequestClose={() => setIsVisible(false)}
                presentationStyle="fullScreen"
                >
                <View 
                    style={styles.container}
                >
                    <View style={styles.header}>
                        <TouchableHighlight onPress={() => setIsVisible(false)}>
                            <EvilIcons style={styles.close} name="close" size={26} color="white" />
                        </TouchableHighlight>
                        <Text style={{ color: '#fff', fontSize: 16, position: 'absolute', left: '40%' }}>Login</Text>
                    </View>
                    <View style={styles.formContainer}>
                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>SLICEDONION</Text>

                        <View style={styles.formInner}>
                            <View style={{ alignSelf: 'center' }}>
                                <AppErrorMessage error={errorMsg} visible={loginFailed}/> 
                            </View>
                            <AppForm
                                initialValues={{ email: '', password: ''}}
                                validationSchema={validationSchema}
                                onSubmit={handleSubmit}
                            >
                                <CustomFormField 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    keyboardType="email-address"
                                    name="email"
                                    icon="mail"
                                    placeholder="Email"
                                    textContentType="emailAddress"
                                />
                                <CustomFormField 
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                    icon="lock"
                                    name="password"
                                    placeholder="Password"
                                    secureTextEntry
                                    textContentType="password"
                                />
                                <SubmitFormButton title="Login to Onion Account"/>
                            </AppForm>
                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: '#fff', marginBottom: 50, textAlign: 'center' }}>
                            Your Information is guarranteed protected and will not be shared to any third-party for use.
                        </Text>
                        <View style={styles.footerInner}>
                            <Pressable>
                                <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}>
                                    Forgot Password
                                </Text>
                            </Pressable>
                            <Text style={{ color: 'white', fontSize: 14, marginHorizontal: 5 }}> | </Text>
                            <Pressable
                                onPress={handleAuthNavigation}
                            >
                                <Text style={{ color: '#c24bde', fontWeight: '500', fontSize: 14 }}>
                                    Create an Onion Account
                                </Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    close: {
        // width: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#0f010f",
        padding: 20,
    },
    footer: {
        flex: 1,
        padding: 20
    },
    footerInner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    formContainer: {
        marginTop: 100,
        marginBottom: 30,
        width: '100%',
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    formInner: {
        alignItems: 'center',
        width: width,
        padding: 20
    },  
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});