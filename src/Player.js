// /* eslint-disable prettier/prettier */
// import React, { useEffect, useState, useRef } from 'react';
// import { ImageBackground, View, Text, Dimensions, Image, StyleSheet, TouchableOpacity, ActivityIndicator } from 'react-native';
// import TrackPlayer, { usePlaybackState, useTrackPlayerProgress } from 'react-native-track-player';
// import MaterialIcons from "react-native-vector-icons/MaterialIcons";
// import songs from "./data.json";
// import { useNavigation } from '@react-navigation/native';
// import Slider from '@react-native-community/slider';
// import TextTicker from 'react-native-text-ticker';


// const { width, height } = Dimensions.get("window");
// export default function Player() {
//   // console.log(isUp)
//   // const playbackState = usePlaybackState()
//   // const { position, duration } = useTrackPlayerProgress();
//   // const [isPlaying, setIsPlaying] = useState("playing")
//   // const [background, setBackground] = useState()
//   // const firstSong = songs[0]
//   // // var trackId = TrackPlayer.getCurrentTrack();
//   // // var trackObjects = TrackPlayer.getTrack(trackId);
//   // const [trackObject, setTrackObject] = useState(firstSong)
//   // const isPlayerReady = useRef(false)
//   // const navigation = useNavigation()
//   // const formatTime = (secs) => {
//   //   let minutes = Math.floor(secs / 60);
//   //   let seconds = Math.ceil(secs - minutes * 60);

//   //   if (seconds < 10) seconds = `0${seconds}`;

//   //   return `${minutes}:${seconds}`;
//   // };

//   // useEffect(() => {
//   //   navigation.setOptions({ headerShown: false });
//   //   TrackPlayer.setupPlayer().then(async () => {
//   //     isPlayerReady.current = true
//   //     await TrackPlayer.reset();
//   //     await TrackPlayer.add(songs);
//   //     // play.current = true
//   //     TrackPlayer.play();
//   //     var trackId = await TrackPlayer.getCurrentTrack();
//   //     var trackObject = await TrackPlayer.getTrack(trackId);
//   //     setTrackObject(trackObject);
//   //     console.log(trackObject)
//   //     TrackPlayer.updateOptions({
//   //       stopWithApp: true,
//   //       alwaysPauseOnInterruption: true,
//   //       capabilities: [
//   //         TrackPlayer.CAPABILITY_PLAY,
//   //         TrackPlayer.CAPABILITY_PAUSE,
//   //         TrackPlayer.CAPABILITY_SEEK_TO,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//   //       ],
//   //       compactCapabilities: [
//   //         TrackPlayer.CAPABILITY_PLAY,
//   //         TrackPlayer.CAPABILITY_PAUSE,
//   //         TrackPlayer.CAPABILITY_SEEK_TO,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//   //       ],
//   //       notificationCapabilities: [
//   //         TrackPlayer.CAPABILITY_PLAY,
//   //         TrackPlayer.CAPABILITY_PAUSE,
//   //         TrackPlayer.CAPABILITY_SEEK_TO,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
//   //         TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
//   //       ],
//   //     });
//   //   })

//   // }, [])
//   // useEffect(() => {
//   //   if (playbackState === 'playing' || playbackState === 3) {
//   //     setIsPlaying('pause');
//   //   } else if (playbackState === 'pause' || playbackState === 2) {
//   //     setIsPlaying('playing');
//   //   } else {
//   //     setIsPlaying('loading');
//   //   }
//   // }, [playbackState]);
//   // // useEffect(() => {
//   // //     if (isPlayerReady) {
//   // //         setTrackId(TrackPlayer.getCurrentTrack())
//   // //     }
//   // // }, [TrackPlayer.getCurrentTrack()])

//   // const renderPlayPauseButton = () => {
//   //   switch (isPlaying) {
//   //     case "playing":
//   //       return <MaterialIcons name="play-arrow" size={70} style={styles.icon} />
//   //     case "pause":
//   //       return <MaterialIcons name="pause" size={70} style={styles.icon} />
//   //     default:
//   //       return <ActivityIndicator size={70} color="#303030" />
//   //   }
//   // };

//   // const playPause = () => {
//   //   if (isPlaying === "playing") {
//   //     TrackPlayer.play()
//   //   }
//   //   else if (isPlaying === "pause") {
//   //     TrackPlayer.pause()
//   //   }
//   // };

//   // const renderArtwork = () => {
//   //   return (
//   //     <View style={styles.artworkContainer}>
//   //       <Image
//   //         style={styles.artwork}
//   //         source={{ uri: trackObject.artwork }}
//   //       />
//   //       <View style={styles.titleParent}>
//   //         <TextTicker
//   //           style={styles.title}
//   //           duration={8000}
//   //           loop
//   //           bounce
//   //           repeatSpacer={100}
//   //           marqueeDelay={5000}
//   //         >
//   //           {/* Siddharth the sexy boy in duh house  */}
//   //           {trackObject.title}
//   //         </TextTicker>
//   //         {/* <Text style={styles.title}>{songs[index].title}</Text> */}
//   //         <Text style={styles.artist}>{trackObject.artist}</Text>
//   //       </View>
//   //     </View>
//   //   );
//   // };

