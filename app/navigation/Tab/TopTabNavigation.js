import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import BrowseCards from '../../components/Cards/BrowseCards';
import GenresComponent from '../../components/Categories/GenresComponent'

const Tab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Genre" component={GenresComponent}/>
            <Tab.Screen name="Movies" component={BrowseCards}/>
        </Tab.Navigator>
    );
};

export default TopTabNavigation;