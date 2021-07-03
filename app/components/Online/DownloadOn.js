import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default DownloadsOff = () => {
    return (
        <View style={styles.container}> 
            <View style={styles.display}>
                <Text style={styles.statement}>No downloads yet?!?!😲</Text>
                <Text style={styles.statement2}>Streams come and go but your downloads are always here for you</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#000',
    },
    display: {
        alignItems: 'center',
        width: 300
    },
    statement: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 5
    },
    statement2: {
        color: 'grey',
        fontWeight: '400',
        fontSize: 14,
        textAlign: 'center'
    },
})