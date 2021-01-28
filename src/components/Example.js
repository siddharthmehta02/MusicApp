/* eslint-disable prettier/prettier */

import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { SongContext } from '../provider/SongProvider';

export default function Example() {
    const contextData = useContext(SongContext);
    console.log('littt')
    console.warn(contextData)
    return (
        <View>

        </View>
    )
}
