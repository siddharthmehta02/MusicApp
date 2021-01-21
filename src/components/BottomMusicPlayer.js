/* eslint-disable prettier/prettier */
import React, { useEffect, useState, useRef } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions, Pressable, ActivityIndicator, ImageBackground } from 'react-native';
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import TrackPlayer, { usePlaybackState, useTrackPlayerProgress } from 'react-native-track-player';
import Player from '../Player';
import songs from '../data.json'
import TextTicker from 'react-native-text-ticker';
import Slider from '@react-native-community/slider';




const { width, height } = Dimensions.get('window')
const bottomwidth = width / 8
export default function BottomMusicPlayer() {

    const [ready, setReady] = useState(true)
    const navigation = useNavigation();
    const firstSong = songs[0]
    const playbackState = usePlaybackState()
    const { position, duration } = useTrackPlayerProgress();
    const [isPlaying, setIsPlaying] = useState("playing")
    const [background, setBackground] = useState()
    const [trackObject, setTrackObject] = useState(firstSong)
    const isPlayerReady = useRef(false)


    useEffect(() => {
        navigation.setOptions({ headerShown: false });
        TrackPlayer.setupPlayer().then(async () => {
            isPlayerReady.current = true
            await TrackPlayer.reset();
            await TrackPlayer.add(songs);
            // play.current = true
            TrackPlayer.play();
            
        })
    }, [])
    useEffect(() => {
        if (playbackState === 'playing' || playbackState === 3) {
            setIsPlaying('pause');
        } else if (playbackState === 'pause' || playbackState === 2) {
            setIsPlaying('playing');
        } else {
            setIsPlaying('loading');
        }
    }, [playbackState]);


    const formatTime = (secs) => {
        let minutes = Math.floor(secs / 60);
        let seconds = Math.ceil(secs - minutes * 60);

        if (seconds < 10) seconds = `0${seconds}`;

        return `${minutes}:${seconds}`;
    };

    const renderPlayPauseButton = () => {
        switch (isPlaying) {
            case "playing":
                return <MaterialIcons name="play-arrow" size={70} style={styles.icon} />
            case "pause":
                return <MaterialIcons name="pause" size={70} style={styles.icon} />
            default:
                return <ActivityIndicator size={70} color="#303030" />
        }
    };

    const playPause = () => {
        if (isPlaying === "playing") {
            TrackPlayer.play()
        }
        else if (isPlaying === "pause") {
            TrackPlayer.pause()
        }
    };

    const renderArtwork = () => {
        return (
            <View style={styles.artworkContainer}>
                <Image
                    style={styles.artwork}
                    source={{ uri: trackObject.artwork }}
                />
                <View style={styles.titleParent}>
                    <TextTicker
                        style={styles.title}
                        duration={8000}
                        loop
                        bounce
                        repeatSpacer={100}
                        marqueeDelay={5000}
                    >
                        {trackObject.title}
                    </TextTicker>
                    <Text style={styles.artist}>{trackObject.artist}</Text>
                </View>
            </View>
        );
    };

    const handleChange = (val) => {
        TrackPlayer.seekTo(val);
    };

    const goNext = async () => {
        TrackPlayer.skipToNext();
        var trackId = await TrackPlayer.getCurrentTrack();
        var trackObject = await TrackPlayer.getTrack(trackId);
        setTrackObject(trackObject);
        console.log(trackObject)
        TrackPlayer.play()
    };

    const goBack = async () => {
        TrackPlayer.skipToPrevious();
        var trackId = await TrackPlayer.getCurrentTrack();
        var trackObject = await TrackPlayer.getTrack(trackId);
        setTrackObject(trackObject);
        console.log(trackObject)
        TrackPlayer.play()
    };

    const renderPlayer = () => {
        return (
            <ImageBackground source={{ uri: trackObject.artwork }} style={styles.image}>
                <View style={styles.container}>

                    <TouchableOpacity style={{position:'absolute',left:20,top:40}} onPress={()=>setReady(true)}>
                        <AntDesign name='down' size={30} color='white' />
                    </TouchableOpacity>
                    <View >
                        {renderArtwork()}
                    </View>
                    <View style={styles.slider}>
                        <Slider
                            style={{ width: 320, height: 40 }}
                            minimumValue={0}
                            value={position}
                            maximumValue={duration}
                            minimumTrackTintColor="#FFF"
                            onSlidingComplete={handleChange}
                            maximumTrackTintColor="rgb(255,255,255)"
                            thumbTintColor="#FFFfff"
                        />
                    </View>
                    <View style={styles.timeContainerParent}>
                        <View style={styles.timeContainer}>
                            <Text style={styles.timers}>{formatTime(position)}</Text>
                            <Text style={styles.timers}>{formatTime(duration)}</Text>
                        </View>
                    </View>
                    <View style={styles.controllerParent}>
                        <View style={styles.controller}>
                            <TouchableOpacity >
                                <MaterialIcons name="shuffle" size={25} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goBack} >
                                <MaterialIcons name="skip-previous" size={40} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={playPause}>
                                {renderPlayPauseButton()}
                            </TouchableOpacity>
                            <TouchableOpacity onPress={goNext}>
                                <MaterialIcons name="skip-next" size={40} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <MaterialIcons name="loop" size={25} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }

    return (
        <View
            style={styles.bottomMusicPlayer}
            onStartShouldSetResponder={() => { setReady(false) }}>

            <View style={[(ready) ? styles.bottomBar : styles.playerBar]}>
                {renderPlayer()}
            </View>

            {ready ?
                <>
                    <Image style={styles.musicImage} source={{ uri: trackObject.artwork }} />
                    <View style={styles.musicCredits}>
                        <Text style={styles.musicName}>{trackObject.title}</Text>
                        <Text style={styles.musicArtist}>{trackObject.artist}</Text>
                    </View>
                    <View style={styles.musicController}>
                        <TouchableOpacity onPress={() => goBack()} >
                            <MaterialIcons name="skip-previous" size={40} style={styles.icon} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={playPause}>{renderPlayPauseButton()}</TouchableOpacity>
                        <TouchableOpacity onPress={() => goNext()}>
                            <MaterialIcons name="skip-next" size={40} style={styles.icon} />
                        </TouchableOpacity>
                    </View>
                </> : null
            }
        </View>
    );
}

