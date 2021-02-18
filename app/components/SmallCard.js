import React from 'react';
import { View, StyleSheet, Text } from 'react-native'

function SmallCard(props) {
    return (
        <View style={styles.container}>
            <Text>Small card</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default SmallCard;