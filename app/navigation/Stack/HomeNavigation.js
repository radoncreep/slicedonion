import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AnimeDetails, PlayerScreen } from '../../screens';
import AppNavigator from '../Tab/AppNavigator';
import { AppSearchIcon } from '../../components/AppSearchIcon';
import { SearchScreen } from '../../screens/SearchScreen';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="slicedonion" 
                component={AppNavigator}
                options={{ 
                    headerShown: true,
                    headerStyle: { backgroundColor: '#0f011f'}, 
                    headerTitleStyle: { color: '#fff' },
                    headerRight: () => (
                        <AppSearchIcon />
                    )
                }} 
            />
            <Stack.Screen 
                name="Player"
                component={PlayerScreen}
                options={{
                    headerShown: false,
                    headerTitle: true,
                    headerShown: false
                }}
            />
            <Stack.Screen 
                name="Details" 
                component={AnimeDetails} 
                options={{ 
                    headerTitle: false,
                    headerTransparent: true,
                }}
            />
            <Stack.Screen 
                name="SearchScreen"
                component={SearchScreen}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
};