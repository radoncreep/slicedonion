import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppErrorMessage from '../components/form/AppErrorMessage';
import { AppForm } from '../components/form/AppForm';
import { CustomFormField } from '../components/form/CustomFormField';
import { SubmitFormButton } from '../components/form/SubmitFormButton';

const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().min(4).required().label("CurrentPassword"),
    newPassword: Yup.string().min(4).required().label("NewPassword"),
    confirmPassword: Yup.string().min(4).required().label("ConfirmPassword"),
});

export const ModifyPaswwordScreen = () => {
    const [ errorMsg, setErrorMsg ] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {/* <View style={{ alignSelf: 'center' }}>
                    <AppErrorMessage error={errorMsg} visible={loginFailed}/> 
                </View> */}
                <AppForm
                    initialValues={{ currentPassword: '', newPassword: '', confirmPassword: ''}}
                    validationSchema={validationSchema}
                    onSubmit={() => console.log('value')}
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