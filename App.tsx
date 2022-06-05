import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components';
import * as NavigationBar from 'expo-navigation-bar';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles';
import AppRoutes from './src/routes/app.routes';
import { useEffect } from 'react';

export default function App() {

  const visibility = NavigationBar.useVisibility();

    useEffect(() => {
        async function setStatusBarVisibility() {
            await NavigationBar.setBehaviorAsync('overlay-swipe');
            await NavigationBar.setVisibilityAsync('hidden');
        } 

        setStatusBarVisibility();
    },[visibility])

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={theme}>
      <StatusBar hidden/>
      <AppRoutes />
    </ThemeProvider>
  );
};
