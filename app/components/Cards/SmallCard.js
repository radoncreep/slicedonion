import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, Image, TouchableHighlight, FlatList, TouchableWithoutFeedback } from 'react-native';
import { SimpleLineIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';

import ListItemSeparator from '../ListItemSeparator';
import { ListItem } from '../ListItem';
import { addToWatchLater, removeFromWatchLater } from '../../store/actions';


const SmallCard = ({ currentanime, episodeNumber, navigation, style, title, released, imageUrl, onPress }) => {
    const { watchLater, register } = useSelector(state => state);

    const dispatch = useDispatch();

    const [ showPopover, setShowPopover ] = useState(false);

    const checkValue = () => {
        return watchLater.list.includes(currentanime);
    }
    
    let popoverMenu = [
        { name: checkValue() ? 'Remove From WatchLater' : 'Add To WatchLater'},
        { name: 'Share'},
        { name: 'Play Now'},
    ];

    const handlePopover = () => {
        setShowPopover(() => !showPopover);
    };

    const handleMenu = (item) => {
        setShowPopover(() => !showPopover)
        if (item.name === 'Remove From WatchLater') return removeAnimeCardFromWatchLater();
        if (item.name === 'Add To WatchLater') {
            if (!register.user.isAuth) {
                navigation.navigate("Library");
                return;
            }
            return addAnimeCardToWatchLater();
        } 
        if (item.name === 'Play Now') return onPress();
    };

    const addAnimeCardToWatchLater = () => dispatch(addToWatchLater(currentanime));

    const removeAnimeCardFromWatchLater = () => dispatch(removeFromWatchLater(currentanime));


    return (
        <View style={[styles.container, style]} >
            <TouchableHighlight onPress={onPress} underlayColor="#000" activeOpacity={0.95}>
                <Image style={styles.image} source={{ uri: imageUrl }}/>    
            </TouchableHighlight>

            <Text numberOfLines={1} style={styles.text}>{title}</Text>

            <Text style={styles.text}>{episodeNumber || released}</Text> 

            <View style={styles.subContent}>
                <Text style={{ color: '#fff', fontWeight: '500' }}>SUB</Text>
                <TouchableHighlight 
                    style={styles.options} 
                    onPress={() => handlePopover()}
                >
                    <SimpleLineIcons name="options-vertical" size={20} color="white" />
                </TouchableHighlight>
            </View>

            { showPopover && (
                <View style={styles.popover}>
                    <FlatList 
                        data={popoverMenu}
                        keyExtractor={(popoverMenu) => popoverMenu.name}
                        ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
                        renderItem={({ item, index }) => (
                            <ListItem 
                                style={{ fontSize: 14 }} 
                                title={item.name}
                                onPress={() => handleMenu(item)}
                             />
                        )}
                    />
                    <TouchableWithoutFeedback onPress={() => setShowPopover(false)}>
                        <Text style={{ position: 'absolute', bottom: 20, right: 20, color: '#fff', fontSize: 13 }}>Hide</Text>
                    </TouchableWithoutFeedback>
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0f011f',
        width: 150,
        alignSelf: 'center',
        marginRight: 8 
    },
    image: {
        width: '100%',
        height: 190,
    },
    options: {
        width: 30
    },
    popover: {
        height: 290,
        width: 150,
        backgroundColor: '#0f010f',
        position: 'absolute',
        alignItems: 'center',
    },
    separator: {
        backgroundColor: 'silver',
        height: .5,
        opacity: .5,
    },
    subContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 5,
        paddingLeft: 10
    },
    text: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '500',
        marginVertical: 5,
        marginHorizontal: 10
    }
});

export default SmallCard;