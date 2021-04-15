import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import MapScreen from '../screens/SearchScreen';
import SearchScreen from '../screens/SearchScreen';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name={'HomeScreen'}
                    component={ HomeScreen }
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={'LoginScreen'}
                    component={ LoginScreen }
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={'RegisterScreen'}
                    component={ RegisterScreen }
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name={'SearchScreen'}
                    component={ SearchScreen }
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;
