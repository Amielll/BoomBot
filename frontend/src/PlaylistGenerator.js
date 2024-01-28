import Header from "./Header";
import "./Playlist.css";
import { useState } from "react";

function PlaylistGenerator(props) {
    const setPlaylistActive = props.setPlaylistActive;
    const setAppActive = props.setAppActive;
    const [playlist, setPlaylist] = useState([]);
    console.log(playlist)

    return (
        <div>
            <Header focus="playlist">
            </Header>
            <div className="gen-title">
                <span style={{color: '#E9D7A5'}}>BoomBot</span> Nostalgia Blast
            </div>
            <div class="gen-desc-container">
                <div class="gen-desc">
                    Looking for some older songs that fit your music taste? 
                    BoomBot is here to recommend you up to 10 nostalgic tunes to add to your playlist!
                </div>
            </div>
            
            <div class="gen-button">
                <button class="generate" onClick={async () => {
                        try {
                            const accessToken = localStorage.getItem('cookie');
                            const response = await fetch(`https://boombot.tech/api/suggestions?access_token=${accessToken}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });

                            const data = await response.json().then((data) => {
                                const songs = data.songs;
                                const songList = [];
                                for (var i = 0; i < 10; i++) {
                                    songList.push(songs[i].title + " - " + songs[i].artists);
                                }
                                setPlaylist(songList);
                            });
                            console.log(data);
                        } catch (error) {
                            console.error('Failed to get suggestions:', error);
                        }
                    }}>
                        Generate My Tunes!
                    </button>
            </div>
            <div class="playlist-container"> 
            <div className="playlist-div">
            <ul>
                {playlist.slice(0,5).map(song => {
                    return <li>{song}</li>
                }) }
            </ul>
            </div>
            <div className="playlist-div">
            <ul>
            {playlist.slice(5,10).map(song => {
                    return <li>{song}</li>
                }) }
            </ul>
            </div>
            </div>
            <div class="corner-border top-right"></div>
            <div class="corner-border bottom-left"></div>
        </div>
    )

}

export default PlaylistGenerator