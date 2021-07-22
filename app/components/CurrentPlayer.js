import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default CurrentPlayer = ({ children, description, episodeNumber, seasonNumber, title, version }) => {
    const [ lineNumber, setLineNumber ] = useState(3)

    const handleDescriptionDisplay = () => {
        if (lineNumber === 3) return setLineNumber(null);

        return setLineNumber(3);
    }

    return (
        <View style={styles.container}>
            <View style={styles.details}> 
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'red' }}>{title}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>
                        Season {seasonNumber} - Episode {episodeNumber}
                    </Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff', marginLeft: 10 }}>
                        {version}
                    </Text>
                </View>
                <Pressable onPress={handleDescriptionDisplay}>
                    <Text
                        numberOfLines={lineNumber} 
                        style={{ fontSize: 14, fontWeight: '500', color: '#fff' }}
                    >
                        {description}
                    </Text>
                </Pressable>
            </View>
            <View>
                {children}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20
    },
    details: {
        width: '100%',
        // paddingHorizontal: 20,
        paddingVertical: 25,
    }
})