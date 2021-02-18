import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import LargeCard from './LargeCard';

const animeList = [
    {
        id: 1,
        title: 'naruto',
        subtitle: 'shippuden',
        imageUrl: 'https://1.bp.blogspot.com/-71XAH4fqsYE/Xkjxv8Pf68I/AAAAAAAAHNk/rQcOTEVo5owT8N0kSQ1jB03Bi28D8tlfgCLcBGAsYHQ/w1200-h630-p-k-no-nu/Anime%2Blike%2BHaikyuu.jpg'
    },
    {
        id: 2,
        title: 'boruto',
        subtitle: 'shippuden',
        imageUrl: 'https://assets1.ignimgs.com/2019/10/23/stampede-thumbnail-blogroll-1571862365152.jpg?width=1280'
    },
    {
        id: 3,
        title: 'rezero',
        subtitle: 'shippuden',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBIC1lspspp427H1oo4mKEGej1KtwNaiHLg&usqp=CAU'
    },
    {
        id: 4,
        title: 'jujutsu kaisen',
        subtitle: 'shonen',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    }
];

function LargeTrayItems(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.heeader}>POPULAR EPISODES</Text>
                <ScrollView
                    horizontal
                >   
                    {animeList.map((anime) => (
                        <LargeCard 
                            key={anime.id} 
                            title={anime.title} 
                            subtitle={anime.subtitle} 
                            imageUrl={anime.imageUrl}
                            onPress={() => console.log('hey anime')}
                        />
                    ))}
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'orange',
        marginHorizontal: 5,
        height: 300,
        paddingLeft: 5,
        marginBottom: 10
    },
    heeader: {
        marginVertical: 5,
        color: '#fff'
    }
})

export default LargeTrayItems;