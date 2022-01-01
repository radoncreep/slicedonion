import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

const HorizontalTraySkeleton = () => {
    const mapping = new Array(5).fill(0);

    return (
        <View 
            style={{
                marginHorizontal: 0,
                height: 330,
                paddingLeft: 5
            }}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: 0,
                    flexDirection:  'row',
                    marginTop: 10
                }}
            >
                {mapping.map((item, index) => (
                    <View
                        key={`MAPPING-${index}`}
                        style={{
                            marginLeft: index > 0 ? 10 : 0,
                        }}
                    >
                        <ContentLoader 
                            speed={1}
                            width={150}
                            height={300}
                            backgroundColor="#0f011f"
                            foregroundColor="#330a21"
                        >
                            <Rect x="0" y="0" rx="4" ry="4" width="150" height="270" />
                        </ContentLoader>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default HorizontalTraySkeleton;