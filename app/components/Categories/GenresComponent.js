import React, { useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getGenres } from '../../api/getGenres';

import GenreCard from '../Cards/GenreCard';
import StatusBarComp from '../StatusBarComp';

const items = [
    { id: 1, genreName: 'new', genreUrl: 'stuff'},
    { id: 2, genreName: 'new', genreUrl: 'stuff'},
]

const GenresComponent = (props) => {
    const [ genres, setGenres ] = useState([]);

    const getGenresApi = async () => {
        const response = await getGenres();
        return setGenres(response.data.genre);
    }

    useEffect(() => {
        getGenresApi();
    }, []);

    return (
        <StatusBarComp>
            <View style={styles.genreScroll}>
                <FlatList 
                    columnWrapperStyle={styles.container}
                    numColumns={2}
                    // style={styles.container}
                    data={genres}
                    keyExtractor={(genre) => genre.id.toString()}
                    renderItem={( gen ) => {
                        return (
                            <GenreCard 
                                genreName={gen.item.genreName}
                                genreUrl={gen.item.genreUrl}
                            />   
                        )
                    }}
                />
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center'
        // flex: 1,
    },
    genreScroll: {
        flex: 1,
    }
})

export default GenresComponent;