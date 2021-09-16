import React from 'react';
import { Modal, StyleSheet,Text, View } from 'react-native';

export const ChangeEmailMoal = ({ isVisible, setIsVisible }) => {
    return (
        <Modal
            visible={isVisible}
            animationType="slide"
            onRequestClose={() => setIsVisible(false)}
            presentationStyle="fullScreen"
        >
            <View style={styles.container}>
                <Text>Email mode</Text>
            </View>
        </Modal>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    } 
})