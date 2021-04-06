import React from 'react';
import { useFormikContext } from 'formik';
import { StyleSheet, TextInput, View } from 'react-native';
import { CustomTextInput } from './CustomTextInput';

export const CustomFormField = ({ placeholder, name, style }) => {
    const { setFieldTouched, setFieldValue, errors, touched, values} =  useFormikContext();

    return (
        <View style={[styles.container, style ]}>
            <CustomTextInput 
                onBlur={() => setFieldTouched(name)}
                onChangeText={(text) => setFieldValue(name, text)}
                value ={values[name]}
                placeholder={placeholder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 5,
        marginVertical: 10,
        borderBottomWidth: .5,
        borderBottomColor: '#c24bde',
        // backgroundColor: '#8f8391'
    },
})