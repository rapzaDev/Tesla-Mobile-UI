import React from 'react';
import { View } from 'react-native';
import { useTheme } from 'styled-components';
import images from '../../utils/images';

import {
    Container,
    Pressable,
    ButtonText
} from './styles';

export type ButtonProps = {
    name: string;
    type: 'dark' | 'light';
    onPress: () => void;
}

function Button({name, type, onPress}: ButtonProps) {
    const theme = useTheme();

    return (
        <View>
            <Pressable
                onPress={() => onPress}
                type={type}
            >
                <ButtonText
                    style={{
                        ...theme.fonts.button
                    }}
                    type={type}
                >{name}</ButtonText>
            </Pressable>
        </View>
    );
};

export default Button;