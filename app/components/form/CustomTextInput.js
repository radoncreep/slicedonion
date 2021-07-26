import React,{ useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { AntDesign, FontAwesome5 } from '@expo/vector-icons';
import { Pressable } from 'react-native';


export const CustomTextInput = ({ icon, secureTextEntry, textContentType,...otherProps }) => {
    const [ passwordVisible, setPaswordVisible ] = useState(false);

    const handleVisibility = () => setPaswordVisible((prevState) => !prevState);

    const renderVisibiltyIcon = () => {
        if ((textContentType === 'password' && !passwordVisible)) {
            return (
                <FontAwesome5 name="eye-slash" size={18} color="white" />
            )
        };

        if ((textContentType === 'password' && passwordVisible)) {
            return (
                <FontAwesome5 name="eye" size={18} color="white" />
            )
        }
    }

    return (
        <View  style={styles.container}>
            <AntDesign 
                name={icon}
                size={22}
                color="white"
                style={styles.icon}
            />
            <TextInput 
                placeholderTextColor="#523d57"
                style={{ 
                    color: 'white', 
                    fontWeight: '500', 
                    fontSize: 16, 
                    textDecorationLine: "none", 
                    width: '90%',
                }}
                secureTextEntry={!passwordVisible}
                {...otherProps}
            />
            <Pressable 
                onPress={handleVisibility}
                style={{ flexGrow: 1, paddingVertical: 2 }}
            >
               {renderVisibiltyIcon}
            </Pressable>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 30,
        width: '95%',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    }
})