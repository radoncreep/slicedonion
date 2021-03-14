import React, { useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { getGenres } from '../../api/getGenres';
import ActivityIndicator from '../ActivityIndicator';

import GenreCard from '../Cards/GenreCard';
import StatusBarComp from '../StatusBarComp';

const items = [
    { id: 1, genreName: 'new', genreUrl: 'stuff'},
    { id: 2, genreName: 'new', genreUrl: 'stuff'},
]

const GenresComponent = (props) => {
    const [ genres, setGenres ] = useState([]);
    const [ visible, setVisible ] = useState(true);

    const getGenresApi = async () => {
        let arr = [];
        const { data } = await getGenres();
        for (let i in data) {
            arr.push(data[i])
        };
        setVisible(false);
        return setGenres([...arr]);
    };

    useEffect(() => {
        let mounted = true;
        getGenresApi();
    }, []);

    return (
        <StatusBarComp>
            <ActivityIndicator visible={visible} style={{ justifyContent: 'center' }}/>
            <View style={styles.genreScroll}>
                <FlatList 
                    columnWrapperStyle={styles.container}
                    numColumns={2}
                    // style={styles.container}
                    data={genres}
                    keyExtractor={(genre) => genre.id.toString()}
                    renderItem={( { item } ) => {
                        return (
                            <GenreCard 
                                genreName={item.genreName}
                                genreUrl={item.genreUrl}
                                onPress={() => console.log(item.genreName)}
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