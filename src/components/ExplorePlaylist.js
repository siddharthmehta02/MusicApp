/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window');


export default function ExplorePlaylist() {
    return (
        <View style={styles.body}>
            
                <View style={styles.imageParent}> 
                    <Image 
                        style={styles.image}
                        source={{uri:"https://cdn-profiles.tunein.com/s141274/images/bannerx.jpg?t=636542254077330000"}}
                    />
                    
                    
                </View>
                
                
            </View>
    )
}

const styles = StyleSheet.create({
    body:{
        
        backgroundColor:'black',
    },
    image:{
        width:width,
        height:width/3,
    
        
    },
    
})
