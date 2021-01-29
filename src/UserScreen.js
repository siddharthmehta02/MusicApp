/* eslint-disable prettier/prettier */
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import UserDetails from './components/UserDetails'
import UserFavorites from './components/UserFavorites'
import UserPlaylist from './components/UserPlaylist'

export default function UserScreen() {
    return (
        <View style={styles.container}>
           
            <ScrollView >
            <UserDetails/>
            <UserPlaylist/>
            <UserFavorites title={'Prefered'}/>
            <UserFavorites title={'Listen Later'}/>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'black'
    }
})
