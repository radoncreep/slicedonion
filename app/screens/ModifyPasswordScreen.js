import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import * as Yup from 'yup';

import AppErrorMessage from '../components/form/AppErrorMessage';
import { AppForm } from '../components/form/AppForm';
import { CustomFormField } from '../components/form/CustomFormField';
import { SubmitFormButton } from '../components/form/SubmitFormButton';
import getAuthApi from '../api/getAuthApi';
import authStorage from '../utility/storage'
import jwtDecode from 'jwt-decode';
import { registerUserAuth } from '../store/actions';


const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().min(4).required().label("CurrentPassword"),
    newPassword: Yup.string().min(4).required().label("NewPassword"),
    confirmPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must mastch').min(4).required().label("NewPassword")
});

export const ModifyPaswwordScreen = () => {
    const { email } = useSelector(state => state.register.user);

    const [ passwordUpdateFailed, setPasswordUpdateFailed ] = useState(false);
    const [ errorMsg, setErrorMsg ] = useState();

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const handleSubmit = async (userData) => {
        const { data, ok } = await getAuthApi.updateUserPwd(userData);
        
        if (!ok) {
            setPasswordUpdateFailed(true);
            if (data.message) setErrorMsg(data.message);
            return;
        };

        setPasswordUpdateFailed(false);

        await authStorage.removeToken();

        const user = jwtDecode(data.token);
        
        dispatch(registerUserAuth(user));
        
        authStorage.storeToken(data.token);

        navigation.goBack();

        return;
    };  

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                <View style={{ alignSelf: 'center' }}>
                    <AppErrorMessage error={errorMsg} visible={passwordUpdateFailed}/> 
                </View>
                <AppForm
                    initialValues={{ currentEmail: email, currentPassword: '', newPassword: '', confirmPassword: ''}}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="currentPassword"
                        placeholder="Current Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="newPassword"
                        placeholder="New Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitFormButton title="Reset Password"/>
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