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

    const { episodes: { data } } = playlist;

    const dispatch = useDispatch();

    const navigation = useNavigation();

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