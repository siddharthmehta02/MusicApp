/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import TrackPlayer, { usePlaybackState } from 'react-native-track-player'

export default function Controller({ onNext, onPrv }) {
    const playbackState = usePlaybackState()
    const [isPlaying, setIsPlaying] = useState("playing")
    useEffect(() => {
        if (playbackState === "playing" || playbackState === 3) {
            setIsPlaying("pause")
        }
        else if (playbackState === "pause" || playbackState === 2) {
            setIsPlaying("playing")
        }
        else {
            setIsPlaying("loading")
        }
    }, [playbackState])

    const renderPlayPauseButton = () => {
        switch (isPlaying) {
            case "playing":
                return <MaterialIcons name="play-arrow" size={45} />
            case "pause":
                return <MaterialIcons name="pause" size={45} />
            default:
                return <ActivityIndicator size={45} color="#303030"/>
        }
    }

    const playPause = () => {
        if (isPlaying === "playing") {
            TrackPlayer.play()
        }
        else if (isPlaying === "pause") {
            TrackPlayer.pause()
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={onPrv}>
                <MaterialIcons name="skip-previous" size={45} />
            </TouchableOpacity>
            <TouchableOpacity onPress={playPause}>
                {/* <MaterialIcons name="pause" size={45} /> */}
                {renderPlayPauseButton()}
            </TouchableOpacity>
            <TouchableOpacity onPress={onNext}>
                <MaterialIcons name="skip-next" size={45} />
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-around",
    },
});