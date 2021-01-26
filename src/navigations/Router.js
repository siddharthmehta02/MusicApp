/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeBottomNavigator from './HomeBottomNavigator';


const Stack = createStackNavigator();


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name={"HomeBottomNavigator"}
                    component={HomeBottomNavigator}
                    options={{
                        headerShown:false,
                        }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
export default Router;
