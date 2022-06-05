import styled from 'styled-components/native';
import { Dimensions, Platform } from 'react-native';
import { css } from 'styled-components/native';

export const CartCointainer = styled.View`
    width: 100%;
    height: ${Platform.Version === 'ios' 
        ? css`${Dimensions.get('window').height}px;` 
        : css`${Dimensions.get('window').height + 50}px;`
    };
`;

export const TitlesContainer = styled.View`
    margin-top: ${Platform.Version === 'ios' 
        ? '20%' 
        : '23%'
    };
    width: 100%;
    align-items: center;
`;

export const Title = styled.Text`
    
`;

export const Subtitle = styled.Text`
`;

export const TaglineCTAText = styled.Text`
    text-decoration-line: underline;
`;

export const ImageBackground = styled.ImageBackground`
    width: 100%;
    height: 100%;
    position: absolute;
`;

export const ButtonsContainer = styled.View`
    position: absolute;
    bottom: 50px;
    width: 100%;

    /* justify-content: center; */
    align-items: center;
`;