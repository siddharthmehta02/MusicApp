/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SongContext } from './provider/SongProvider';


const { width } = Dimensions.get('window')

export default function HomeScreen() {
    const renderItem = ({ item }) => {
        return (
            <View style={styles.cover}>


                <TouchableOpacity onPress={()=>contextData.setItem(item)}>
                    
                <Image
                    style={styles.image}
                    source={{ uri: item.Artwork }}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.Title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{item.Artist}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const renderItem_playlists = ({ item }) => {
        return (
            <View style={styles.cover_playlist}>
                <TouchableOpacity>
                <Image
                    style={styles.image_playlist}
                    source={{ uri: item.artwork }}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{item.artist}</Text>
                </TouchableOpacity>
            </View>
        );
    };
    const renderItem_artists = ({ item }) => {
        return (
            <View style={styles.cover}>
                <TouchableOpacity>
                <Image
                    style={styles.artist_image}
                    source={{ uri: item.artwork }}
                />
                <Text style={styles.title_artist} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                </TouchableOpacity>

            </View>
        );
    };
    const contextData = useContext(SongContext);
    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
                <Text style={{ color: 'white', fontSize: 40, margin: 10 }}>Hello SID :)</Text>
                {/*SONGS */}
                <View style={styles.songs}>
                    <Text style={styles.Header}>Songs</Text>
                    <View style={styles.songsSlider}>
                        <FlatList
                            horizontal
                            data={contextData.songs}
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
                            data={contextData.songs}
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
                            data={contextData.songs}
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
                            data={contextData.songs}
                            renderItem={renderItem_artists}
                            keyExtractor={(item) => { return item.id; }}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
    },
    scrollView: {
        marginTop: 10,
        marginBottom: 80,
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
        borderBottomWidth: 1,
    },
    title: {
        fontWeight: "bold",
        color: 'white',
    },
    title_artist: {
        fontWeight: "bold",
        color: 'white',

        textAlign: 'center',
        backgroundColor: 'red',
    },
    artist: {
        color: 'white',
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
