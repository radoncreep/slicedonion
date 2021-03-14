import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BrowseCards from '../../components/Cards/BrowseCards';
import { GenreNavigation } from '../Stack/GenreNavigation';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
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

export default TopTabNavigation;