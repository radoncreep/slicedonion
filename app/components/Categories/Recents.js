import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text } from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';
import { MaterialIcons } from '@expo/vector-icons';

import { getRecents } from '../../api/getRecentRelease';
import { SmallCardTray } from '../HorizontalTrays';

const Recents = ({ navigation, towhere }) => {
    const [ recents, setRecents ] = useState([]);
    const [ fetching, setFetching ] = useState(false);
    
    const mapping = new Array(5).fill(0);

    const getRecentAnimeShows = async () => {
        try {
            setFetching(true);
           
            const response = await getRecents();

            if (response.data && response.ok) {
                setFetching(false);
                setRecents(response.data.list);
            } else {
                setFetching(true)
            }

        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        let mounted = true;

        if (mounted) {
            getRecentAnimeShows();
        }

        return () =>  mounted = false;
    }, [])

    function renderTraySkeleton() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={styles.heading}>Recent</Text>
                    <MaterialIcons style={{ marginTop: 3 }} name="chevron-right" size={26} color="white" />
                </View>
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
            </View>
        )
    }

    function renderCardTray() {
        return (
            <SmallCardTray 
                data={recents} 
                heading="Recents" 
                towhere={towhere} 
                navigation={navigation}
                isFromHome={true}
            />
        )
    }

    return (
       <View>
           {fetching ? renderTraySkeleton() : renderCardTray()}
       </View>
    ) 
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
    }
})

export default Recents;