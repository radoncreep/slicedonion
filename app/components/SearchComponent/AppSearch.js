import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { AntDesign, EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';

import ActivityIndicator from '../ActivityIndicator';
import { addSearchToHistory, getSearchHistory } from '../../hooks/useSearchStore';
import { useSelector } from 'react-redux';



export const AppSearch = ({  customStyle }) => {
    const { email } = useSelector(state => state.register.user)
    const [ searchText, setSearchText ] = useState(null);
    const [ searchResult, setSearchResult ] = useState();
    const [ errorMessage, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false); 
    const [ previousSearch, setPreviousSearch ] = useState(null);

    const navigation = useNavigation();

    let resultHolder = [], mounted = true;
    const prefix = `@${email}search_history`;

    useEffect(() => {
        const source = axios.CancelToken.source();
        // setLoading(false);

        if (mounted) {
            if (searchText) {
                setLoading(true)
            }
            else {
                setLoading(false);
                setSearchResult();
            }

            ( async() => {
                if (!previousSearch) {
                    console.log('in here ', previousSearch)
                    let res = await getSearchHistory(prefix);
                    console.log(res)
                    if (res) {
                        setPreviousSearch([...res.allSearch]);
                    }
                }
                return;
            })();
        }
   
        (async () => { 
            try {
                if (searchText) {
                    
                    const response = await axios({
                        url: `/search-shows-data/${searchText}/${1}`,
                        baseURL: 'http://192.168.43.211:3300',
                        cancelToken: source.token
                    });

                    if (mounted) {
                        setLoading(false);
                        setSearchResult(response.data);
                        
                        resultHolder = data;
                        searchFilter(searchResult);
                    }
                }
                
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log(error);
                } 
            }
        })();

        return () => { 
            source.cancel();
            mounted = false;
        }
    }, [searchText]);

    const renderSearchText = (item) => {

        const handleSearchTextPress = () => {
            console.log('adding item ', prefix, item);
            addSearchToHistory(prefix, item);
            navigation.navigate('Details', item);
        };

        return (
            <Pressable 
                key={item.id} 
                style={{ display: 'flex', flexDirection: 'row', marginVertical: 10, width: '100%', alignItems: 'center' }}
                onPress={handleSearchTextPress}    
            >
                {previousSearch && !searchResult ? 
                    (<MaterialIcons style={{  paddingHorizontal: 5, marginRight: 22 }} name="history" size={24} color="grey" />) :

                    (<EvilIcons style={{  paddingHorizontal: 5, marginRight: 22 }} name="search" size={24} color="grey" />)
                }
                <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500', flex: 2, textDecorationLine: "none" }}>{item.title}</Text>
                <EvilIcons style={{ paddingHorizontal: 5 }} name="external-link" size={26} color="grey" />
            </Pressable>
        );
    }
    
    const searchFilter = (text) => {
        const newData = resultHolder.filter((item) => {
            const itemData = item.title.toLowerCase();
            const textData = text.toLowerCase();

            return itemData.indexOf(textData) > - 1;
        });

        if (mounted) setSearchResult(newData);
    } 

    const renderSearchBar = () => {
        return (
            <View style={{ marginLeft: 15, width: '80%', flexDirection: 'row', alignItems: 'center' }}>
                <TextInput 
                    autoCapitalize="none"
                    onChangeText={(text) => setSearchText(text)}
                    style={styles.textInputStyle}
                    value={searchText}
                    placeholder="Search anime"
                    placeholderTextColor="#fff"
                    autoFocus={true}
                />
                {searchText ? (
                    <Pressable 
                        onPress={() => { 
                            if (mounted) setSearchText(null);
                        }}>
                        <AntDesign name="delete" size={22} color="white" />
                    </Pressable>
                )  : null }
            </View>
        )
    };


    const renderFetchedData = () => {
        return (
            <>
                {  (searchResult && searchResult.length > 0) ?
                    ( <FlatList
                            contentContainerStyle={{ paddingBottom: 60 }}
                            data={searchResult}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }, index ) => (
                                renderSearchText(item)
                            )}
                        />
                    ) : (
                        <>
                            { !loading && 
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
                                            {console.log(searchText)}
                                            {
                                            searchText ? `could not find ${searchText}`:
                                                "search for anime shows"
                                            }
                                    </Text>
                                </View>
                            }
                        </>
                    )
                }
            </>
        )
    }

    const renderSearchView = () => {

        const handleCloseModal = () => navigation.goBack();

        return (
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
                    <ActivityIndicator visible={loading}/>

                    {  previousSearch && !searchResult ? (
                        <FlatList
                            contentContainerStyle={{ paddingBottom: 40 }}
                            data={previousSearch }
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }, index ) => (
                                renderSearchText(item)
                            )}
                        />
                    ) 
                    : renderFetchedData()
                    }
                </View>
            </View>
        )
    }

    return (
        <View style={[styles.container, { customStyle }]}>
            { renderSearchView () }
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    searchBarContainer: {
        width: '100%',
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
        fontWeight: 'bold',
        borderWidth: 0
    }
})