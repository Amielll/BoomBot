import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Speech from 'react-speech';
import Header from './Header';
import './Chatbot.css';
import boombox from './boombox.png';
import waves from "./waves.png"
import axios from 'axios';
import mic from "./mic.png";
import textt from "./text.png";


const Dictaphone = (props) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const mode = props.mode;
    const content = props.content;
    const setContent = props.setContent;

    const handleSubmit2 = () => {
        if (transcript === "") {
            return;
        }
        setContent( content + 'You: ' + transcript + "\n");
        
        axios.post("http://127.0.0.1:5000/api/chat", {"userid": localStorage.getItem("cookie"), "prompt": transcript}).then(response => {
            setContent( content + 'You: ' + transcript + '\n' + '\n' + 'BoomBot: ' +response.data + '\n' + '\n');
            
        }).catch(error => {
            console.error(error);
        })
        resetTranscript();
    }

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div style={{display: "inline-block"}}>
            {mode === "audio" ?
                <div className='prompt-container'>
                        <input className='prompt-text' value={transcript} placeholder='Your voice prompt will show here.' />
                        <button className="submit-button" onClick={handleSubmit2}>Submit</button>
                </div> : null
            }
            <div className='button-container2' style={{marginTop: '1rem'}}>
                <div className='microphone' style={{marginRight: '1rem'}}>Microphone: {listening ? 'on' : 'off'}</div>
                <button className='button-elem2' onClick={SpeechRecognition.startListening}>Start</button>
                <button className='button-elem2' onClick={SpeechRecognition.stopListening}>Stop</button>
                <button className='button-elem2' onClick={resetTranscript}>Reset</button>
            </div>
        </div>
    );
};


function Chatbot(props) {
    const setChatbotActive = props.setChatbotActive;
    const setAppActive = props.setAppActive;
    const [content, setContent] = React.useState("");
    const [promptContent, setPromptContent] = React.useState("");
    const [mode, setMode] = React.useState("text");

    const [imgsrc, setImgsrc] = React.useState(mic);


    function handleSubmit() {
        setPromptContent("")
        setContent(content + 'You: ' + promptContent)
        axios.post("http://127.0.0.1:5000/api/chat", {"userid": localStorage.getItem("cookie"), "prompt": promptContent}).then(response => {
            setContent( content + 'You: ' + promptContent + '\n' + '\n' + 'BoomBot: ' +response.data + '\n' + '\n');
            
        }).catch(error => {
            console.error(error);
        })
    }

    const text = "In this guide, we show how to use the Chat endpoint to create a simple Chatbot that, given an input query, responds to it considering the previous context.";

    const handleBackButtonClick = () => {
        setChatbotActive(false);
        setAppActive(true);
    }
    <div class="image-container"><img src={boombox} alt="boombox" class="boombox" /></div>

    return (
        <>
            <Header focus="chatbot"></Header>
            <div className='grid2x2'>

                <div className='first-part'>
                    <div className='header-container'>
                        <div className='intro' style={{ color: 'white' }}>Chat With</div>
                        <div className='intro'>BoomBot!</div>
                    </div>
                    <div class="image-container"><img src={boombox} alt="boombox" className="boombox chat" /></div>
                    <div className='subheader-container'>
                        <div className='subheader-elem'>Ask me anything about music! </div>
                        <div className='subheader-elem'>(P. S., I can also give recommendations!)</div>
                    </div>


                </div>
                <div>
                    <div>
                        <div className='rectangle display-linebreak'>
                            {content}
                        </div>
                        {mode === 'text' ?
                            <div style={{marginTop: '0.5rem'}}>
                                <input className='prompt-text' type='text' value={promptContent} placeholder='Enter your prompt here.' onChange={(e) => setPromptContent(e.target.value)}   />
                                <input className='submit-button' onClick={() => handleSubmit()} type='submit'/>
                            </div>
                            : null}

                        <Dictaphone mode={mode} handleSubmit={handleSubmit} content={content} setContent={setContent}></Dictaphone>
                        <button className='change-mode' onClick={() => {
                            if (mode === 'text') {
                                setImgsrc(textt)
                                setMode('audio');
                            } else {
                                
                                setImgsrc(mic)
                                setMode('text');
                            }
                        }}>
                            <img src={imgsrc}/>
                        </button>
                    
                    </div>


                    {/* <Speech text={text} />, */}
                </div>






            </div>
        </>
    )
}

export default Chatbot;