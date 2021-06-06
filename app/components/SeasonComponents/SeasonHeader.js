import React, { useEffect, useState } from 'react';
import { FlatList, Modal, StyleSheet, Text, TouchableHighlight, TouchableWithoutFeedback, View } from 'react-native';
import { EvilIcons, MaterialCommunityIcons } from '@expo/vector-icons';

import { getSeasonNamesApi } from '../../api/SeasonsApi';
// import { AppForm } from '../form/AppForm';


export const SeasonHeader = () => {
    const [ seasonValue, setSeasonValue ] = useState("Spring");
    const [ seasons, setSeasons ] = useState([seasonValue]);
    const [ modalVisible, setModalVisible ] = useState(false);

    useEffect(() => {
        let mounted = true;

        const getSeasons = async () => {
            const { data, ok } = await getSeasonNamesApi();

            if (mounted && ok) setSeasons(data);
        }
        getSeasons();

        return () => mounted = false;
    }, []);

    const renderNames = (name) => (
        <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff', marginVertical: 15 }}>
            {name}
        </Text>
    );

    const renderModal = () => {

        const getSeasonData = (seasonItem) => {
            setModalVisible(false);
            setSeasonValue(seasonItem.name);
        };

        return (
            <Modal visible={modalVisible}>
                <View style={styles.modalStyle}>
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <EvilIcons name="close" size={24} color="white" />
                    </TouchableWithoutFeedback>

                    <FlatList 
                        data={seasons}
                        keyExtractor={(item) => item.name}
                        renderItem={({ item }, index) => (
                                <TouchableHighlight key={index} onPress={() => getSeasonData(item)}>
                                    { renderNames(item.name) }
                                </TouchableHighlight>
                            )
                        }
                    />
                </View>
            </Modal>
        )
    };

    const renderSelectedSeason = () => {
        console.log("season Value ", seasonValue);
        return (
            <TouchableHighlight onPress={() => setModalVisible(true)}>
                <Text style={styles.headerText}>
                    {seasonValue}
                </Text>
            </TouchableHighlight>
        )
    }

    return (
        <View style={styles.container}>
            <MaterialCommunityIcons
                name="chevron-down"
                size={24}
                color="white"
            />
            <View >
                { modalVisible ? renderModal() : renderSelectedSeason()}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        backgroundColor: '#0f011f',
        width: '100%', 
        display: 'flex',
        flexDirection: 'row',
        paddingHorizontal: 10,
        alignItems: 'center'
        // backgroundColor: 'transparent'
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
    }
})