import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { AnimeDetails, PlayerScreen } from '../../screens';
import AppNavigator from '../Tab/AppNavigator';
import { AppSearchIcon } from '../../components/SearchComponent/AppSearchIcon';
import { SearchScreen } from '../../screens/SearchScreen';
// import { ModifyEmailScreen } from '../../screens/ModifyEmailScreen';
// import { ModifyPaswwordScreen } from '../../screens/ModifyPasswordScreen';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    function getHeaderTitle(route) {
        const routeName = getFocusedRouteNameFromRoute(route) ?? 'slicedonion';

        switch(routeName) {
            case 'Library':
                return 'Your Library'
            case 'Browse':
                return 'Browse Anime Shows'
            case 'Seasons':
                return 'Seasons'
            case 'Account':
                return 'Settings'
        }
    }
    
    return (
        <Stack.Navigator
            detachInactiveScreens={false}
            detachInactiveScreens={false} 
            screenOptions={{
                animationEnabled: false
            }}
        >
            <Stack.Screen
                name="slicedonion" 
                component={AppNavigator}
                options={({ route }) => ({
                    headerTitle: getHeaderTitle(route),
                    headerShown: getHeaderTitle(route) === 'Settings'? false : true,
                    headerStyle: { backgroundColor: '#0f011f'}, 
                    headerTitleStyle: { color: '#fff' },
                    headerRight: () => (
                        <AppSearchIcon />
                    ),
                })} 
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