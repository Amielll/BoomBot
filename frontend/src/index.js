import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Home from './Home';
import reportWebVitals from './reportWebVitals';
import PlaylistGenerator from './PlaylistGenerator';
import Chatbot from './Chatbot';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

function Index() {
    return (
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}/>
        <Route path="/home" element={<Home />} />
        <Route path="/playlist" element={<PlaylistGenerator />} />
        <Route path="/chat" element={<Chatbot />} />
      </Routes>
      </BrowserRouter>
    )
}
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
