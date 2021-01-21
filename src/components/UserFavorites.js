/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View,Image,FlatList,Dimensions } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'

import songs from '../data.json'

const {width,height}=Dimensions.get('window')

export default function UserFavorites({title}) {
    const renderItem=({item})=>{
        return(
            <View style={styles.cover}>
                <Image
                    style={styles.image}
                    source={{uri:item.artwork}}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{item.title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{item.artist}</Text>
            </View>
        )
    }
    return (
        <View style={styles.songs}>
                <View style={styles.headerTitle}>
                <Text style={styles.Header}>{title}</Text>
                <AntDesign name="doubleright" size={20} color="#ffffff90"/>
                </View>
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
    )
}

const styles = StyleSheet.create({
    songs: {
        marginHorizontal:10,
        marginBottom:10,
    },
    headerTitle:{
        borderBottomColor:'#ffffff50',
        borderBottomWidth:1,
        marginBottom:10,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:8
    },
    Header: {
        fontSize:25,
        color:'white',
    },
    image:{
        width:width/3,
        height:width/3,
    },
    cover:{
        marginRight:10,
        width:width/3,

    },
    title:{
        fontWeight:"bold",
        color:'white'
    },
    artist:{
        color:'white'
    },
})
