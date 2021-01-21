/* eslint-disable prettier/prettier */
import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

export default function Tempbox() {
    return (
        <View>
            <View style={{ width: Dimensions.get('window').width, backgroundColor: 'green', height: 50 }}></View>
        </View>
    )
}

const styles = StyleSheet.create({})
