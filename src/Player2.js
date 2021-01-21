/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';

import songs from './data.json'
import Tempbox from './Tempbox';

export default function Player2() {
    const[ready,setReady]=useState(false)
    useEffect(() => {
        TrackPlayer.setupPlayer().then(async() => {
            console.log('player rready')
            await TrackPlayer.add(songs)
            // TrackPlayer.play();
            // TrackPlayer.add({ songs })
            // TrackPlayer.play()
        });
    }, [])
    return (
        <View style={[(ready)?styles.bar:styles.bar2]}>
            <View >
                <Text>Sidd</Text>
            </View>
        
            

        </View>
    );
}

const styles = StyleSheet.create({
  
    bar:{
        position:'absolute',
        bottom:-Dimensions.get('window').height,
        backgroundColor:'red',
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width
    },
    bar2:{
        backgroundColor:'red',
        height:Dimensions.get('window').height,
        width:Dimensions.get('window').width

    }
});
