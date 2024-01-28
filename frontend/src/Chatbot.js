import React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
import Speech from 'react-speech';
import Header from './Header';
import './Chatbot.css';
import boombox from './boombox.png';
import waves from "./waves.png"



const Dictaphone = (props) => {
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    const mode = props.mode;

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }

    return (
        <div>
            {mode === "audio" ?
                <div className='prompt-container'>
                    <form>
                        <input className='prompt-text' value={transcript} placeholder='Your voice prompt will show here.' />
                        <button>Submit</button>
                    </form>
                </div> : null
            }
            <div className='button-container2'>
                <p className='microphone'>Microphone: {listening ? 'on' : 'off'}</p>
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


    function handleSubmit(event) {
        event.preventDefault();
        setContent(content + promptContent);
        setPromptContent("");
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
                        <div className='rectangle'>
                            {content}
                        </div>
                        {mode === 'text' ?
                            <form method='post' onSubmit={handleSubmit}>
                                <input className='prompt-text' value={promptContent} type='text' placeholder='Enter your prompt here.' onChange={(e) => setPromptContent(e.target.value)} />
                                <input type='submit' />
                            </form>
                            : null}

                        <Dictaphone mode={mode}></Dictaphone>
                        <button onClick={() => {
                            if (mode === 'text') {
                                setMode('audio');
                            } else {
                                setMode('text');
                            }
                        }}>Change mode</button>
                    </div>


                    {/* <Speech text={text} />, */}
                </div>






            </div>
        </>
    )
}

export default Chatbot;