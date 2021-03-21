import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { addToHistory } from '../../store/historyActions';

import { useVideoContext } from '../../hooks/useVideoContext';

import EpisodeCardHorizontal from '../Cards/EpisodeCardHorizontal';

const EpisodesTrayVertical = ({ episodes, navigation, subimage, title, towhere }) => {
    const dispatch = useDispatch();

    // let videoObj = { subimage, title };
    // let { updateNextVideo } = useVideoContext(episodes);

    const handleEpisodeFunctionality = (elems, index) => {
        handleEpisodeAddHistory(elems, index);

        // this goes to video player
        if (towhere === 'Details') {
            navigation.navigate(towhere, elems);
        };
        return;
    };
    
    const handleEpisodeAddHistory = (elems, index) => {
        // add to history context array
        let newInsertion = elems[index];
        newInsertion['title'] = title;
        newInsertion['imageurl'] = subimage;

        dispatch(addToHistory(newInsertion));
    };   

    return (
        <View>
            {episodes.map((anime, index, elems) => (
                <EpisodeCardHorizontal 
                    key={anime.id + '' + index}
                    episodeNumber={anime.episodeNumber}
                    episodeTitle={title}
                    imageurl={subimage}
                    onPress={() => handleEpisodeFunctionality(elems, index)}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    bg: {
        width: '100%',
        flex: 1,
        resizeMode: 'center',
        justifyContent: 'flex-end',
    },
    bgContent: {
        width: '100%',
        paddingHorizontal: 20,
        marginBottom: 40,
    }, 
    bgDesc: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '400'
    },
    bgTitle: {
        color: '#fff',
        fontSize: 26,
        fontWeight: 'bold'
    },
    btnLink: { 
        fontSize: 24,
        fontWeight: 'bold',
        color: 'orange',
        backgroundColor: 'transparent'
    },
    container: {
        // flex: 1
        zIndex: 1
    },
    genre: {
        marginVertical: 20,
        textAlign:'center',
        fontSize: 14, 
        fontWeight: '500', 
        color: '#fff',
        paddingHorizontal: 30
    },
    listContainer: {
        zIndex: 1,
        shadowOpacity: 0.5
       
    },
    modal: { 
        justifyContent: 'center', 
        alignItems: 'center',
        paddingHorizontal: 20
    },
    modalBtn: { 
        position: 'absolute', 
        top: 10,
    },
    modalText: { 
        fontSize: 16, 
        fontWeight: 'bold', 
        color: '#fff'
    },
    modalTextContainer: {
        width: '100%',
        padding: 20,
    }
});

export default EpisodesTrayVertical;