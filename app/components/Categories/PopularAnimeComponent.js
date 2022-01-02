import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { getAllPopularPage } from '../../api/getPopular';
import { SmallCardTray } from '../HorizontalTrays';
import TraySkeleton from '../TraySkeleton.js';

const PopularAnimeComponent = ({ navigation, param, towhere }) => {
    const [ popularShows, setPopularShows ] = useState([]);
    const [ fetching, setFetching ] = useState(false);

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

    function renderCardTray() {
        return (
            <SmallCardTray 
                data={popularShows} 
                navigation={navigation}
                towhere={towhere}
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
           {fetching ? (
            <TraySkeleton 
                containerStyle={{
                    marginHorizontal: 0,
                    height: 330,
                    paddingLeft: 5
                }}
                scrollViewStyle={{
                    paddingHorizontal: 0,
                    flexDirection: 'row',
                    marginTop: 10
                }}
                contentWidth={150}
                contentHeight={300}
                isHorizontal={true}
                rectWidth={150}
                rectHeight={270}
                leftMargin={true}
                topMargin={false}
            />
            ) : renderCardTray()
            }
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