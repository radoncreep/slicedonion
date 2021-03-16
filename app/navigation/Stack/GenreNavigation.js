import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import GenresComponent from '../../components/Categories/GenresComponent';
import { AnimeDetails, GenreScreen } from '../../screens';

const Stack = createStackNavigator();

export const GenreNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="All Genre" mode="modal" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Genre Screen" 
                component={GenreScreen}
                options={{ 
                    headerStyle: { backgroundColor: '#782491'}, 
                    headerTitleStyle: { color: 'silver' } 
                }} 
            />
            <Stack.Screen
                name="All Genre" 
                component={GenresComponent}
                options={{ 
                    headerStyle: { backgroundColor: '#782491'}, 
                    headerTitleStyle: { color: 'silver' } 
                }} 
            />
            <Stack.Screen 
                name="Details" 
                mode="modal"
                component={AnimeDetails} 
                options={{ 
                    headerTitle: false,
                    headerTransparent: true,
                }}
            />
        </Stack.Navigator>
    )
};