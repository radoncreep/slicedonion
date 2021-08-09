import React, { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { persistSettingsControls } from '../hooks/useSettings';
import { persistAppUpdateNotificaton, persistNewContentNotificaton, persistNewFeatureNotificaton } from '../store/actions';

import { colorPallete } from '../utils/colors';
import { ListItem } from './ListItem';
import ListItemSeparator from './ListItemSeparator';
import cache from '../utility/cache';

export const Notification = () => {
    const { 
        notificationsState: { notifications: notifsStateFromReducer}, 
        register: { user: { email } }
    } = useSelector((state) => state);
    const key = email + '-app-settings';

    const dispatch = useDispatch();

    const { persistAllNotifications } = persistSettingsControls();

    useEffect(() => {
        if (notifsStateFromReducer.appUpdates === null || 
            notifsStateFromReducer.newContent === null || 
            notifsStateFromReducer.newFeature === null ) 
        {
            const getNotificationStateFromCache = async (key) => {
                let { getFromCache } = cache;
                let { 
                    values: { 
                        appUpdates, 
                        newContent, 
                        newFeature 
                    }
                } = await getFromCache(key);
    
                dispatch(persistAppUpdateNotificaton(appUpdates));
                dispatch(persistNewContentNotificaton(newContent));
                dispatch(persistNewFeatureNotificaton(newFeature));
                return;
            }
    
            getNotificationStateFromCache(key);
        }
    }, []);

    
    const notifs = [
        {
            name: 'App Updates',
            icon: {
                name:  notifsStateFromReducer.appUpdates ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Content',
            icon: {
                name: notifsStateFromReducer.newContent ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        },
        {
            name: 'New Features',
            icon: {
                name: notifsStateFromReducer.newFeature ? 'toggle-on' : 'toggle-off',
                color: colorPallete.textPurple,
                size: 30,
            }
        }
    ];

    const handleNotifications = (notif) => {
        let label = key;

        if (notif.name === notifs[0].name) {
            let value = !notifsStateFromReducer.appUpdates;
            let notificationsObj = {
                ...notifsStateFromReducer,
                appUpdates: value
            }

            persistAllNotifications(label, notificationsObj)
            dispatch(persistAppUpdateNotificaton(value))
            return;
        }

        if (notif.name === notifs[1].name) {
            let value = !notifsStateFromReducer.newContent;
            let notificationsObj = {
                ...notifsStateFromReducer,
                newContent: value
            }

            persistAllNotifications(label, notificationsObj);
            dispatch(
                persistNewContentNotificaton(value)
            );
            return;
        }

        if (notif.name === notifs[2].name) {
            let value = !notifsStateFromReducer.newFeature;
            let notificationsObj = {
                ...notifsStateFromReducer,
                newFeature: value
            }
            persistAllNotifications(label, notificationsObj)
            dispatch(
                persistNewFeatureNotificaton(value)
            )
            return;
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