import Header from "./Header";
import "./Playlist.css";
import cassette from "./cassette.png";

function PlaylistGenerator(props) {
    const setPlaylistActive = props.setPlaylistActive;
    const setAppActive = props.setAppActive;

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
                    BoomBot is here to recommend you 5 nostalgic tunes, and give you a 
                    fitting playlist name and description right in your Spotify Library.
                </div>
            </div>
            
            <div class="gen-button">
                <button class="generate" onClick={async () => {
                        try {
                            const accessToken = localStorage.getItem('cookie');
                            const response = await fetch(`http://localhost:5001/suggestions?access_token=${accessToken}`, {
                                method: 'GET',
                                headers: {
                                    'Content-Type': 'application/json',
                                },
                            });

                            const data = await response.json();
                            console.log(data);
                        } catch (error) {
                            console.error('Failed to get suggestions:', error);
                        }
                    }}>
                        Generate My Playlist!
                    </button>
            </div>
            <div class="img-container">
                <img src={cassette} alt="cassette" class="cassette"/>
            </div>
            <div class="corner-border top-right"></div>
            <div class="corner-border bottom-left"></div>
        </div>
    )

}

export default PlaylistGenerator