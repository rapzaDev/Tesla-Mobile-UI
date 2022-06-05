import React from 'react';
import { View, Image, Platform, Dimensions } from 'react-native';
import images from '../../utils/images';

function Header() {

    return (
        <View
            style={{
                zIndex: 1,
                position: 'absolute',
                top: Platform.Version === 'ios' 
                        ? 50
                        : 30,
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '100%',
                paddingHorizontal: 20,
            }}
        >
            <Image 
                source={images.logo}
                style={{
                    width: 100,
                    height: 20
                }}
                resizeMode='contain'
            />
            <Image 
                source={images.menu}
                style={{
                    width: 25,
                    height: 25
                }}
                resizeMode='contain'
            />
        </View>
    );
};

export default Header;