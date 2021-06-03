import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default CurrentPlayer = ({ children, episodeNumber, seasonNumber, title, version }) => {
    return (
        <View style={styles.container}>
            <View style={styles.details}> 
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>
                        S{seasonNumber}-E{episodeNumber}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 10 }}>
                        {version}
                    </Text>
                </View>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    details: {
        width: '100%',
        height: 100,
        paddingHorizontal: 20,
        justifyContent: 'center'
    }
})