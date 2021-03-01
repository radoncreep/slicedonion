import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AnimeDetails, LandingScreen } from '../../screens';
import VideoPlayer from '../../components/VideoPlayer';

const Stack = createStackNavigator();

export const HomeNavigation = () => {
    return (
        <Stack.Navigator mode="modal" screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="slicedonion" 
                component={LandingScreen}
                options={{ headerShown: true,
                    headerStyle: { backgroundColor: 'orange'}, 
                    headerTitleStyle: { color: '#000' } 
                }} 
                />
            <Stack.Screen 
                name="VideoPlayer"
                component={VideoPlayer}
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