import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AccountScreen } from '../../screens';
import { ModifyEmailScreen } from '../../screens/ModifyEmailScreen';
import { ModifyPaswwordScreen } from '../../screens/ModifyPasswordScreen';
import { Notification } from '../../components/Notification';


const Stack = createStackNavigator();

export const AccountNavigation = () => {
    return (
        <Stack.Navigator initialRouteName="Account Screen" screenOptions={{ headerShown: false }}>
            <Stack.Screen
                name="Settings" 
                component={AccountScreen}
                options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: { 
                        backgroundColor: '#0f010f',
                        borderBottomWidth: .5,
                        borderBottomColor: '#523d57'
                    }, 
                    headerTitleStyle: { 
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '500',
                    }
                }} 
            />
            <Stack.Screen
                name="Change Email" 
                component={ModifyEmailScreen}
                options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: { 
                        backgroundColor: '#0f010f',
                        borderBottomWidth: .5,
                        borderBottomColor: '#523d57'
                    }, 
                    headerTitleStyle: { 
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '500',
                    }
                }} 
            />
            <Stack.Screen
                name="Change Password" 
                component={ModifyPaswwordScreen}
                options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: { 
                        backgroundColor: '#0f010f',
                        borderBottomWidth: .7,
                        borderBottomColor: '#523d57'
                    }, 
                    headerTitleStyle: { 
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '500',
                    }
                }} 
            />
            <Stack.Screen
                name="Notification" 
                component={Notification}
                options={{ 
                    headerShown: true,
                    headerTintColor: '#fff',
                    headerStyle: { 
                        backgroundColor: '#0f010f',
                        borderBottomWidth: .7,
                        borderBottomColor: '#523d57'
                    }, 
                    headerTitleStyle: { 
                        color: '#fff',
                        fontSize: 16,
                        fontWeight: '500',
                    }
                }} 
            />
        </Stack.Navigator>
    )
};