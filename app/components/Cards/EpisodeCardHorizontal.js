import React from 'react';
import { 
    View, 
    StyleSheet, 
    ImageBackground, 
    Text, 
    TouchableHighlight 
} from 'react-native';


const EpisodeCardHorizontal = ({ episodeNumber, episodeTitle, onPress, thumbnail, version }) => {
    return (
        <TouchableHighlight onPress={onPress}>
            <View style={styles.container}>
                <ImageBackground style={styles.imagebg} source={{ uri: thumbnail }} />
        
                <View style={styles.minicard}>
                    <View style={{
                        flexDirection: 'column',
                        width: '80%',
                        justifyContent: 'space-around',                        
                    }}>
                        <View style={styles.minicardTItle}>
                            <Text 
                                numberOfLines={1} 
                                style={{ color: '#fff', fontWeight: '500', fontSize: 13, textAlign: 'left' }}
                                >
                                    {episodeTitle}
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', width: '100%', alignItems: 'flex-end', marginTop: 10 }}>
                            <View style={styles.minicardEpisodeNumber}>
                                <Text style={{ 
                                    color: '#fff', 
                                    fontWeight: '200', 
                                    fontSize: 12 
                                }}
                                    >episode {episodeNumber}
                                </Text>
                            </View>

                            <View style={styles.minicardEpisodeVersion}>
                                <Text style={{ 
                                    color: '#fff', 
                                    fontWeight: '200', 
                                    fontSize: 14 
                                }}
                                    >{version}
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </TouchableHighlight>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#0f011f',
        marginBottom: 7,
        height: 110,
        width: '100%',
    },
    imagebg: {
        width: 170,
        height: '100%'
    },
    length: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        opacity: 1
    },
    lengthContainer: {
        position: 'absolute',
        top: 80,
        right: 15,
        backgroundColor: '#000',
        padding: 3,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    minicard: {
        flexDirection: 'column',
        paddingHorizontal: 10,
        paddingVertical: 5,
        width: '58%',        
    },
    minicardTItle: {
        borderRadius: 40,
        color: '#fff',
        backgroundColor: '#7cc5fc',
        marginTop: 5,
        fontSize: 11,
        fontWeight: '400',
        width: '100%',
        paddingHorizontal: 10,
    },
    minicardEpisodeNumber: {
        borderRadius: 40,
        color: '#fff',
        backgroundColor: '#7cc5fc',
        paddingLeft: 10,
        justifyContent: 'center',
        marginTop: 5,
        width: '55%',
        height: 20,
    },
    minicardEpisodeVersion: {
        borderRadius: 40,
        color: '#fff',
        backgroundColor: '#7cc5fc',
        paddingLeft: 10,
        justifyContent: 'center',
        marginTop: 5,
        width: 50,
        marginLeft: 10
    }
})

export default EpisodeCardHorizontal;