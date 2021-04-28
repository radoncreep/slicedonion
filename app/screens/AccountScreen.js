import React from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native'
import { useSelector } from 'react-redux';
import { ListItem } from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import StatusBarComp from '../components/StatusBarComp';

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
        value: 'dummypassword',
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
        name: 'Suggestions',
        targetScreen: null
    },
    {
        name: 'Logout',
        targetScreen: null
    }
];

const AccountScreen = (props) => {
    const { email } = useSelector(state => state.register.user);

    return (
        <StatusBarComp style={styles.container}>
            <View style={styles.menu}>
                <Text style={{ color: 'silver', fontSize: 14, marginBottom: 10 }}>PROFILE SETTINGS</Text>
                <FlatList 
                    data={profileOptions}
                    keyExtractor={(profileOptions) => profileOptions.name}
                    ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
                    renderItem={({ item, index }) => (
                        <ListItem 
                            title={item.name}
                            towhere={item.targetScreen}
                            onPress={() => console.log('hi')}
                            value={item.name === 'Change Email' ? email : item.value}
                        />
                    )}
                />
                <ListItemSeparator style={styles.separator} />
            </View>
            <View style={styles.menu}>
                <Text style={{ color: 'silver', fontSize: 14, marginBottom: 10 }}>APP SETTINGS</Text>
                <FlatList 
                    data={accountNavigations}
                    keyExtractor={(accountNavigations) => accountNavigations.name}
                    ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
                    renderItem={({ item, index }) => (
                        <ListItem 
                            title={item.name}
                            towhere={item.targetScreen}
                            onPress={() => console.log('hi')}
                            value={item.value}
                        />
                    )}
                />
                <ListItemSeparator style={styles.separator} />
            </View>
            <View style={styles.menu}>
                <Text style={{ color: 'silver', fontSize: 14, marginBottom: 10 }}>EXTRAS</Text>
                <FlatList 
                    data={extras}
                    keyExtractor={(extras) => extras.name}
                    ItemSeparatorComponent={() => <ListItemSeparator style={styles.separator} />}
                    renderItem={({ item, index }) => (
                        <ListItem 
                            title={item.name}
                            towhere={item.targetScreen}
                            onPress={() => console.log('hi')}
                            value={item.value}
                        />
                    )}
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