import Header from "./Header";
import Playlist from "./Playlist.css";
import cassette from "./cassette.png";

function PlaylistGenerator(props) {
    const setPlaylistActive = props.setPlaylistActive;
    const setAppActive = props.setAppActive;

    return (
        <div>
            <Header focus="playlist">
            <div class="gen-title">BoomBot Nostalgia Blast</div>
            </Header>
            <div class="gen-title">BoomBot Nostalgia Blast</div>
            <div class="gen-desc-container">
                <div class="gen-desc">
                    Looking for some older songs that fit your music taste? 
                    BoomBot is here to recommend you 5 nostalgic tunes, and give you a 
                    fitting playlist name and description right in your Spotify Library.
                </div>
            </div>
            
            <div class="gen-button">
                <button onClick={() => {
                    
                }}>
                    Generate My Playlist!
                </button>
            </div>
            <div class="img-container">
                <img src={cassette} alt="cassette" class="cassette"/>
            </div>
        </div>
    )

}

export default PlaylistGenerator