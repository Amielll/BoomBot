import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Speech from 'react-speech';
import Header from './Header';
import './Chatbot.css';
import boombox from './boombox.png';
import waves from "./waves.png"



const Dictaphone = () => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
  
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
  
    return (
        <div>
            <p>Microphone: {listening ? 'on' : 'off'}</p>
            <button onClick={SpeechRecognition.startListening}>Start</button>
            <button onClick={SpeechRecognition.stopListening}>Stop</button>
            <button onClick={resetTranscript}>Reset</button>
            <p>{transcript}</p>
        </div>
    );
};


function Chatbot(props) {
    const setChatbotActive = props.setChatbotActive;
    const setAppActive = props.setAppActive;

    const text = "In this guide, we show how to use the Chat endpoint to create a simple Chatbot that, given an input query, responds to it considering the previous context.";

    const handleBackButtonClick = () => {
        setChatbotActive(false);
        setAppActive(true);
    }
    <div class="image-container"><img src={boombox} alt="boombox" class="boombox"/></div>

    return (
        <div>
            <Header focus="chatbot"></Header>
            <div className='header-container'>
            <p className='header'>Hi, I'm {' '} </p> <p className='header' style={{color: '#E7D7AB', marginLeft: '-3rem'}}> BoomBot!</p>
            </div>
            <div className='subheader-container'>
                <div className='subheader-elem'>Ask me anything about music! </div>
                <div className='subheader-elem'>(P. S., I can also give recommendations!)</div>
            </div>

            <div class="image-container"><img src={boombox} alt="boombox" className="boombox chat"/></div>

            <div className='prompt-container'>
                <input className='prompt-text' placeholder='Enter your prompt here.'/>
            </div>

            {/* <Speech text={text} />, */}
            <div className='dict-container'>
            <Dictaphone></Dictaphone>
            <button onClick={() => handleBackButtonClick()}>You are at Chatbot page. click to back to main page</button>
            </div>
            
            <div class="corner-border top-right"></div>
            <div class="corner-border bottom-left"></div>
        </div>
    )
}

export default Chatbot;