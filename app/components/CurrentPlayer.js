import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import ListItemSeparator from '../components/ListItemSeparator';
import { colorPallete } from '../utils/colors';

export default CurrentPlayer = ({ children, description, episodeNumber, seasonNumber, title, version }) => {
    const navigation = useNavigation();

    const [ lineNumber, setLineNumber ] = useState(3);

    const handleDescriptionDisplay = () => {
        if (lineNumber === 3) return setLineNumber(null);

        return setLineNumber(3);
    }

    return (
        <View style={styles.container}>
            <View style={styles.details}>
            {/* <ListItemSeparator style={styles.separator} /> */}

                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                        Season {seasonNumber} - Episode {episodeNumber}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 10 }}>
                        {version}
                    </Text>
                </View>

                <ListItemSeparator style={styles.separator} />
                <Pressable
                    style={{ marginVertical: 10 }}
                    onPress={handleDescriptionDisplay}
                >
                    <Text
                        numberOfLines={lineNumber} 
                        style={{ fontSize: 12, fontWeight: '500', color: '#fff' }}
                    >
                        {description}
                    </Text>
                </Pressable>
            </View>
            <View>
                <Text 
                    style={{ 
                        textTransform: 'uppercase', 
                        color: 'white',
                        fontSize: 14,
                        fontWeight: 'bold',
                        marginBottom: 15
                    }}
                >Next Episode</Text>
                {children}
            </View>
            <View style={styles.backBtnView}>
                <Pressable 
                    style={{ flexDirection: 'row', justifyContent: 'center', height: 40, alignItems: 'center'}}
                    onPress={() => navigation.goBack()}
                >
                    <Ionicons name="chevron-back-sharp" size={24} color="red" />
                    <Text 
                        style={{ 
                            fontSize: 14,
                            fontWeight: 'bold',
                            color: 'red', 
                            textTransform: 'uppercase'
                        }}>
                        All Episodes
                    </Text>
                </Pressable>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    backBtnView: {
        justifyContent: 'center', 
        padding: 20, 
        marginTop: 50, 
        flexDirection: 'row',
    },
    details: {
        width: '100%',
        paddingVertical: 25,
    },
    separator: {
        backgroundColor: 'red',
        height: 3,
        opacity: .5,
        padding: 0,
        marginVertical: 10
    }
})