import React from 'react';
import { Dimensions, Modal, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import * as Yup from 'yup';
import { EvilIcons } from '@expo/vector-icons';

import { AppForm } from '../form/AppForm';
import { CustomFormField } from '../form/FormField';

const validationSchema = Yup.object().shape({
    email: Yup.string().email().required().label("Email"),
    password: Yup.string().min(4).required().label("Password")
});

const { height, width} = Dimensions.get("window");

export const RegisterModal = ({ show, setModal }) => {
    console.log(show);

    const handleSubmit = (userData) => {
        console.log(userData)
    };

    return (
        <Modal 
            visible={show}
            animationType="slide"
            onRequestClose={() => setModal(false)}
            presentationStyle="fullScreen"
            >
            <View 
                style={styles.container}
            >
                <View style={styles.header}>
                    <TouchableHighlight onPress={() => setModal(false)}>
                        <EvilIcons style={styles.close} name="close" size={26} color="white" />
                    </TouchableHighlight>
                    <Text style={{ color: '#fff', fontSize: 16, position: 'absolute', left: '40%' }}>Register</Text>
                </View>
                <View style={styles.formContainer}>
                    <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold' }}>SLICEDONION</Text>
                    <View style={styles.formInner}>
                        <AppForm
                            initialValues={{ emai: '', password: ''}}
                            validationSchema={validationSchema}
                            onSubmit={handleSubmit}
                        >
                            <CustomFormField 
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
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
                        </AppForm>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    close: {
        backgroundColor: 'red',
        width: 30
    },
    container: {
        flex: 1,
        backgroundColor: "#0f010f",
        padding: 20,
    },
    formContainer: {
        // backgroundColor: 'white',
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    formInner: {
        width: width,
        paddingHorizontal: 20
    },  
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    }
});