/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import BottomMusicPlayer from './components/BottomMusicPlayer';
import ExploreAlbumMix from './components/ExploreAlbumMix';
import ExploreMusicMix from './components/ExploreMusicMix';
import ExplorePlaylist from './components/ExplorePlaylist';
// const windowWidth = useWindowDimensions().width;
// const windowHeight = useWindowDimensions().height;

export default function ExploreScreen() {
    return (
        <View style={styles.container}>
            
            <ScrollView >
                <ExploreAlbumMix/>

                <ExplorePlaylist/>
                <ExplorePlaylist/>

                <ExploreMusicMix/>
                <ExploreMusicMix/>

                <ExploreAlbumMix/>

                <ExploreMusicMix/>

                <ExplorePlaylist/>

                <ExploreMusicMix/>
                <ExploreMusicMix/>
            </ScrollView>
           
       </View>
    );
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
    },
});