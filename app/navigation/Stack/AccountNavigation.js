import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { AccountScreen } from '../../screens';

const Stack = createStackNavigator();

export const AccountNavigation = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: true }}>
            <Stack.Screen
                name="ACCOUNT SETTINGS" 
                component={AccountScreen}
                options={{ 
                    headerShown: true,
                    headerStyle: { backgroundColor: '#0f010f'}, 
                    headerTitleStyle: { 
                        color: '#fff',
                        borderStyle: "solid",
                        borderBottomColor: 'silver',
                        borderBottomWidth: .5,
                        paddingBottom: 5,
                        fontSize: 16,
                        fontWeight: '500',
                        paddingLeft: 15
                    } 
                }} 
            />
        </Stack.Navigator>
    )
};