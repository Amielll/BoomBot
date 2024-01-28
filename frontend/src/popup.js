import { useState } from "react";
import "./popup.css"

function Popup(props) {
    //value={username} onChange={e => setUsername(e.target.value)}
    //value={password} onChange={e => setPassword(e.target.value)} 
    //onSubmit={handleLogin}
    const handleUserAgeInput = props.handleUserAgeInput;
    const [age, setAge] = useState("");
    return (
        <div className="popup">
            <div className="popup-inner">
                <h2>Age Requested!</h2>
                <div>
                    <label>
                        Please type your age
                        <input type="text" onChange={e => setAge(e.target.value)}/>
                    </label>
                    <button type="submit" onClick={() => handleUserAgeInput(age)}>Submit!</button>
                </div>
            </div>
        </div>
    )
}

export default Popup;