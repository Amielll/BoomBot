import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PlaylistGenerator from './PlaylistGenerator';
import { Auth0Provider } from '@auth0/auth0-react';
import Chatbot from './Chatbot';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
    const [playlistActive, setPlaylistActive] = useState(false);
    const [chatbotActive, setChatbotActive] = useState(false);
    const [appActive, setAppActive] = useState(true);

    let contentToRender = "";

    if (appActive) contentToRender = <App setPlaylistActive={setPlaylistActive} setChatbotActive={setChatbotActive} setAppActive={setAppActive}></App>
    if (playlistActive) contentToRender = <PlaylistGenerator setPlaylistActive={setPlaylistActive} setAppActive={setAppActive}></PlaylistGenerator>
    if (chatbotActive) contentToRender = <Chatbot setChatbotActive={setChatbotActive} setAppActive={setAppActive}></Chatbot>
    //<>{contentToRender}</>
    return (
        <Auth0Provider
            domain="dev-7djeqz7vox1me0py.us.auth0.com"
            clientId="6SgynURg2zuGgcCuYCXtOwBBC5wro44p"
            authorizationParams={{
            redirect_uri: window.location.origin
        }}>
            {contentToRender}
        </Auth0Provider>
    )
}
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
