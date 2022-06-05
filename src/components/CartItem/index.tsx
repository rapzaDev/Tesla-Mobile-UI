import React, { useCallback } from 'react';
import { useTheme } from 'styled-components';
import { CarsDataType } from '../../hooks/data';
import images from '../../utils/images';
import Button from '../Button';

import {
    CartCointainer, 
    TitlesContainer, 
    Title, 
    Subtitle,
    ImageBackground,
    ButtonsContainer,
    TaglineCTAText,
} from './styles';

interface ICartItemProps extends CarsDataType{}

function CartItem({
    name, 
    tagline,
    taglineCTA,
    image
}: ICartItemProps) {
    const theme = useTheme();

    return (
        <CartCointainer>
            <ImageBackground 
                source={image}
                resizeMode="cover"
            />

            <TitlesContainer>
                <Title style={{...theme.fonts.title}}>{name}</Title>
                <Subtitle style={{
                    ...theme.fonts.subTitle, 
                    color: theme.colors.gray}}
                >
                    {tagline}
                    {' '}
                    {taglineCTA && (
                        <TaglineCTAText>
                            {taglineCTA}
                        </TaglineCTAText>
                    )}
                    
                </Subtitle>
            </TitlesContainer>

            <ButtonsContainer>
                <Button 
                    name='Custom Order' 
                    type='dark' 
                    onPress={() => console.log('custom')}
                />

                <Button 
                    name='Existing Inventory' 
                    type='light' 
                    onPress={() => console.log('inventory')}
                />
            </ButtonsContainer>

        </CartCointainer>
    );
};

export default CartItem;