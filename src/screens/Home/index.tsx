import React, { useCallback, useEffect, useState } from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import { useTheme } from 'styled-components';
import images from '../../utils/images';

import CarList from '../../components/CarList';

import {} from './styles';
import Header from '../../components/Header';

function Home() {
    const theme = useTheme();

    return (
        <SafeAreaView 
            style={{ 
                flex: 1, 
                backgroundColor: theme.colors.white ,
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <Header />
           <CarList />
        </SafeAreaView>
    );
};

export default Home;
