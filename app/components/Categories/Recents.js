import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { getRecents } from '../../api/getRecentRelease';
import { SmallCardTray } from '../HorizontalTrays';
import TraySkeleton from '../TraySkeleton.js';

const Recents = ({ navigation, towhere }) => {
    const [ recents, setRecents ] = useState([]);
    const [ fetching, setFetching ] = useState(false);

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

    function renderCardTray() {
        return (
            <SmallCardTray 
                data={recents} 
                towhere={towhere} 
                navigation={navigation}
                isFromHome={true}
            />
        )
    }

    return (
       <View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text 
                    style={{
                        color: '#fff',
                        fontWeight: 'bold',
                        fontSize: 18,
                    }}
                >
                    Recents
                </Text>
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
    ) 
};

export default Recents;