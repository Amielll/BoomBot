import './Header.css';

export default function Header() { // TODO: add addresses & add focus css
  return <nav>
    <div className="header-elem-container">
    <div className='header-elem'><a href='#'>Home</a></div>
    <div className='header-elem'><a href='#'>Chat</a></div>
    <div className='header-elem'><a href='#'>Playlist</a></div>
    </div>
    
  </nav>
}