const styles = StyleSheet.create({
    bottomMusicPlayer: {
        backgroundColor: 'black',
        position: 'absolute',
        bottom: bottomwidth,
        flex: 100,
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
    },
    musicImage: {
        width: 60,
        height: 60,
        margin: 10
    },
    musicCredits: {
        marginLeft: 10,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
    },
    musicArtist: {
        color: '#ffffff90'
    },
    musicName: {
        color: 'white'
    },
    icon: {
        color: 'white'
    },
    musicController: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        right: 10
    },
    bottomBar: {
        position: 'absolute',
        bottom: -Dimensions.get('window').height - bottomwidth,
        backgroundColor: 'red',
        // height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    playerBar: {
        backgroundColor: 'red',
        height: Dimensions.get('window').height+bottomwidth,
        width: Dimensions.get('window').width,
        // position:'absolute',
        // bottom:-bottomwidth
        marginBottom:-bottomwidth
    },
    artworkContainer: {
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: 50
    },
    artwork: {
        width: 300,
        height: 300,
    },
    controllerParent: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    controller: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 280,
    },
    container: {
        height: '100%',
        backgroundColor: '#00000090',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 100,
        // marginTop:50

    },
    title: {
        marginTop: 20,
        fontSize: 25,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    titleParent: {
        width: 320,
    },
    artist: {
        fontSize: 16,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#FFFFFF',
    },
    image: {
        flex: 1,
        resizeMode: 'cover',
        width: '100%',
        padding: 0,
        // elevation: -1
        marginTop: 20
    },
    timeContainerParent: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    timeContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 300,
        alignItems: 'center',
    },
    timers: {
        color: '#fff',
    },
    slider: {
        marginTop: 30
    },
})
