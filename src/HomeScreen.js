/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity, Modal, TouchableWithoutFeedback } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import TextTicker from 'react-native-text-ticker';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import BottomMusicPlayer from './components/BottomMusicPlayer';

import songs from './data.json'

const { width, height } = Dimensions.get('window')

export default function HomeScreen() {
    const [modalVisible, setModalVisible] = useState(false)

    const renderItem = ({ item }) => {
        return (
            <View style={styles.cover}>



                <Image
                    style={styles.image}
                    source={{ uri: item.artwork }}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{item.artist}</Text>





            </View>
        )
    }
    const renderItem_playlists = ({ item }) => {
        return (
            <View style={styles.cover_playlist}>
                <Image
                    style={styles.image_playlist}
                    source={{ uri: item.artwork }}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{item.artist}</Text>
            </View>
        )
    }
    const renderItem_artists = ({ item }) => {
        return (
            <View style={styles.cover}>
                <Image
                    style={styles.artist_image}
                    source={{ uri: item.artwork }}
                />
                <Text style={styles.title_artist} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>

            </View>
        )
    }

    return (
        <View style={styles.container}>
            
            <ScrollView style={styles.scrollView}>
            <Text style={{color:'white',fontSize:40,margin:10}}>Hello SID :)</Text>
                {/*SONGS */}
                <View style={styles.songs}>
                    <Text style={styles.Header}>Songs</Text>
                    <View style={styles.songsSlider}>
                        <FlatList
                            horizontal
                            data={songs}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                {/*Recently played */}
                <View style={styles.songs}>
                    <Text style={styles.Header}>Recent</Text>
                    <View style={styles.songsSlider}>
                        <FlatList
                            horizontal
                            data={songs}
                            renderItem={renderItem}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.songs}>
                    <Text style={styles.Header}>Playlists</Text>
                    <View style={styles.songsSlider}>
                        <FlatList
                            horizontal
                            data={songs}
                            renderItem={renderItem_playlists}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>

                <View style={styles.songs}>
                    <Text style={styles.Header}>Artists</Text>

                    <View style={styles.songsSlider}>
                        <FlatList
                            horizontal
                            data={songs}
                            renderItem={renderItem_artists}
                            keyExtractor={item => item.id}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>




                {/*
            
            songs
            recently played
            playlists
            artists
            albums
            New release of fav artists
            
            
            */}
            </ScrollView>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

        

    },
    scrollView:{
        marginTop:10,
        marginBottom:80
    },
    songs: {
        marginHorizontal: 10,
        marginBottom: 10,
    },
    Header: {
        fontSize: 25,
        textTransform: 'uppercase',
        marginBottom: 10,
        color: 'white',
        borderBottomColor: '#ffffff50',
        borderBottomWidth: 1
    },
    title: {
        fontWeight: "bold",
        color: 'white'
    },
    title_artist: {
        fontWeight: "bold",
        color: 'white',

        textAlign: 'center',
        backgroundColor: 'red'
    },
    artist: {
        color: 'white'
    },
    image: {
        width: width / 3,
        height: width / 3,


    },
    cover: {
        marginRight: 10,
        width: width / 3,

    },
    image_playlist: {
        width: width / 2,
        height: width / 2,
    },
    cover_playlist: {
        marginRight: 10,
        width: width / 2,

    },
    artist_image: {
        width: width / 3,
        height: width / 3,
        borderRadius: width / 6,
    },
});
