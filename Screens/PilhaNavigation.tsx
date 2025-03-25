import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Home';
import ClientesScreen from './Clientes';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

function PilhaNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={{ title: 'Home' }} 
                />
                <Stack.Screen 
                    name="Clientes" 
                    component={ClientesScreen} 
                    options={{ title: 'Clientes' }} 
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default PilhaNavigation;