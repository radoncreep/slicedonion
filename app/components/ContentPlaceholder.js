import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

import { Placeholder, PlaceholderLine, PlaceholderMedia, Fade } from 'rn-placeholder';


const dummyData = [
    { id: 1, name: 'karen '},
    { id: 12, name: 'karen '},
    { id: 4, name: 'karen '},
    { id: 5, name: 'karen '},
    { id: 6, name: 'karen '},
    { id: 7, name: 'karen '},

]


export const ContentPlaceholder = () => {
    return (
        <View>
            <ScrollView 
                horizontal={true}
            >
                {dummyData.map((data, index) => (
                        <PlaceholderMedia
                            Anim
                        >


                        </PlaceholderMedia>
                        // <Placeholder
                        //     Animation={Fade}
                        //     Left={PlaceholderMedia}
                        //     // Right={PlaceholderMedia}
                        //     key={index}
                        //     style={styles.placeholder}
                        // >
                        //     {/* <PlaceholderLine width={80} />
                        //     <PlaceholderLine />
                        //     <PlaceholderLine width={30} /> */}
                        // </Placeholder>
                ))}
            </ScrollView>
        </View>
    )
};

const styles = StyleSheet.create({
    placeholder: {
        width: 300,
        height: 250,
        marginHorizontal: 20,
        backgroundColor: 'red'
    }
})