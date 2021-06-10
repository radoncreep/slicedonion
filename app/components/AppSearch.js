import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, EvilIcons, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


import { getSearch } from '../api/getSearch';
import ActivityIndicator from './ActivityIndicator';

const dummyData = [
    { id: 1, title: 'attack on titan'},
    { id: 2, title: 'jujutsu kaisen'},
    { id: 3, title: 'robinhood'},
    { id: 4, title: 'bungo stray dogs'},
    { id: 5, title: 'kimetsu no yaiba'},
    { id: 6, title: 'vinland saga'},
    { id: 7, title: 'attack on titan'},
    { id: 8, title: 'jujutsu kaisen'},
    { id: 9, title: 'robinhood'},
    { id: 10, title: 'bungo stray dogs'},
    { id: 11, title: 'kimetsu no yaiba'},
    { id: 12, title: 'vinland saga'},
    { id: 21, title: 'attack on titan'},
    { id: 23, title: 'jujutsu kaisen'},
    { id: 33, title: 'robinhood'},
    { id: 421, title: 'bungo stray dogs'},
    { id: 53, title: 'kimetsu no yaiba'},
    { id: 326, title: 'vinland saga'},
    { id: 73, title: 'attack on titan'},
    { id: 832, title: 'jujutsu kaisen'},
    { id: 921, title: 'robinhood'},
    { id: 1032, title: 'bungo stray dogs'},
    { id: 1123, title: 'kimetsu no yaiba'},
    { id: 1221, title: 'vinland saga'},
];

export const AppSearch = ({ searchModal, setSearchModal, customStyle }) => {
    const [ search, setSearch ] = useState(null);
    const [ searchHistory, setSearchHistory ] = useState([]);
    const [ searchResult, setSearchResult ] = useState();
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false); 
    let [ mounted, setMounted ] = useState(false);

    const navigation = useNavigation()

    let resultHolder = [];

    useEffect(() => {
        let mounted = true;

        if (mounted) setSearchHistory(dummyData);

        return () => mounted = false;
    }, []);

    const renderSearchText = (item) => {
        const handleSearchTextPress = () => {
            setSearchModal(false);
            navigation.navigate('Details', item);
        };

        return (
            <Pressable 
                key={item.id} 
                style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, width: '100%', alignItems: 'center' }}
                onPress={() => handleSearchTextPress()}    
            >
                <EvilIcons style={{  paddingHorizontal: 5, marginRight: 8 }} name="search" size={24} color="grey" />
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', flex: 2, textDecorationLine: "none" }}>{item.title}</Text>
                <EvilIcons style={{ paddingHorizontal: 5 }} name="external-link" size={26} color="grey" />
            </Pressable>
        );
    }
    

    const renderSearchBar = () => {

        const handleSearchTextChange = async (text) => {
            setSearch(text);
            setLoading(true);

            try {
                    const { data, ok } = await getSearch(text);
    
                    if (ok) {
                        setSearchResult(data);
                        
                        resultHolder = data;
                        searchFilter(searchResult);
                        setTimeout(() => {
                            setLoading(false);
                        }, 2000);
                    } 
                
            } catch (error) {
                setError(error);
            };
        };

        const searchFilter = (text) => {
            const newData = resultHolder.filter((item) => {
                const itemData = item.title.toLowerCase();
                const textData = text.toLowerCase();

                return itemData.indexOf(textData) > - 1;
            });


            setSearchResult(newData);
        } 

        return (
            <View style={{ width: '80%' }}>
                <TextInput 
                    autoCapitalize="none"
                    onChangeText={(text) => handleSearchTextChange(text)}
                    style={styles.textInputStyle}
                    value={search}
                    placeholder="Search anime"
                    placeholderTextColor="#fff"
                    autoFocus={true}
                />
            </View>
        )
    };

    const renderFetchedData = () => {
        return (
            <>
                { searchResult.length > 0 ?
                    ( <FlatList
                            contentContainerStyle={{ paddingBottom: 60 }}
                            data={searchResult}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }, index ) => (
                                renderSearchText(item)
                            )}
                        />
                    ) : (
                        <View style={{ backgroundColor: 'red' }}>
                            <Text style={{ 
                                position: 'absolute', 
                                top: Dimensions.get("screen").height / 3, 
                                textAlign: 'center',
                                alignSelf: 'center',
                                color: '#fff', 
                                fontWeight: '500', 
                                fontSize: 18 }}
                                >
                                    {`could not find "${search}"`}
                            </Text>
                        </View>
                    )
                }
            </>
        )
    }

    const renderSearchModal = () => {
        const handleCloseModal = () => {
            setSearch(null);
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
                        style={{ paddingHorizontal: 7, flexDirection: 'row', height: 55, backgroundColor: '#414345', width: '100%' }}
                    >
                        <Pressable 
                            onPress={() => handleCloseModal()}
                            style={{ width: 30, alignItems: 'center', justifyContent: 'center', marginLeft: 5 }}
                            >
                            <Ionicons name="arrow-back" size={24} color="white" />
                        </Pressable>
                        { renderSearchBar() }
                    </View>
                    <View style={{ paddingHorizontal: 10 }}>
                        <ActivityIndicator visible={loading }/>
                        { !searchResult ? (
                            <FlatList
                                contentContainerStyle={{ paddingBottom: 40 }}
                                data={searchHistory}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item }, index ) => (
                                   renderSearchText(item)
                                )}
                            />
                        ) : renderFetchedData()
                        }
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