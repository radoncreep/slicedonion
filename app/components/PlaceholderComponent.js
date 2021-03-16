import React from 'react';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { Placeholder, PlaceholderLine, PlaceholderMedia, ShineOverlay } from 'rn-placeholder';

export const PlaceholderComponent = (style) => (
    <Placeholder 
        Animation={ShineOverlay}
        style={{
            marginVertical: 6,
            marginHorizontal: 5,
            flexDirection: 'column',
        }}
        Left={(props) => (
            <PlaceholderMedia
                style={[
                    style,
                    {
                        width: responsiveWidth(22),
                        height: responsiveHeight(16),
                        backgroundColor: 'grey'
                    }
                ]}
            />
        )}
    >
        <Vieww style={{ position: 'absolute'}}>
            <PlaceholderLine style={{ marginTop: responsiveHeight(1) }} width={50} />
            <PlaceholderLine style={{ marginTop: responsiveHeight(1.5) }} width={50} />
            <PlaceholderLine width={50} />
        </View>
    </Placeholder>
);