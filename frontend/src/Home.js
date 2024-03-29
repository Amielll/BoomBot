import Header from "./Header"
import boombox from './boombox.png';
import {useEffect} from "react";

export default function Home() {

    useEffect(() => {
        const getTokenFromUrl = () => {
            return window.location.hash
                .substring(1)
                .split('&')
                .reduce((initial, item) => {
                    let parts = item.split("=");
                    initial[parts[0]] = decodeURIComponent(parts[1]);
                    return initial;
                }, {});
        };

        console.log(getTokenFromUrl());
        const token = getTokenFromUrl().access_token;
        console.log("Trying to get token...");
        if (token) {
            console.log("Got token!");
            localStorage.setItem("cookie", token);
        }
    }, []);

  return <>
   <Header focus="home"></Header>
            <div className='header-container1'>
            <p className='header'>Hi, I'm</p> <p className='header' style={{color: '#E7D7AB', marginLeft: '1rem'}}>BoomBot!</p>
            </div>
            <div className='subheader-container' style={{marginTop: "-4rem"}}>
                <div className='subheader-elem'>I’m an AI BoomBox powered with Cohere!</div>
                <div className='subheader-elem'>Here to chat with you about music, and generate nostalgic Spotify playlists<br></br> according to your tastes!</div>
            </div>

            <div class="image-container"><img src={boombox} alt="boombox" className="boombox chat" style={{maxHeight: '35%', maxWidth: '35%'}}/></div>

            {/* <div className='prompt-container'>
                <input className='prompt-text' placeholder='Enter your prompt here.'/>
            </div> */}

        <div class="corner-border top-right"></div>
        <div class="corner-border bottom-left"></div>
    </>
}