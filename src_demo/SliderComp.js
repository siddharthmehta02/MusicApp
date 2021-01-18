/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

import TrackPlayer, { useTrackPlayerProgress } from 'react-native-track-player';

export default function SliderComp() {
    const { position, duration } = useTrackPlayerProgress();

    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);

        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    };

    const handleChange = (val) => {
        TrackPlayer.seekTo(val);
    };


    return (
        <View style={styles.container}>
            <View style={styles.sliderContainer}>


                <Slider
                    style={{ width: 320, height: 40 }}
                    minimumValue={0}
                    value={position}
                    maximumValue={duration}
                    minimumTrackTintColor="#000000"
                    onSlidingComplete={handleChange}
                    maximumTrackTintColor="rgba(255, 255, 255, .5)"
                    thumbTintColor="#000000"
                />
            </View>

            <View style={styles.timeContainer}>
                <Text style={styles.timers}>{formatTime(position)}</Text>
                <Text style={styles.timers}>{formatTime(duration)}</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
    },
    sliderContainer: {
        alignItems: "center", 
    },
    timers: {
        color: '#000000',
        fontSize: 16,
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});