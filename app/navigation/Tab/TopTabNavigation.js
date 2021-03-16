import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BrowseCards from '../../components/Cards/BrowseCards';
import { GenreNavigation } from '../Stack/GenreNavigation';
import { DownloadsScreen, HistoryScreen, WatchLaterScreen } from '../../screens';
import { StyleSheet } from 'react-native';
import StatusBarComp from '../../components/StatusBarComp';

const Tab = createMaterialTopTabNavigator();

export const BrowseTabNavigator = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor: '#bd44c9',
                inactiveTintColor: 'gray',
                tabStyle: {
                    backgroundColor: '#000',
                    borderColor: '#bd44c9'
                }
            }}
        >
            <Tab.Screen name="Genre" component={GenreNavigation}/>
            <Tab.Screen name="Movies" component={BrowseCards}/>
        </Tab.Navigator>
    );
};

export const LibraryTabNavigator = () => {
    return (
        <StatusBarComp>
            <Tab.Navigator 
                initialRouteName="History"
                tabBarOptions={{
                    activeTintColor: '#bd44c9',
                    inactiveTintColor: 'gray',
                    tabStyle: {
                        backgroundColor: '#000',
                        marginBottom: 1
                    },
                    indicatorStyle: {
                        backgroundColor: '#bd44c9',
                    }
                }}
                style={styles.container}
            >
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="WatchList" component={WatchLaterScreen}  />
                <Tab.Screen name="Downloads" component={DownloadsScreen} />
            </Tab.Navigator>
        </StatusBarComp>
    )
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#000'
    }
})

