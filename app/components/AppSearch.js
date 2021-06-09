import React, { useEffect, useRef, useState } from 'react';
import { FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';

import { getSearch } from '../api/getSearch';

const dummyData = [
    { id: 1, text: 'attack on titan'},
    { id: 2, text: 'jujutsu kaisen'},
    { id: 3, text: 'robinhood'},
    { id: 4, text: 'bungo stray dogs'},
    { id: 5, text: 'kimetsu no yaiba'},
    { id: 6, text: 'vinland saga'},
    { id: 7, text: 'attack on titan'},
    { id: 8, text: 'jujutsu kaisen'},
    { id: 9, text: 'robinhood'},
    { id: 10, text: 'bungo stray dogs'},
    { id: 11, text: 'kimetsu no yaiba'},
    { id: 12, text: 'vinland saga'},
    { id: 21, text: 'attack on titan'},
    { id: 23, text: 'jujutsu kaisen'},
    { id: 33, text: 'robinhood'},
    { id: 421, text: 'bungo stray dogs'},
    { id: 53, text: 'kimetsu no yaiba'},
    { id: 326, text: 'vinland saga'},
    { id: 73, text: 'attack on titan'},
    { id: 832, text: 'jujutsu kaisen'},
    { id: 921, text: 'robinhood'},
    { id: 1032, text: 'bungo stray dogs'},
    { id: 1123, text: 'kimetsu no yaiba'},
    { id: 1221, text: 'vinland saga'},
];

export const AppSearch = ({ searchModal, setSearchModal, customStyle }) => {
    const [ search, setSearch ] = useState('');
    const [ searchHistory, setSearchHistory ] = useState([]);

    useEffect(() => {
        let mounted = true;

        console.log('yo');
        setSearchHistory(dummyData);

        return () => mounted = false;
    }, []);

    const renderSearchText = ({ id, text }) => (
        <Pressable 
            key={id} 
            style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, width: '100%', alignItems: 'center' }}
            onPress={() => setSearchModal(false)}    
        >
            <EvilIcons style={{  paddingHorizontal: 5, marginRight: 8 }} name="search" size={24} color="grey" />
            <Text style={{ color: 'grey', fontSize: 16, fontWeight: 'bold', letterSpacing: 1, flex: 2 }}>{text}</Text>
            <EvilIcons style={{ paddingHorizontal: 5 }} name="external-link" size={28} color="white" />
        </Pressable>
    );

    const renderSearchBar = () => {
        const handleSearchTextChange = async (text) => {
            setSearch(text);

            const response = await getSearch(text);
            console.log(response.data)

        };

        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <TextInput 
                    autoCapitalize="none"
                    onChangeText={(text) => handleSearchTextChange(text)}
                    style={styles.textInputStyle}
                    value={search}
                    placeholder="Searh anime..."
                    placeholderTextColor="#fff"
                    autoFocus={true}
                />
            </View>
        )
    };

    const renderSearchModal = () => {
        const handleCloseModal = () => {
            setSearch('');
            setSearchModal(false)
        };

        return (
            <Modal 
                animationType="fade"
                onRequestClose={() => handleCloseModal()}
                visible={searchModal}
            >
                <View style={styles.searchModal}>
                    <View
                        style={{ paddingHorizontal: 7, flexDirection: 'row', height: 45, backgroundColor: '#414345' }}
                    >
                        <Pressable 
                            onPress={() => handleCloseModal()}
                            style={{ width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}
                            >
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </Pressable>
                        <View>
                            { renderSearchBar() }
                        </View>
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 40 }}
                            data={searchHistory}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }, index ) => (
                               renderSearchText(item)
                            )}
                        />
                    </View>
                </View>
            </Modal>    
        )
    }

    return (
        <View style={[styles.container, { customStyle }]}>
            { renderSearchModal () }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'orange',
        height: '100%',
        justifyContent: 'center',
    },
    searchBarContainer: {
        width: '100%',
        // backgroundColor: 'orange',
        height: 40,
        padding: 0,
        margin: 0
    },
    searchBarInput: {
        backgroundColor: 'transparent',
        width: '100%',
        flex: 1,
        borderRadius: 30,
    },
    searchModal: {
        flex: 1,
        backgroundColor: '#0f010f',
    },
    textInputStyle: {
        flex: 2,
        color: '#fff',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        fontSize: 16,
        fontWeight: 'bold'
    }
})