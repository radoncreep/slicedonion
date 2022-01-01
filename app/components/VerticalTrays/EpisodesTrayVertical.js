import React from 'react';
import { 
    FlatList,
    StyleSheet, 
    View, 
    Text, 
    ScrollView, 
    Touchable, 
    TouchableHighlight 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';


import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';
import { usePlaylist } from '../../hooks/usePlaylist';
import { addToHistory } from '../../store/actions';
import { useHistoryCache } from '../../hooks/useHistoryCache';
import ListItemSeparator from '../ListItemSeparator';

const EpisodesTrayVertical = ({ towhere }) => {
    const { handleEpisodeFunctionality } = usePlaylist();

    const { 
        playlist, 
        register: { user: { email }} 
    } = useSelector(state => state);

    const dispatch = useDispatch();

    const navigation = useNavigation();

    const { episodes: { data } } = playlist;

    const mapping = new Array(3).fill(0);

    const handleEpisodeAddHistory = (anime) =>  { 
        const { addShowToCache } = useHistoryCache(email);
        addShowToCache(anime);
        dispatch(addToHistory(anime));   
    }

    const handleEpisodePress = (anime) => {
        handleEpisodeFunctionality(anime);
        handleEpisodeAddHistory(anime);
        navigation.navigate(towhere);
    };

    function renderListSkeleton() {
        return (
            <View>
                {mapping.map((item, index) => (
                    <View
                        key={`MAPPING-${index}`}
                        style={{
                            marginTop: index > 0 ? 10 : 0,
                            marginBottom: index === mapping.length - 1 ? 20 : 0
                        }}
                    >
                        <ContentLoader 
                            speed={1}
                            width="100%"
                            height={70}
                            backgroundColor="#0f011f"
                            foregroundColor="#330a21"
                        >
                            <Rect x="0" y="0" rx="4" ry="4" width="98%" height="70" />
                        </ContentLoader>
                    </View>
                ))}
            </View>
        )
    }

    const renderEpisode = () => {
        return (
            <>
                { data && data.map((anime, index) => {
                    return (
                        <TouchableHighlight
                            onPress={() => handleEpisodePress(anime)}
                            key={index}
                        >
                            <View 
                                style={{ width: '100%', paddingVertical: 5 }}
                            >
                                <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'white'}}>Episode {anime.episodeNumber}</Text>
                                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red'}}>{anime.version}</Text>
                                <ListItemSeparator style={{ height: 0.5, backgroundColor: 'grey', marginTop: 5 }} />
                            </View>
                        </TouchableHighlight>
                )})}
            </>
        )
    }

    const renderEpisodeList = () => {
        return (
            <View  style={styles.container}>
                <View style={{ marginBottom: 20 }}>
                    <Text 
                        style={{
                            fontWeight: 'bold',
                            fontSize: 20,
                            color: 'white'
                        }}
                    >
                        Episodes
                    </Text>
                </View>
                <View>
                    {data.length === 0 && renderListSkeleton()}
                    {renderEpisode()}
                </View>
            </View>
        )
    }
    
    return (
        <View style={styles.container}>
            {renderEpisodeList()}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
       paddingHorizontal: 10
    }
});

export default EpisodesTrayVertical;

// {data && data.map((anime, index, elems) => (
//     <EpisodeCardHorizontal 
//         key={anime.id + '' + index}
//         episodeNumber={anime.episodeNumber}
//         episodeTitle={anime.title}
//         othername={anime.othername}
//         releaseed={anime.releaseed}
//         status={anime.status}
//         streamUrl={anime.epiosdeUrl}
//         thumbnail={anime.thumbnail}
//         version={anime.version}
//         onPress={() => handleEpisodePress(anime)}
//     />
// ))}