import React, { useState } from 'react';
import { View, StyleSheet, Text, FlatList, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { logoutUser } from '../../store/actions';
import authStorage from '../../utility/storage';
import { ListItem } from '../ListItem';
import ListItemSeparator from '../ListItemSeparator';
import StatusBarComp from '../StatusBarComp';
import cache from '../../utility/cache';
import { colorPallete } from '../../utils/colors';


export const AccountOnline = () => {
    const { email } = useSelector(state => state.register.user);
    const dispatch = useDispatch();
    const navigation = useNavigation();
    
    const [ cellularOn, setCellularOn ] = useState(false);
    const [ parentalControl, setParentalControl ] = useState(false);
    
    const accountSettings = [
        {
            profileOptions: [
                {
                    name: 'Username',
                    value: 'radon',
                    targetScreen: null,
                    icon: {
                        name: 'chevron-right',
                        color: 'grey',
                        size: 24
                    }
                },
                {
                    name: 'Change Email',
                    value: 'radoncreep@mail.com',
                    targetScreen: 'Change Email',
                    icon: {
                        name: 'chevron-right',
                        color: 'grey',
                        size: 24
                    }
                },
                {
                    name: 'Change Password',
                    value: '********',
                    targetScreen: 'Change Password',
                    icon: {
                        name: 'chevron-right',
                        color: 'grey',
                        size: 24
                    }
                }
            ]
        },
        {
            mediaControls: [
                {
                    name: 'Stream Using Cellular Data',
                    icon: {
                        name: cellularOn ? 'toggle-on' : 'toggle-off',
                        color: colorPallete.textPurple,
                        size: 30,
                    },
                    targetScreen: null
                },
                {
                    name: 'Parental Control',
                    icon: {
                        name: parentalControl ? 'toggle-on' : 'toggle-off',
                        color: colorPallete.textPurple,
                        size: 30,
                    },
                    targetScreen: null
                },
                {
                    name: 'Notifications',
                    icon: {
                        name: 'chevron-right',
                        color: 'grey',
                        size: 24
                    },
                    targetScreen: 'Notification'
                },
                {
                    name: 'Report',
                    icon: null,
                    targetScreen: null
                },
            ]
        },
        {
            extras: [
                {
                    name: 'Clear Search History',
                    icon: null,
                    targetScreen: null
                },
                {
                    name: 'Suggestions',
                    icon: null,
                    targetScreen: null
                },
                {
                    name: 'Logout',
                    icon: null,
                    targetScreen: null
                }
            ]
        }
    ];

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

    const handleStreamUsingCellular = () => setCellularOn((prevState) => !prevState);

    const handleParentalControl = () => setParentalControl((prevState) => !prevState);

    const handleProfileSettings = (setting) => {
        if (setting.name === "Change Email") {
            return navigation.navigate(setting.targetScreen);
        }

        if (setting.name === "Change Password") {
            return navigation.navigate(setting.targetScreen);
        }

        if (setting.name === 'Clear Search History') return cache.clearCache();

        if (setting.name === 'Logout') return handleAlert();

        if (setting.name === 'Stream Using Cellular Data') return handleStreamUsingCellular();

        if (setting.name === 'Parental Control') return handleParentalControl();

        if (setting.name === 'Notifications') {
            return navigation.navigate(setting.targetScreen)
        }

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
                        icon={item.icon}
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

    const renderHeader = () => (
        <View style={styles.header}>
            <Text style={styles.headerText}>Account Settings</Text>
        </View>
    );

    const renderFooter = () => (
        <View style={{ alignItems: 'center' }}>
            <Text style={[styles.footerText, { color: '#523d57' }]}>Version 1.0.0</Text>
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
                    ListFooterComponent={renderFooter}
                    ListHeaderComponent={renderHeader}
                    renderItem={({ item, index }) => (
                        <View>
                            {renderAccountSetting(item, index)}
                        </View>
                    )}
                />
            </View>
        </StatusBarComp>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    header: {
        borderStyle: "solid",
        paddingBottom: 5,
        paddingBottom: 10
    },
    headerText: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '500',
        textTransform: 'uppercase'
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
});