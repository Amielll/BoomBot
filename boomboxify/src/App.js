import musicnotes from "./musical_notes.png"
import boombox from "./boombox.png"
import waves from "./waves.png"
import './App.css';
import { useEffect } from "react";
import SpotifyWebApi from "spotify-web-api-js"

function App() {
    
    const authEndpoint = "https://accounts.spotify.com/authorize";
    const redirectUri = "http://localhost:3000";
    const clientId = "8e061b5b273b4471b3445424020de727";

    const spotify = new SpotifyWebApi();

    const scopes = [
        "user-read-currently-playing",
        "user-read-recently-played",
        "user-read-playback-state",
        "user-top-read",
        "user-modify-playback-state"
    ]

    const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
    
    const getTokenFromUrl = () => {
        return window.location.hash
            .substring(1)
            .split('&')
            .reduce((initial, item) => {
                let parts = item.split("=");
                initial[parts[0]] = decodeURIComponent(parts[1]);
                return initial;
            }, {})
    }

    useEffect(() => {
        const TOKEN = getTokenFromUrl().access_token;
        window.location.hash = "";
        window.location.href = window.location.href.replace(/#$/, '');
        localStorage.setItem("cookie", TOKEN);

        if (TOKEN) {
            spotify.setAccessToken(TOKEN);
            spotify.getMe().then((user) => {
                console.log(user);
            })
        }
    })

    return (
        <div class="App">
            <div id="page-container">
                <div id="content-wrap">
                    <div class="my-style">
                        BOOMBOT
                    </div>

                    <div class='subheader'>
                        Your Retro AI Boombox, Bringing Nostalgia to the Digital Era!
                    </div>

                    <div class="button-container">
                        <a href={loginUrl} class="button-link">
                            <button id="button1">Get started with Spotify!</button>
                        </a>
                        <button id="button2">Talk to our boombot!</button>
                    </div>
                    
                </div>
            </div>
            <div class="corner-border top-right"></div>
            <div class="corner-border bottom-left"></div>
            <img src={boombox} alt="boombox" class="boombox"/>
        </div>

    );
}

export default App;
