import jwtDecode from 'jwt-decode';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/native';


import getAuthApi from '../api/getAuthApi';
import AppErrorMessage from '../components/form/AppErrorMessage';
import { AppForm } from '../components/form/AppForm';
import { CustomFormField } from '../components/form/CustomFormField';
import { SubmitFormButton } from '../components/form/SubmitFormButton';
import { registerUserAuth } from '../store/actions';
import authStorage from '../utility/storage'

const validationSchema = Yup.object().shape({
    newEmail: Yup.string().email().required().label("NewEmail"),
    currentEmail: Yup.string().email().required().label("CurrentEmail"),
    currentPassword: Yup.string().min(4).required().label("CurrentPassword")
});

export const ModifyEmailScreen = () => {
    const [ emailUpdateFailed, setEmailUpdateFailed ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleSubmit = async (userData) => {
        const { data, ok } = await getAuthApi.updateUserEmail(userData);
        
        if (!ok) {
            setEmailUpdateFailed(true);
            if (data.message) setErrorMsg(data.message);
            return;
        };

        setEmailUpdateFailed(false);

        await authStorage.removeToken()
        
        const user = jwtDecode(data.token);
        
        dispatch(registerUserAuth(user));
        
        authStorage.storeToken(data.token);
        
        navigation.goBack()
        
        return;
    };  

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={{ alignSelf: 'center' }}>
                    <AppErrorMessage error={errorMsg} visible={emailUpdateFailed}/> 
                </View>
                <AppForm
                    initialValues={{ newEmail: '', currentEmail: '', currentPassword: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="currentEmail"
                        icon="mail"
                        placeholder="Current Email"
                        textContentType="emailAddress"
                    />
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="newEmail"
                        icon="mail"
                        placeholder="New Email"
                        textContentType="emailAddress"
                    />
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="currentPassword"
                        placeholder="Current Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitFormButton title="Change Email Address"/>
                </AppForm>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f010f',
        padding: 10
    },
    formContainer: {
        marginTop: 25,
        marginBottom: 30,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
})