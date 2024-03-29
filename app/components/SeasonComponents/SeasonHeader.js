import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, Modal, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { getSeasonAnimeShows, getSeasonNamesApi } from '../../api/SeasonsApi';

export const SeasonHeader = ({ setShows }) => {
    const [ seasonValue, setSeasonValue ] = useState("Winter 2021");
    const [ seasons, setSeasons ] = useState([seasonValue]);
    const [ modalVisible, setModalVisible ] = useState(false);

    useEffect(() => {
        let mounted = true;

        const getSeasons = async () => {
            const { data, ok } = await getSeasonNamesApi();

            if (mounted && ok) setSeasons(data);
        }

        const getInitialSeasonShows = async() => {
            const { data, ok } = await getSeasonAnimeShows("winter-2021-anime");
        
            if (mounted && ok) setShows(data);
        }
        getSeasons();
        getInitialSeasonShows();

        return () => mounted = false;
    }, []);

    const renderNames = (name) => (
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', marginVertical: 15 }}>
            {name}
        </Text>
    );

    const renderModal = () => {

        const getSeasonShows = async (seasonItem) => {
            setModalVisible(false);
            setSeasonValue(seasonItem.name);

            const { data, ok } = await getSeasonAnimeShows(seasonItem.seasonUrl);
            
            if (ok) {
                setShows(data);
            }
        };

        return (
            <Modal visible={modalVisible}>
                <View style={styles.modalStyle}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <EvilIcons name="close" size={24} color="white" />
                    </TouchableWithoutFeedback>

                    {seasons.length > 1 && <FlatList 
                        data={seasons}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }, index) => (
                                <TouchableHighlight key={index} onPress={() => getSeasonShows(item)}>
                                    { renderNames(item.name) }
                                </TouchableHighlight>
                            )
                        }
                    /> }
                </View>
            </Modal>
        )
    };

    const renderSelectedSeasonTab = () => {
        return (
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <View style={styles.seasonTab}>
                    <MaterialCommunityIcons
                        name="chevron-down"
                        size={24}
                        color="white"
                    />
                    <Text style={styles.headerText}>
                        {seasonValue}
                    </Text>
                </View>
            </TouchableHighlight>
        )
    }

    return (
        <View style={styles.container}>
            <View >
                { modalVisible ? renderModal() : renderSelectedSeasonTab()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: 50,
        backgroundColor: '#0f010f',
    },
    headerText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    modalStyle: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    seasonTab: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100%',
        width: '100%',
        paddingLeft: 10
    }
})