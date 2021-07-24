import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Text, FlatList, ScrollView, TouchableHighlight, Alert } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';

import { ListItem } from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import StatusBarComp from '../components/StatusBarComp';
import { logoutUser } from '../store/actions';
import cache from '../utility/cache';
import authStorage from '../utility/storage';

const accountSettings = [
    {
        profileOptions: [
            {
                name: 'Username',
                value: 'radon',
                targetScreen: null
            },
            {
                name: 'Change Email',
                value: 'radoncreep@mail.com',
                targetScreen: 'Change Email'
            },
            {
                name: 'Change Password',
                value: '********',
                targetScreen: 'Change Password'
            }
        ]
    },
    {
        mediaControls: [
            {
                name: 'Stream Using Cellular data',
                targetScreen: null
            },
            {
                name: 'Parental Control',
                targetScreen: null
            },
            {
                name: 'Notifications',
                targetScreen: 'NotificationScreen'
            },
            {
                name: 'Report',
                targetScreen: null
            },
        ]
    },
    {
        extras: [
            {
                name: 'Clear Search History',
                targetScreen: null
            },
            {
                name: 'Suggestions',
                targetScreen: null
            },
            {
                name: 'Logout',
                targetScreen: null
            }
        ]
    }

];


const profileOptions = [
    {
        name: 'Username',
        value: 'radon',
        targetScreen: null
    },
    {
        name: 'Change Email',
        value: 'radoncreep@mail.com',
        targetScreen: null
    },
    {
        name: 'Change Password',
        value: '********',
        targetScreen: null
    }
];

const accountNavigations = [
    {
        name: 'Stream Using Cellular data',
        targetScreen: null
    },
    {
        name: 'Parental Control',
        targetScreen: null
    },
    {
        name: 'Notifications',
        targetScreen: 'NotificationScreen'
    },
    {
        name: 'Report',
        targetScreen: null
    },
];

const extras = [
    {
        name: 'Clear Search History',
        targetScreen: null
    },
    {
        name: 'Suggestions',
        targetScreen: null
    },
    {
        name: 'Logout',
        targetScreen: null
    }
];

const AccountScreen = () => {
    const { email } = useSelector(state => state.register.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();


    const handleAlert = () => {
        Alert.alert(
            "Logout",
            "Sure you want to logout?",
            [
              {
                text: "Yes",
                onPress: () => { 
                    dispatch(logoutUser());
                    authStorage.removeToken();
                },
              },
              {
                text: "No",
                onPress: () => console.log("Cancel Pressed"),
              }
            ]
        )
    };

    const handleProfileSettings = (setting) => {
        if (setting.name === "Change Email") {
            navigation.navigate(setting.targetScreen);
        }

        if (setting.name === "Change Password") {
            navigation.navigate(setting.targetScreen);
        }

        if (setting.name === 'Clear Search History') cache.clearCache();

        if (setting.name === 'Logout') handleAlert();

    };

    const mapNames = ['profileOptions', 'mediaControls', 'extras'];

    const mapTransform = {
        profileOptions: 'Profile Options',
        mediaControls: 'Media Controls',
        extras: 'Extras'
    }

    const renderAccountSetting = (setting, index) => (
        <View key={mapNames[index]} style={{ marginBottom: 50 }}>
            <Text style={{ color: 'silver', fontSize: 14, marginBottom: 10 }}>{mapTransform[mapNames[index]]}</Text>
            {setting[mapNames[index]].map((item, index) => (
                <View key={item.name}>
                    <ListItem 
                        title={item.name}
                        towhere={item.targetScreen}
                        onPress={() => handleProfileSettings(item)}
                        value={item.name === 'Change Email' ? email : item.value}
                    />
                    <ListItemSeparator style={styles.separator} />
                </View>
            ))}
        </View>
    );

    const renderFooter = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={[styles.footerText, { color: '#523d57'}]}>Version 1.0.0</Text>
            <Text style={styles.footerText}>RadonEntertainment</Text>
            <Text style={styles.footerText}>Copyright</Text>
        </View>
    );

    return (
        <StatusBarComp style={styles.container}>
            <View style={styles.menu}>
                <FlatList 
                    data={accountSettings}
                    keyExtractor={(accountSetting, index) => mapNames[index]}
                    renderItem={({ item, index }) => (
                        <View>
                            {renderAccountSetting(item, index)}
                        </View>
                    )}
                    ListFooterComponent={renderFooter}
                />
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f010f',
        paddingLeft: 25
    },
    footerText: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 14
    },
    menu: {
        marginBottom: 35
    },
    separator: {
        backgroundColor: 'silver',
        height: .5,
        opacity: .5,
        padding: 0
    }
})

export default AccountScreen;