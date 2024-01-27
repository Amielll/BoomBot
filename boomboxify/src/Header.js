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
    <div className={`header-elem ${h}`}><a href='#'>Home</a></div>
    <div className={`header-elem ${c}`}><a href='#'>Chat</a></div>
    <div className={`header-elem ${p}`}><a href='#'>Playlist</a></div>
    </div>
  </nav>
}