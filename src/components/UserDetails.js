/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View,Image, Dimensions} from 'react-native'

export default function UserDetails() {
    return (
        <View style={styles.body}>
            <Image style={styles.userPhoto} source={{uri:"https://www.kindpng.com/picc/m/495-4952535_create-digital-profile-icon-blue-user-profile-icon.png"}} />
            
                <View style={styles.userDetails}>
                    <Text style={styles.userName}>Sexysidd007</Text>
                    <Text style={styles.tagline}>Tagline</Text>
                </View>
                <View style={styles.artistFollow}>
                    <Text style={styles.follow}>18</Text>
                    <Text style={styles.artist}>artist</Text>
                </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flexDirection:'row',
        alignItems:'center',
        marginBottom:25,
       
    },
    userPhoto:{
        width:100,
        height:100,
        borderRadius:50,
        marginRight:15,
    },
    userName:{
        fontSize:25,
        color:'white'
    },
    tagline:{
        color:'#ffffff90'
    },
    artistFollow:{
        backgroundColor:'red',
        justifyContent:'flex-end'
        
    },
    follow:{
        color:'#ffffff',
        
    },
    artist:{
        color:'#ffffff'
    },
    userDetails:{
        width:Dimensions.get('window').width/2
    }
})
