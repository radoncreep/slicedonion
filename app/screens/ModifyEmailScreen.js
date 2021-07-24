import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Yup from 'yup';

import AppErrorMessage from '../components/form/AppErrorMessage';
import { AppForm } from '../components/form/AppForm';
import { CustomFormField } from '../components/form/CustomFormField';
import { SubmitFormButton } from '../components/form/SubmitFormButton';

const validationSchema = Yup.object().shape({
    newEmail: Yup.string().email().required().label("NewEmail"),
    confirmEmail: Yup.string().email().required().label("ConfirmEmail"),
    currentPassword: Yup.string().min(4).required().label("CurrentPassword")
});

export const ModifyEmailScreen = () => {
    const [ errorMsg, setErrorMsg ] = useState();

    return (
        <View style={styles.container}>
            <View style={styles.formContainer}>
                {/* <View style={{ alignSelf: 'center' }}>
                    <AppErrorMessage error={errorMsg} visible={loginFailed}/> 
                </View> */}
                <AppForm
                    initialValues={{ newEmail: '', condirmEmail: '', currentPassword: ''}}
                    validationSchema={validationSchema}
                    onSubmit={() => console.log('value')}
                >
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="newEmail"
                        icon="mail"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <CustomFormField 
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                        name="confirmEmail"
                        icon="mail"
                        placeholder="Email"
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