//   // const handleChange = (val) => {
//   //   TrackPlayer.seekTo(val);
//   // };

//   // const goNext = async () => {
//   //   TrackPlayer.skipToNext();
//   //   // setTrackId(await TrackPlayer.getCurrentTrack());
//   //   var trackId = await TrackPlayer.getCurrentTrack();
//   //   var trackObject = await TrackPlayer.getTrack(trackId);
//   //   setTrackObject(trackObject);
//   //   console.log(trackObject)
//   // };


//   // const goBack = async () => {
//   //   TrackPlayer.skipToPrevious();
//   //   var trackId = await TrackPlayer.getCurrentTrack();
//   //   var trackObject = await TrackPlayer.getTrack(trackId);
//   //   setTrackObject(trackObject);
//   //   console.log(trackObject)
//   // };

//   const reload = () => {
//     var trackId = TrackPlayer.getCurrentTrack();
//     var trackObject = TrackPlayer.getTrack(trackId);
//     setTrackObject(trackObject);
//   }

//   return (
//     // <ImageBackground source={{ uri: trackObject.artwork }} style={styles.image}>
//     //   <View style={styles.container}>
//     //     <View >

//     //       {renderArtwork()}
//     //     </View>
//     //     <View style={styles.slider}>
//     //       <Slider
//     //         style={{ width: 320, height: 40 }}
//     //         minimumValue={0}
//     //         value={position}
//     //         maximumValue={duration}
//     //         minimumTrackTintColor="#FFF"
//     //         onSlidingComplete={handleChange}
//     //         maximumTrackTintColor="rgb(255,255,255)"
//     //         thumbTintColor="#FFFfff"
//     //       />
//     //     </View>
//     //     <View style={styles.timeContainerParent}>
//     //       <View style={styles.timeContainer}>
//     //         <Text style={styles.timers}>{formatTime(position)}</Text>
//     //         <Text style={styles.timers}>{formatTime(duration)}</Text>
//     //       </View>
//     //     </View>
//     //     <View style={styles.controllerParent}>
//     //       <View style={styles.controller}>
//     //         <TouchableOpacity >
//     //           <MaterialIcons name="shuffle" size={25} style={styles.icon} />
//     //         </TouchableOpacity>
//     //         <TouchableOpacity onPress={goBack} >
//     //           <MaterialIcons name="skip-previous" size={40} style={styles.icon} />
//     //         </TouchableOpacity>
//     //         <TouchableOpacity onPress={playPause}>
//     //           {renderPlayPauseButton()}
//     //         </TouchableOpacity>
//     //         <TouchableOpacity onPress={goNext}>
//     //           <MaterialIcons name="skip-next" size={40} style={styles.icon} />
//     //         </TouchableOpacity>
//     //         <TouchableOpacity >
//     //           <MaterialIcons name="loop" size={25} style={styles.icon} />
//     //         </TouchableOpacity>
//     //       </View>
//     //     </View>
//     //   </View>
//     // </ImageBackground>



//   );
// }

// const styles = StyleSheet.create({
//   artworkContainer: {
//     justifyContent: 'space-evenly',
//     alignItems: 'center',
//   },
//   artwork: {
//     width: 320,
//     height: 320,
//   },
//   icon: {
//     color: '#fff',
//   },
//   controllerParent: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   controller: {
//     alignItems: 'center',
//     flexDirection: 'row',
//     justifyContent: 'space-between',

//     width: 280,
//   },
//   container: {
//     // justifyContent: 'space-evenly',
//     height: '100%',
//     backgroundColor: '#00000090',
//     // maxHeight: 500,
//     // width:'100%',
//     alignItems: 'center',
//     justifyContent: 'center',
//     zIndex: 100,

//   },
//   title: {
//     marginTop: 20,
//     fontSize: 25,
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     fontWeight: 'bold',
//     color: '#FFFFFF',
//   },
//   titleParent: {
//     // marginHorizontal:30,
//     width: 320,
//   },
//   artist: {
//     fontSize: 16,
//     textAlign: 'center',
//     textTransform: 'capitalize',
//     color: '#FFFFFF',
//   },
//   image: {
//     flex: 1,
//     resizeMode: 'cover',
//     // justifyContent: "center",
//     width: '100%',
//     padding: 0,
//     elevation: -1
//   },
//   timeContainerParent: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//   },
//   timeContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     // backgroundColor:'red',
//     width: 300,
//     alignItems: 'center',
//   },
//   timers: {
//     color: '#fff',
//   },
//   slider: {
//     marginTop: 30
//   },
// });