/* eslint-disable no-trailing-spaces */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { StyleSheet, Text, View,Image,Dimensions, Modal } from 'react-native'
import { TouchableOpacity, TouchableWithoutFeedback } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('window');
const boxDimension = (width)/3;

import songs from '../data.json'

export default function ExploreAlbumMix() {
    const[modalVisible,setModalVisible]=useState(false)
    return (
      <View>
        <Modal animationType="fade" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
            <View style={styles.cover}>
                
 
           
                <Image
                    style={styles.modalImage}
                    source={{uri:songs[1].artwork}}
                />
                <Text style={styles.title} numberOfLines={1} ellipsizeMode='tail'>{songs[1].title}</Text>
                <Text style={styles.artist} numberOfLines={1} ellipsizeMode='tail'>{songs[1].artist}</Text>
               
            
                
                
                
            </View>

              
            </View>
          </View>
        </Modal>
        <View style={styles.body}>
          <View style={styles.music}>
            <View>
              <TouchableOpacity
                onPressIn={() => {
                  setModalVisible(true);
                }}
                onPressOut={() => {
                  setModalVisible(false);
                }}>
                <Image style={styles.image} source={{uri: songs[1].artwork}} />
              </TouchableOpacity>
            </View>

            <View style={styles.imageParent}>
              <TouchableOpacity
                onPressIn={() => {
                  setModalVisible(true);
                }}
                onPressOut={() => {
                  setModalVisible(false);
                }}>
                <Image style={styles.image} source={{uri: songs[2].artwork}} />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <TouchableOpacity
              onPressIn={() => {
                setModalVisible(true);
              }}
              onPressOut={() => {
                setModalVisible(false);
              }}>
              <Image style={styles.image2} source={{uri: songs[3].artwork}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View>
            <TouchableOpacity
              onPressIn={() => {
                setModalVisible(true);
              }}
              onPressOut={() => {
                setModalVisible(false);
              }}>
              <Image style={styles.image2} source={{uri: songs[1].artwork}} />
            </TouchableOpacity>
          </View>
          <View style={styles.music}>
            <View>
              <TouchableOpacity
                onPressIn={() => {
                  setModalVisible(true);
                }}
                onPressOut={() => {
                  setModalVisible(false);
                }}>
                <Image style={styles.image} source={{uri: songs[2].artwork}} />
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPressIn={() => {
                  setModalVisible(true);
                }}
                onPressOut={() => {
                  setModalVisible(false);
                }}>
                <Image style={styles.image} source={{uri: songs[3].artwork}} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width:boxDimension,
        height:boxDimension,
        // marginBottom:35,
    },
    body:{
        flexDirection:'row',
        // marginHorizontal:12,
        
        justifyContent:'space-between'
    },
    image2:{
        width:2*boxDimension,
        height:2*boxDimension,
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        backgroundColor:'#00000070',
      },
      modalView: {
        margin: 20,
        backgroundColor: "black",
        borderRadius: 10,
        // padding: 10,
        paddingBottom:10,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      
      
      
      cover:{
        
        width:width/2,
        justifyContent:'center',
        alignItems:'center'

    },
    artist:{
        color:'white'
    },
    modalImage:{
        width:width/2,
        height:width/2,
        
        
    },
    title:{
        fontWeight:"bold",
        color:'white'
    },
})
