import musicnotes from "./musical_notes.png"
import boombox from "./boombox.png"
import './App.css';

function App() {
    const authEndpoint
    const handleSpotifyOnclick = () => {

    }

    return (
        <div className="App">
            <div className="my-style">
                boomboxify
            </div>
            <div className='subheader'>
                Your Retro AI Boombox, Bringing Nostalgia to the Digital Era!
            </div>
            <button id='button1' onClick={() => handleSpotifyOnclick()}>
                <a href={loginUrl}>Get started with Spotify!</a>
            </button>
            <button id='button2' onClick={() => handleSpotifyOnclick()}>link to our chatbot!</button>
            <img src={musicnotes} id="musicnotes"></img>
            <img src={boombox} id="boombox"></img>
        </div>
    );
}

export default App;
