import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

import { getAllPopularPage } from '../../api/getPopular';
import { SmallCardTray } from '../HorizontalTrays';

const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ fetching, setFetching ] = useState(false);

    const mapping = new Array(5).fill(0);

    const getPopularAnime = async () => {
        let mounted = true;

        try {
            if (mounted)
                setFetching(true);

            const { data, ok } = await getAllPopularPage(param);
            
            if (mounted && ok) {
                setFetching(false)
                setPopularShows(data.list);
            };
        } catch (error) {
            console.log(error);
        };

        return () => mounted = false;
    };

    useEffect(() => {
        getPopularAnime();
    }, []);

    function renderTraySkeleton() {
        // remove heading prop
        return (
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                    flexDirection:  'row',
                    marginTop: 10
                }}
            >
                {mapping.map((item, index) => (
                    <View
                        key={`MAPPING-${index}`}
                        style={{
                            marginLeft: index > 0 ? 10 : 0,
                        }}
                    >
                        <ContentLoader 
                            speed={2}
                            width={150}
                            height={300}
                            backgroundColor="#0f011f"
                            foregroundColor="#330a21"
                        >
                            <Rect x="0" y="0" rx="4" ry="4" width="150" height="270" />
                        </ContentLoader>
                    </View>
                ))}
            </ScrollView>
        )
    }

    function renderCardTray() {
        return (
            <SmallCardTray 
                data={popularShows} 
                navigation={navigation}
                towhere={towhere}
                heading="Popular Series"
                fetching={fetching}
                isFromHome={true}
            />
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={styles.heading}>Popular Series</Text>
                <MaterialIcons style={{ marginTop: 3 }} name="chevron-right" size={26} color="white" />
            </View>
           {fetching ? renderTraySkeleton() : renderCardTray()}
       </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 0,
        height: 330,
        paddingLeft: 5, 
    },
    heading: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
    },
    spinner: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        opacity: 0.4,
        margin: 10
    }
})

export default PopularAnimeComponent;