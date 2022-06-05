import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from '../screens/Home';

const Stack = createStackNavigator();

function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'Home'}
            >
                <Stack.Screen name="Home" component={Home}/>
            </Stack.Navigator >
        </NavigationContainer>
    );
};

export default AppRoutes;