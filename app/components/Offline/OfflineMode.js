import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StatusBarComp from '../StatusBarComp';


export default OfflinePage = () => {
    return (
        <StatusBarComp>
            <View style={styles.container}>
                <Text style={{ color: '#fff', fontWeight: '500', fontSize: 16 }}>
                    No connection available
                </Text>
            </View>
        </StatusBarComp>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        flex: 1
    }
})