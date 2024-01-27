import musicnotes from './musical_notes.png';
import boombox from './boombox.png';

export default function Boombox() {
    return (
        <div className="Boombox">
            <div className="my-style" style={{marginTop:"1rem", fontSize:"6rem"}}>
                Enjoy your music!
            </div>
            <img src={musicnotes} id="musicnotes"></img>
            <img src={boombox} id="boombox"></img>
        </div>
    );
}