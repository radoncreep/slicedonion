import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AnimeDetails, HomeScreen, PlayerScreen } from '../../screens';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="slicedonion" 
                component={HomeScreen}
                options={{ 
                    headerShown: true,
                    headerStyle: { backgroundColor: '#0f011f'}, 
                    headerTitleStyle: { color: '#fff' } 
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
            }}/>
        </Stack.Navigator>
    )
};