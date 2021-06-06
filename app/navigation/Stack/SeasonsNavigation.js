import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SeasonsScreen } from '../../screens';


const Stack = createStackNavigator();

export const SeasonsNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="Seasons" 
                component={SeasonsScreen}
                options={{ 
                    headerShown: true,
                    headerStyle: { backgroundColor: '#0f011f'}, 
                    headerTitleStyle: { color: '#fff' } 
                }} 
            />
            {/* <Stack.Screen 
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
            }}/> */}
        </Stack.Navigator>
    )
};