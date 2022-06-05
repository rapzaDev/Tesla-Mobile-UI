import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

type ButtonType = {
    type: 'dark' | 'light';
}

export const Container = styled.View`
    width: 100%;
    padding: 10px;
`;

export const Pressable = styled.Pressable<ButtonType>`
    height: 40px;
    border-radius: 20px;
    justify-content: center;
    align-items: center;

    width: ${Platform.Version === 'ios' ? "100%" : "345px"};

    ${({type}) => type === 'dark'
        ? css`
            background: ${({theme}) => theme.colors.primary};
            margin-bottom: 10px;
        `
        : css`
            background-color: ${({theme}) => theme.colors.secondary};
        `
    };
`;

export const ButtonText = styled.Text<ButtonType>`
    text-transform: uppercase;

    ${({type}) => type === 'dark'
        ? css`
            color: ${({theme}) => theme.colors.secondary};
        `
        : css`
            color: ${({theme}) => theme.colors.primary};
        `
    };
`;