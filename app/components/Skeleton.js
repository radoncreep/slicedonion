import React from 'react';
import {
    Text, 
    Image,
    View
} from 'react-native';
import ContentLoader, { Rect, Circle } from 'react-content-loader/native';

const Skeleton = () => {
    console.log('crackling bones')
    return (
        <View style={{ backgroundColor: "red"}}>
            <ContentLoader 
                // viewBox="0 0 380 70"
                speed={5}
                backgroundColor="#f3f3f3"
                width={150}
                height={200}
            >
                {/* <Circle cx="30" cy="30" r="30" /> */}
                <Rect x="10" y="0" rx="5" ry="5" width="150" height="190" />
                {/* <Rect x="80" y="40" rx="3" ry="3" width="250" height="10" /> */}
            </ContentLoader>
        </View>
    )
}

export default Skeleton;