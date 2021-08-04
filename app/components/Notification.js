import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { persistAppUpdateNotificaton, persistNewContentNotificaton, persistNewFeatureNotificaton } from '../store/actions';

import { colorPallete } from '../utils/colors';
import { ListItem } from './ListItem';
import ListItemSeparator from './ListItemSeparator';

export const Notification = () => {
    const { notifications: notifStates  } = useSelector((state) =>  state.notifs);
    const dispatch = useDispatch();

    const notifs = [
        {
            name: 'App Updates',
            icon: {
                name: notifStates.appUpdates ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Content',
            icon: {
                name: notifStates.newContent ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Features',
            icon: {
                name: notifStates.newFeature ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        }
    ];

    const handleNotifications = (notif) => {
        if (notif.name === notifs[0].name) {
            return dispatch(persistAppUpdateNotificaton(!notifStates.appUpdates))
        }

        if (notif.name === notifs[1].name) {
            return dispatch(
                persistNewContentNotificaton(!notifStates.newContent)
            )
        }

        if (notif.name === notifs[2].name) {
            return dispatch(
                persistNewFeatureNotificaton(!notifStates.newFeature)
            )
        }
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