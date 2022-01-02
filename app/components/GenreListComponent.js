import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { getGenreApi } from '../api/getGenre';
import ActivityIndicator from './ActivityIndicator';
import SmallCardTray from './HorizontalTrays/SmallCardTray';
import TraySkeleton from './TraySkeleton.js';

export const GenreListComponent = ({ genrename, navigation, param }) => {
    const [ currentGenres, setCurrentGenres ] = useState();
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        let mounted = true;
        
        const handleGenreApiCall = async (name, param) => {
            const { data, ok } = await getGenreApi(name, param);

            if (mounted && ok) {
                setVisible(false);
                setCurrentGenres(data);
            }
            return;
        };

        handleGenreApiCall(genrename, param);
        console.log('genre data ', currentGenres)

        return () => mounted = false;
    }, []);

    return (
        <View>
            {!currentGenres && (
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
            )}
            <SmallCardTray 
                data={currentGenres} 
                navigation={navigation}
                towhere="Details"
                heading={genrename}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
    },
    indicator: {
        // justifyContent: 'center',
    }
});