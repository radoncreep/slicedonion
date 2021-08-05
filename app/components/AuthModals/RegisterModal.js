import React, { useEffect, useState } from 'react';
import { Dimensions, Modal, Pressable, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Yup from 'yup';
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

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

export const RegisterModal = ({ showRegisterModal, setShowRegisterModal, isVisible, setIsVisible }) => {
    const [ registerError, setRegisterError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const dispatch = useDispatch();
    let mounted = true;

    useEffect(() => {
        return () => mounted = false
    })
    
    const handleAuthNavigation = () => {
        setShowRegisterModal((prevState) => !prevState);
        setIsVisible((prevState) => !prevState);
    }

    const handleSubmit = async (userData) => {
        if (mounted) setLoading(true);
        const { data, ok } = await authApi.registerUser(userData);
        
        if (!ok && mounted) {
            setLoading(false);
            if (data.message) setRegisterError(data.message);
            return;
        };

        if (mounted) {   
            setLoading(false);
            setRegisterError(null);
        }

        const newUser = jwtDecode(data.token);
        dispatch(registerUserAuth(newUser));
        authStorage.storeToken(data.token);
        return;
    };


    return (
        <View>
            <Modal 
                visible={showRegisterModal}
                animationType="slide"
                onRequestClose={() => setShowRegisterModal(false)}
                presentationStyle="fullScreen"
                >
                <View 
                    style={styles.container}
                >
                    <View style={styles.header}>
                        <TouchableHighlight onPress={() => setShowRegisterModal(false)}>
                            <EvilIcons style={styles.close} name="close" size={26} color="white" />
                        </TouchableHighlight>
                        <Text style={{ color: '#fff', fontSize: 16, position: 'absolute', left: '40%' }}>Register</Text>
                    </View>
                    <View style={styles.formContainer}>

                        <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>SLICEDONION</Text>
                        
                        <View style={styles.formInner}>
                            <View style={{ alignSelf: 'center' }}>
                                <AppErrorMessage error={registerError} visible={registerError} />
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
                                    icon="mail"
                                    name="email"
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
                                <SubmitFormButton title="Create Account" />
                            </AppForm>

                        </View>
                    </View>
                    <View style={styles.footer}>
                        <Text style={{ fontSize: 13, fontWeight: '500', color: '#fff', marginBottom: 50, textAlign: 'center' }}>
                            Your Information is guarranteed protected and will not be given to any third-party for use.
                        </Text>
                        <View style={styles.footerInner}>
                            <Pressable>
                                <Text style={{ color: 'white', fontWeight: '500', fontSize: 14 }}>
                                    Have an account? 
                                </Text>
                            </Pressable>
                            <Pressable
                                onPress={handleAuthNavigation}
                            >
                                <Text style={{ color: '#c24bde', fontWeight: '500', fontSize: 14, marginLeft: 10 }}>
                                    Login
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