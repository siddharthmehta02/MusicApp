/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react'
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import BottomMusicPlayer from '../components/BottomMusicPlayer'


import HomeScreen from '../HomeScreen';
import ExploreScreen from '../ExploreScreen';
import UserScreen from '../UserScreen';
const Tab = createBottomTabNavigator()

const HomeBottomNavigator = () => {
    return (
        <>
        
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#fff',
            
            style:{
                backgroundColor:'black'
            }
        }}>
            <Tab.Screen
                name={"Home"}
                component={HomeScreen}
               
                options={{
                    headerTitle: "Upload",
                    title:"Home",
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="home" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={"Search"}
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Fontisto name="search" size={25} color={color} />
                    )
                }}
            />

            <Tab.Screen
                name={"Saved"}
                component={ExploreScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="heart-o" size={25} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name={"Profile"}
                component={UserScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <EvilIcons name="user" size={25} color={color} />
                    )
                }}
            />
        </Tab.Navigator>
            <BottomMusicPlayer/>
        </>
    )
}

export default HomeBottomNavigator