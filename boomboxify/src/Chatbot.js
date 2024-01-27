function Chatbot(props) {
    const setChatbotActive = props.setChatbotActive;
    const setAppActive = props.setAppActive;

    const handleBackButtonClick = () => {
        setChatbotActive(false);
        setAppActive(true);
    }

    return (
        <div>
            <button onClick={() => handleBackButtonClick()}>You are at Chatbot page. click to back to main page</button>
        </div>
    )
}

export default Chatbot;