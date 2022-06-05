import React, { useCallback } from 'react';
import { Dimensions, Platform, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { CarsDataType } from '../../hooks/data';
import useHome from '../../hooks/useHome';
import images from '../../utils/images';
import CartItem from '../CartItem';

import {
    
} from './styles';


function CarList() {
    const theme = useTheme();
    const { cars } = useHome();

    const renderItem = useCallback((item: CarsDataType) => {
        return (
             <CartItem 
                name={item.name}
                tagline={item.tagline}
                taglineCTA={item.taglineCTA}
                image={item.image}
            />
        );
    }, []);

    return (
        <View style={{width: "100%"}}>
            <FlatList 
                data={cars}
                renderItem={({item}) => renderItem(item)}
                keyExtractor={(item) => `${item.name}`}
                snapToAlignment={'start'}
                decelerationRate={'fast'}
                snapToInterval={ Platform.Version === 'ios' 
                    ? Dimensions.get('window').height
                    : Dimensions.get('window').height + 50
                }
            />
        </View>
    );
};

export default CarList;