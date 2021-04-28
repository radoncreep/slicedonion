import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, TextInput, View } from 'react-native';
import { CustomTextInput } from './CustomTextInput';
import AppErrorMessage from './AppErrorMessage';

export const CustomFormField = ({  icon, name, style, ...otherProps }) => {
    const { setFieldTouched, setFieldValue, errors, touched, values} =  useFormikContext();

    return (
        <>
            <View style={[styles.container, style ]}>
                <CustomTextInput 
                    onBlur={() => setFieldTouched(name)}
                    onChangeText={(text) => setFieldValue(name, text)}
                    value ={values[name]}
                    {...otherProps}
                    icon={icon}
                />
            </View>
            <AppErrorMessage error={errors[name]} visible={touched[name]}/>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        // paddingHorizontal: 10,
        marginVertical: 10,
        borderBottomWidth: .5,
        borderBottomColor: '#c24bde',
        width: '95%'
    },
})