/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Player from '../Player';
import screen2 from '../HomeScreen';
import HomeBottomNavigator from './HomeBottomNavigator';
import Player2 from '../Player2';




const Stack = createStackNavigator()


const Router = () => {
    
    return (
        <NavigationContainer>
            <Stack.Navigator 
            >
            {/* <Stack.Screen
                    name={"Player2"}
                    component={Player2}
                    
                    options={{
                        headerShown:false
                    }}
                /> */}
            <Stack.Screen
                    name={"HomeBottomNavigator"}
                    component={HomeBottomNavigator}
                    options={{
                        headerShown:false
                        }}
                />
            {/* <Stack.Screen
                    name={"Player"}
                    component={Player}
                    options={{
                        headerShown:false
                    }}
                /> */}

                

               
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default Router