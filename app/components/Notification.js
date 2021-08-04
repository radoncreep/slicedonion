import React, { useState } from 'react';
import { FlatList, Pressable, StyleSheet, View } from 'react-native';
import { colorPallete } from '../utils/colors';
import { ListItem } from './ListItem';
import ListItemSeparator from './ListItemSeparator';

export const Notification = () => {
    const [ appUpdates, setAppUpdates ] = useState(false);
    const [ newContent, setNewContent ] = useState(false);
    const [ newFeatures, setNewFeatures ] = useState(false);

    const notifs = [
        {
            name: 'App Updates',
            icon: {
                name: appUpdates ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Content',
            icon: {
                name: newContent ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Features',
            icon: {
                name: newFeatures ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        }
    ];

    const handleNotifications = (notif) => {
        if (notif.name === notifs[0].name) return setAppUpdates((prevState) => !prevState);
        if (notif.name === notifs[1].name) return setNewContent((prevState) => !prevState);
        if (notif.name === notifs[2].name) return setNewFeatures((prevState) => !prevState);
    }

    return (
        <View>
            <FlatList 
             data={notifs}
             keyExtractor={(notif, index) => notif.name}
             ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
             renderItem={({ item }, index) => (
                 <ListItem 
                     icon={item.icon}
                     title={item.name}
                     onPress={() => handleNotifications(item)}
                 />
             )}
             contentContainerStyle={{ paddingVertical: 10, paddingHorizontal: 10 }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {},
    separator: {
        backgroundColor: 'silver',
        height: .5,
        opacity: .5,
        padding: 0
    }
})