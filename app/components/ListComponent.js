import React from 'react';
import { View, StyleSheet, FlatList, ScrollView } from 'react-native'
import LargeTrayItems from './LargeTrayItems';
import ListTrayItems from './ListTrayItems';



const ListComponent = (props) => {
    return (
        <View style={styles.container}>
            <ScrollView
            >
                <ListTrayItems />
                <ListTrayItems />
                <LargeTrayItems />
                <ListTrayItems />
                <ListTrayItems />
                {/* <ListTrayItems />
                <ListTrayItems /> */}

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {},
})

export default ListComponent;