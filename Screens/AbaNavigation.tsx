import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './Home';
import ClientesScreen from './Clientes';
import { Ionicons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import RedeCaciqueScreen from './RedeCaciqueScreen';

const Tab = createBottomTabNavigator();

const AbaNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName: keyof typeof Ionicons.glyphMap = 'home';

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Clientes') {
                        iconName = 'people';
                    } else if (route.name === 'Cacique') {
                        iconName = 'car';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato', 
                tabBarInactiveTintColor: 'gray', 
                tabBarStyle: {
                    backgroundColor: '#2C3E50', 
                },
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Clientes" component={ClientesScreen} />
            <Tab.Screen name="Cacique" component={RedeCaciqueScreen}/>
        </Tab.Navigator>
        </NavigationContainer>
    );
}

export default AbaNavigation;