import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) { // TODO: add addresses 
  const focus = props.focus;
  let h, c, p = "";
  if (focus === "home") {
    h = "header-elem-focus";
  } else if (focus === "chatbot") {
    c = "header-elem-focus";
  }
  else if (focus === "playlist") {
    p = "header-elem-focus";
  }
  return <nav>
    <div className="header-elem-container">
    <div className={`header-elem ${h}`}><a href='/home'>Home</a></div>
    <div className={`header-elem ${c}`}><a href='/chat'>Chat</a></div>
    <div className={`header-elem ${p}`}><a href='/playlist'>Playlist</a></div>
    </div>
  </nav>
}