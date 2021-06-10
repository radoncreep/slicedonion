import React, { useState} from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { EvilIcons } from '@expo/vector-icons';

import { AppSearch } from './AppSearch';

export const AppSearchIcon = () => {
    const [ searchModal, setSearchModal ] = useState(false);

    return (
        <>
            { !searchModal ?  ( <Pressable 
                    onPress={() => setSearchModal(true)}
                    style={{ marginRight: 20 }}
                >
                    <EvilIcons name="search" size={30} color="white" />
                </Pressable> 
            ) 
            : 
                ( <AppSearch searchModal={searchModal} setSearchModal={setSearchModal} /> ) 
            }
        </>
    )
};

const styles = StyleSheet.create({
    container: {

    }
})