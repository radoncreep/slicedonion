import React from 'react';
import {
    ScrollView,
    View
} from 'react-native';
import ContentLoader, { Rect } from 'react-content-loader/native';

const TraySkeleton = ({ 
    containerStyle, 
    isHorizontal, 
    scrollViewStyle, 
    contentWidth, 
    contentHeight,
    rectWidth,
    rectHeight,
    numberOfBones = 5 ,
    leftMargin,
    topMargin
}) => {
    const mapping = new Array(numberOfBones).fill(0);

    return (
        <View 
            style={{
                ...containerStyle
            }}
        >
            <ScrollView
                horizontal={isHorizontal}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    ...scrollViewStyle
                }}
            >
                {mapping.map((item, index) => (
                    <View
                        key={`MAPPING-${index}`}
                        style={{
                            marginLeft: index > 0 && leftMargin ? 10 : 0,
                            marginTop: topMargin ? 10 : 0
                        }}
                    >
                        <ContentLoader 
                            speed={1}
                            width={contentWidth}
                            height={contentHeight}
                            backgroundColor="#0f011f"
                            foregroundColor="#330a21"
                        >
                            <Rect x="0" y="0" rx="4" ry="4" width={rectWidth} height={rectHeight} />
                        </ContentLoader>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default TraySkeleton;