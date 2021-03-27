import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native'
import LargeCard from '../Cards/LargeCard';

const animeList = [
    {
        id: 1,
        title: 'naruto',
        description: 'S1 E5 - Beautiful Day At The Beach',
        imageUrl: 'http://cdn.epicstream.com/assets/uploads/ckeditor/images/1612903048_AoT%201.jpg'
    },
    {
        id: 2,
        title: 'boruto',
        description: 'S1 E5 - Beautiful Day At The Beach',
        imageUrl: 'https://fiverr-res.cloudinary.com/images/t_smartwm/t_main1,q_auto,f_auto,q_auto,f_auto/attachments/delivery/asset/71a63ce2e5214bb92e62f0fdb91d3444-1602171077/na_enigma_overhaul_mha3/create-best-custom-anime-thumbnails-for-your-youtube-videos.jpg'
    },
    {
        id: 3,
        title: 'rezero',
        description: 'S1 E5 - Beautiful Day At The Beach',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxBIC1lspspp427H1oo4mKEGej1KtwNaiHLg&usqp=CAU'
    },
    {
        id: 4,
        title: 'jujutsu kaisen',
        description: 'S1 E5 - Beautiful Day At The Beach',
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTItYnu5kt0oXc8a_U8Z3OZ6oJ3uMismJjqeQ&usqp=CAU'
    }
];

const LargeCardTray = ({ onPress }) => {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.heeader}>POPULAR EPISODES</Text> */}
                <ScrollView
                    horizontal
                >   
                    {animeList.map((anime) => (
                        <LargeCard 
                            key={anime.id} 
                            title={anime.title} 
                            description={anime.description} 
                            imageurl={anime.imageUrl}
                            onPress={onPress}
                        />
                    ))}
                </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        // backgroundColor: 'orange',
        marginHorizontal: 5,
        paddingLeft: 5,
    }
});

export default LargeCardTray;