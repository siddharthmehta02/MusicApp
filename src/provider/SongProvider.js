/* eslint-disable keyword-spacing */
/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';

const SongContext = React.createContext();

const SongProvider = (props) => {
    const [ready, setReady] = useState(false)
    const [user, setUser] = useState();
    const [playlist, setPlaylist] = useState();
    const [playing, setPlaying] = useState();
    const [queue, setQueue] = useState();

    const [item, setItem] = useState();
    const [songs, setSongs] = useState();

    const getapi = async () => {
        const response = await fetch('http://127.0.0.1:5000/getAllSongs');
        var data = await response.json();
        setSongs(data);
        setItem(songs[0]);
        setQueue(songs.slice(0,11))
        setReady(true);
        // console.log('data');
        // console.log(data);
    };

    // useEffect(() => {
    //     console.log(item);
    // }, [item]);

    // const setTheQeue=(item)=>{
    //     setQueue(item)
    //     //peeche ka queue (Q hai peeche ka???)
    // };

    useEffect( () => {
        if (!ready) {
            // console.log('useEffect called');
            getapi();
            // console.log('songs');
            // console.log(songs);
            // console.log('item');
            // console.log(item);
        }
    });
    return (
        <SongContext.Provider
            value={{
                user,
                playlist,
                playing,
                queue,
                item,
                songs,
                setUser,
                setPlaylist,
                setPlaying,
                setQueue,
                setItem,
                setSongs,
            }}
        >
            {props.children}
        </SongContext.Provider>
    );
};


export { SongContext, SongProvider };