import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export const OptionPicker = () => {
    console.log('hey')
    const [ option, setOption ] = useState();
    let currentOption = useRef();

    return (
        <View style={styles.container}>
            <Picker
                selectedValue={option}
                onValueChange={(ItemValue, itemIndex) => {
                    setOption(ItemValue)
                    // dispatch function should be here
                    // share function 
                    // Plau function --> navigates to anime details
                }
            }
            
            >
                <Picker.Item label="Add to WatchLater" value="WatchLater" />
                <Picker.Item label="Share" value="Share" />
                <Picker.Item label="Play Now" value="Play" />
            </Picker>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 70
    },
});