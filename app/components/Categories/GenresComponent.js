import { Animated } from 'expo';
import React, { useState, useEffect} from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { getGenres } from '../../api/getGenres';
import ActivityIndicator from '../ActivityIndicator';

import GenreCard from '../Cards/GenreCard';
import StatusBarComp from '../StatusBarComp';

const GenresComponent = ({ navigation }) => {
    const { current: { parentalControl } } = useSelector((state) => state.mediaControlsState);
    const [ genres, setGenres ] = useState([]);
    const [ visible, setVisible ] = useState(true);

    const getGenresApi = async () => {
        let arr = [];
        const { data } = await getGenres();

        for (let anime in data) {
            arr.push(data[anime])
        };

        if (parentalControl) {
            const filterAnime = arr.filter((anime) => {
                if (
                    anime.genreName !== "Hentai" && 
                    anime.genreName !== "Ecchi" && 
                    anime.genreName !== "Harem" &&
                    anime.genreName !== "Vampire" && 
                    anime.genreName !== "Demons" &&
                    anime.genreName !== "Crime" && 
                    anime.genreName !== "Romance" &&
                    anime.genreName !== "Horror" &&
                    anime.genreName !== "Josei" &&
                    anime.genreName !== "Dementia"
    
                ) {
                    return anime;
                }
            });
            setVisible(false);
            return setGenres([...filterAnime]);
        } else {
            setVisible(false);
            return setGenres([...arr]);
        }
     
    };

    const handleGenreNavigation = (item) => {
        navigation.navigate("Genre Screen", item);
        return;
    };

    useEffect(() => {
        let mounted = true;
        getGenresApi();
    }, []);

    const renderGenreContent = (item) => {
        if (parentalControl) {
            // if (item.genreName === "Ecchi") return;
            // if (item.genreName === "Hentai") return;
            // if (item.genreName ===)
            
            return (
                <GenreCard 
                    genreName={item.genreName}
                    genreUrl={item.genreUrl}
                    onPress={() => handleGenreNavigation(item)}
                />  
            )
        } else {
            return (
                <GenreCard 
                    genreName={item.genreName}
                    genreUrl={item.genreUrl}
                    onPress={() => handleGenreNavigation(item)}
                />  
            )
        }
        
    }

    return (
        <StatusBarComp>
            <ActivityIndicator visible={visible} style={{ justifyContent: 'center' }}/>
            <View style={styles.genreScroll}>
                <FlatList
                    onRefresh={getGenresApi}
                    refreshing={genres.length > 0 ? false : true}
                    columnWrapperStyle={styles.container}
                    numColumns={2}
                    data={genres}
                    keyExtractor={(genre) => genre.id.toString()}
                    renderItem={( { item } ) => {
                        return renderGenreContent(item)
                    }}
                />
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    genreScroll: {
        flex: 1,
    }
})

export default GenresComponent;