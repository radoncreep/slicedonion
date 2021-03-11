import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AnimeDetails, HomeScreen } from '../../screens';
import PlayerScreen from '../../screens/PlayerScreen';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="slicedonion" 
                component={HomeScreen}
                options={{ headerShown: true,
                    headerStyle: { backgroundColor: 'orange'}, 
                    headerTitleStyle: { color: '#660000' } 
                }} 
                />
            <Stack.Screen 
                name="Player"
                component={PlayerScreen}
                options={{
                    headerShown: false,
                    headerTitle: true,
                    headerStyle: {
                        backgroundColor: '#000'
                    },
                    // headerBackImage
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